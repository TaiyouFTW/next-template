import Link from 'next/link';
import React from 'react';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header className="container">
      {/* <nav className={styles.nav}> */}
      <nav className="d-flex justify-content-center">
        <Link href="/">
          <a className="mx-3">Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a className="mx-3">About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a className="mx-3">Users List</a>
        </Link>{' '}
        |{' '}
        <Link href="/api/users">
          <a className="mx-3">Users API</a>
        </Link>{' '}
      </nav>
    </header>
  );
}
