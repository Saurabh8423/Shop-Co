import styles from "./Footer.module.css";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi"; // EMAIL ICON

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      
      {/* ------------------ TOP NEWSLETTER BAR ------------------ */}
      <div className={styles.newsletterBar}>
        <h2 className={styles.newsTitle}>
          STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
        </h2>

        <div className={styles.newsForm}>
          <div className={styles.inputBox}>
            <HiOutlineMail className={styles.mailIcon} />
            <input
              type="email"
              placeholder="Enter your email address"
              className={styles.emailInput}
            />
          </div>

          <button className={styles.subscribeBtn}>
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      {/* ------------------ FOOTER MAIN ------------------ */}
      <div className={styles.footerContainer}>
        <div className={styles.leftBox}>
          <h2 className={styles.logo}>SHOP.CO</h2>
          <p className={styles.description}>
            We have clothes that suit your style and which you’re proud to wear.
            From women to men.
          </p>

          <div className={styles.socialIcons}>
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaGithub />
          </div>
        </div>

        <div className={styles.columns}>
          <div className={styles.column}>
            <h4>COMPANY</h4>
            <ul>
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>HELP</h4>
            <ul>
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>FAQ</h4>
            <ul>
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>RESOURCES</h4>
            <ul>
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ------------------ BOTTOM ROW ------------------ */}
      <div className={styles.bottomRow}>
        <p>Shop.co © 2000-2023, All Rights Reserved</p>

        <div className={styles.paymentIcons}>
          <img src="/images/p1.png" alt="Visa" />
          <img src="/images/p2.png" alt="Mastercard" />
          <img src="/images/p3.png" alt="PayPal" />
          <img src="/images/p4.png" alt="Apple Pay" />
          <img src="/images/p5.png" alt="Google Pay" />
        </div>
      </div>
    </footer>
  );
}
