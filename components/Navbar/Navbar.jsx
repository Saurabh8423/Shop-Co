import styles from './Navbar.module.css';
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        
        <div className={styles.brand}>
          <h1>SHOP.CO</h1>
        </div>

        <div className={styles.center}>
          <ul className={styles.menu}>
            <li>Shop ▾</li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>

          {/* Search Bar with Icon */}
          <div className={styles.search}>
            <CiSearch className={styles.searchIcon} />
            <input placeholder="Search for products..." />
          </div>
        </div>

        <div className={styles.actions}>
          <button className={styles.icon}>
            <LuShoppingCart />
          </button>
          <button className={styles.icon}>
            <CgProfile />
          </button>
        </div>

      </div>
    </nav>
  );
}
