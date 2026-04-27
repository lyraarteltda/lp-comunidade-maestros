"use client";
import { useState, useEffect } from "react";

const STORAGE_KEY = "mda_fv";
const TOTAL_SLOTS = 120;

const VACANCY_SCHEDULE = [
  { afterHours: 10, filled: 119 },
  { afterHours: 5,  filled: 118 },
  { afterHours: 0,  filled: 117 },
];

export function useScarcity() {
  const [filled, setFilled] = useState(117);
  const [price, setPrice] = useState(97);

  useEffect(() => {
    try {
      const now = Date.now();
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        localStorage.setItem(STORAGE_KEY, String(now));
        return;
      }
      const hours = (now - Number(stored)) / 3_600_000;

      for (const tier of VACANCY_SCHEDULE) {
        if (hours >= tier.afterHours) { setFilled(tier.filled); break; }
      }

      if (hours >= 48) setPrice(120);
    } catch { /* localStorage unavailable — keep safe defaults */ }
  }, []);

  return { filled, remaining: TOTAL_SLOTS - filled, price };
}
