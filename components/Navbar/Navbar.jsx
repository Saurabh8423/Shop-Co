"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  // shadow when scrolling
  useEffect(() => {
    const onScroll = () => setShadow(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Option 2: auto-close other panel
  const toggleMenu = () => {
    setMenuOpen((s) => {
      const next = !s;
      if (next) setSearchOpen(false);
      return next;
    });
  };
  const toggleSearch = () => {
    setSearchOpen((s) => {
      const next = !s;
      if (next) setMenuOpen(false);
      return next;
    });
  };

  // close both
  const closeAll = () => {
    setMenuOpen(false);
    setSearchOpen(false);
  };

  return (
    <>
      {/* overlay for both menu/search */}
      {(menuOpen || searchOpen) && (
        <div
          className={styles.overlay}
          onClick={closeAll}
          aria-hidden="true"
        />
      )}

      <header className={`${styles.nav} ${shadow ? styles.shadow : ""}`}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* LEFT: hamburger + logo */}
          <div className={styles.leftBox}>
            <button
              className={styles.hamburger}
              onClick={toggleMenu}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <RxCross2 size={26} /> : <RxHamburgerMenu size={26} />}
            </button>

            <div className={styles.brand}>
              <h1>SHOP.CO</h1>
            </div>
          </div>

          {/* CENTER: desktop menu + desktop search (desktop only) */}
          <div className={styles.center}>
            <ul className={styles.menu}>
              <li>Shop ▾</li>
              <li>On Sale</li>
              <li>New Arrivals</li>
              <li>Brands</li>
            </ul>

            <div className={styles.desktopSearch}>
              <CiSearch className={styles.searchIcon} />
              <input placeholder="Search for products..." aria-label="Search" />
            </div>
          </div>

          {/* RIGHT: search icon, cart, profile (always shown; on mobile these remain right) */}
          <div className={styles.actions}>
            <button className={styles.icon} onClick={toggleSearch} aria-label="Open search">
              <CiSearch />
            </button>
            <button className={styles.icon}>
              <LuShoppingCart />
            </button>
            <button className={styles.icon}>
              <CgProfile />
            </button>
          </div>
        </div>
      </header>

      {/* SLIDE-IN MOBILE MENU (from left) */}
      <nav className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`} aria-hidden={!menuOpen}>
        <ul>
          <li><button onClick={() => { /* navigate */ closeAll(); }}>Shop</button></li>
          <li><button onClick={() => { closeAll(); }}>On Sale</button></li>
          <li><button onClick={() => { closeAll(); }}>New Arrivals</button></li>
          <li><button onClick={() => { closeAll(); }}>Brands</button></li>
        </ul>
      </nav>

      {/* MYNTRA-STYLE SEARCH BAR SLIDEDOWN (mobile/tablet) */}
      <div className={`${styles.mobileSearchWrap} ${searchOpen ? styles.mobileSearchOpen : ""}`} aria-hidden={!searchOpen}>
        <div className={styles.mobileSearchInner}>
          <CiSearch className={styles.mobileSearchIcon} />
          <input autoFocus placeholder="Enter product, brand or category..." aria-label="Search products" />
        </div>
      </div>
    </>
  );
}
