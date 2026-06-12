"use client";

import { useEffect, useState } from "react";

interface MobileCounterProps {
  end: number;
  suffix?: string;
}

export default function MobileCounter({
  end,
  suffix = "+",
}: MobileCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const increment = Math.ceil(end / 60);

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
}