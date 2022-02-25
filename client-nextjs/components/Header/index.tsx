import Link from 'next/link';
import styles from '../../styles/Header.module.css';

function Header() {
  return (
    <header className={styles.container}>
      <ul className={styles.list}>
        <Link href="/">
          <li className={styles.item}>Home</li>
        </Link>
        <Link href="/about">
          <li className={styles.item}>About</li>
        </Link>
        <Link href="/product">
          <li className={styles.item}>Product</li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
