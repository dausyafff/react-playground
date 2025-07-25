import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li><Link href="/">Profil</Link></li>
        <li><Link href="/trends">Tren Crypto</Link></li>
      </ul>
      <div className={styles.chartPlaceholder}>
        Grafik akan ada di sini (akan diisi nanti)
      </div>
    </nav>
  );
}