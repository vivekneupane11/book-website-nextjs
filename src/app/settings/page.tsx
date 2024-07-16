// src/app/settings/page.tsx
"use client";
import styles from "./settings.module.css";

export default function Settings() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Settings</h1>
      <div className={styles.setting}>
        <label className={styles.label} htmlFor="darkMode">
          Dark Mode:
        </label>
        <input
          className={styles.input}
          type="checkbox"
          id="darkMode"
          name="darkMode"
        />
      </div>
      <div className={styles.setting}>
        <label className={styles.label} htmlFor="notifications">
          Enable Notifications:
        </label>
        <input
          className={styles.input}
          type="checkbox"
          id="notifications"
          name="notifications"
        />
      </div>
      <button className={styles.button} type="submit">
        Save Settings
      </button>
    </div>
  );
}
