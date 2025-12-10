import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div
        className="container"
        style={{ display: "flex", alignItems: "center", gap: 40 }}
      >
        <div className={styles.left}>
          <h2>
            FIND CLOTHES
            <br />
            THAT MATCHES
            <br />
            YOUR STYLE
          </h2>
          <p className={styles.sub}>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <a className="btn" href="#new">
            Shop Now
          </a>

          <div className={styles.metrics}>
            <div>
              <strong>200+</strong>
              <p>International Brands</p>
            </div>
            <div>
              <strong>2,000+</strong>
              <p>High-Quality Products</p>
            </div>
            <div>
              <strong>30,000+</strong>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <Image
            src="/images/S1.png"
            alt="star"
            width={56}
            height={56}
            priority
            className={styles.star1}
          />

          <Image
            src="/images/hero.jpg"
            alt="models"
            width={520}
            height={600}
            priority
          />

           {/* Floating images (S1 & S2) */}

          <Image
            src="/images/S2.png"
            alt="star"
            width={104}
            height={104}
            priority
            className={styles.star2}
          />
        </div>
      </div>
    </section>
  );
}
