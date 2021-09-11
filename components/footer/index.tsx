import React from 'react';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr />
      <div className="container">
        <span>I'm here to stay (Footer)</span>
      </div>
    </footer>
  );
}
