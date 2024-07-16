// src/app/aboutus/page.tsx
"use client";
import styles from "./aboutus.module.css";

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.paragraph}>
        Welcome to our website! We are committed to providing the best service
        possible. Our team is dedicated to making sure you have a great
        experience.
      </p>
      <p className={styles.paragraph}>
        Our mission is to deliver high-quality products and exceptional customer
        service. We value our customers and strive to meet their needs.
      </p>
    </div>
  );
}
