import React from 'react';
import styles from './Login.module.css';

// Put your SVG or <img> for logo here
const Logo = () => (
  <div className={styles.logo}>
    {/* Example: <img src="/logo.svg" alt="Logo" style={{ width: "100%", height: "100%" }} /> */}
  </div>
);

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.leftPane}>
        <Logo />
        <div className={styles.title}>Unified Dynamics 365</div>
        <div className={styles.subtitle}>Sub Text</div>
        <div className={styles.subtext}>More text here</div>
      </div>
      <div className={styles.rightPane}>
        <div className={styles.welcome}>Welcome back to <br />Unified Dynamic 365</div>
        <div className={styles.loginPrompt}>Login to your account</div>
        <button className={styles.button}>
          <span className={styles.icon}>
            {/* Google Icon SVG */}
            <svg width="22" height="22" viewBox="0 0 24 24"><g><path fill="#4285F4" d="M21.6 12.227c0-.68-.061-1.354-.18-2.004H12v3.794h5.462a4.676 4.676 0 0 1-2.025 3.065l3.276 2.549c1.872-1.73 2.952-4.278 2.952-7.404z"/><path fill="#34A853" d="M12 22c2.43 0 4.469-.803 5.958-2.18l-3.276-2.549c-.909.609-2.071.966-3.333.966-2.563 0-4.736-1.73-5.499-4.045l-3.357 2.608C3.717 19.421 7.63 22 12 22z"/><path fill="#FBBC05" d="M6.501 14.192a5.785 5.785 0 0 1 0-3.686l-3.357-2.609C1.421 10.083 1 11.667 1 13.334c0 1.67.423 3.262 1.144 4.637l3.357-2.608z"/><path fill="#EA4335" d="M12 6.479c1.322 0 2.505.455 3.437 1.348l2.573-2.573C16.464 3.596 14.427 2.667 12 2.667 7.63 2.667 3.717 5.579 2.144 8.697l3.357 2.609C7.264 8.209 9.437 6.479 12 6.479z"/></g></svg>
          </span>
          Login with Google
        </button>
        <button className={styles.button}>
          <span className={styles.icon}>
            {/* Microsoft Icon SVG */}
            <svg width="22" height="22" viewBox="0 0 24 24"><g><rect fill="#F25022" x="2" y="2" width="9" height="9"/><rect fill="#7FBA00" x="13" y="2" width="9" height="9"/><rect fill="#00A4EF" x="2" y="13" width="9" height="9"/><rect fill="#FFB900" x="13" y="13" width="9" height="9"/></g></svg>
          </span>
          Login with Microsoft
        </button>
      </div>
    </div>
  );
}
