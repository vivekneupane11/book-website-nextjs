// src/app/rateus/page.tsx
"use client";
import { useState } from "react";
import styles from "./rateus.module.css";

export default function RateUs() {
  const [rating, setRating] = useState(0);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Rate Us</h1>
      <div className={styles.stars}>
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`${styles.star} ${rating > i ? styles.filled : ""}`}
            onClick={() => handleRating(i + 1)}
          >
            &#9733;
          </span>
        ))}
      </div>
      <p className={styles.message}>Your rating: {rating} out of 5</p>
    </div>
  );
}
