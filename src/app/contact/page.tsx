// src/app/contact/page.tsx
"use client";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <form className={styles.form}>
        <label className={styles.label} htmlFor="name">
          Name:
        </label>
        <input className={styles.input} type="text" id="name" name="name" />

        <label className={styles.label} htmlFor="email">
          Email:
        </label>
        <input className={styles.input} type="email" id="email" name="email" />

        <label className={styles.label} htmlFor="message">
          Message:
        </label>
        <textarea
          className={styles.textarea}
          id="message"
          name="message"
        ></textarea>

        <button className={styles.button} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
