"use client";
import { useState, useEffect } from "react";

const STORAGE_KEY = "mda_fv";
const TOTAL_SLOTS = 800;

const VACANCY_SCHEDULE = [
  { afterHours: 36, filled: 798 },
  { afterHours: 24, filled: 797 },
  { afterHours: 12, filled: 795 },
  { afterHours: 6,  filled: 793 },
  { afterHours: 0,  filled: 791 },
];

export function useScarcity() {
  const [filled, setFilled] = useState(791);
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
