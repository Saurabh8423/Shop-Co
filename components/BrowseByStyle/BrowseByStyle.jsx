import styles from "./BrowseByStyle.module.css";

const stylesData = [
  { img: "/images/F1.png", size: "small" },
  { img: "/images/F2.png", size: "large" },
  { img: "/images/F3.png", size: "large" },
  { img: "/images/F4.png", size: "small" },
];

export default function BrowseByStyle() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>BROWSE BY DRESS STYLE</h2>

      <div className={styles.grid}>
        {/* Row 1 */}
        <div className={`${styles.card} ${styles.small} ${styles.item1}`}>
          <img src="/images/F1.png" className={styles.image} />
        </div>

        <div className={`${styles.card} ${styles.large} ${styles.item2}`}>
          <img src="/images/F2.png" className={styles.image} />
        </div>

        {/* Row 2 */}
        <div className={`${styles.card} ${styles.large} ${styles.item3}`}>
          <img src="/images/F3.png" className={styles.image} />
        </div>

        <div className={`${styles.card} ${styles.small} ${styles.item4}`}>
          <img src="/images/F4.png" className={styles.image} />
        </div>
      </div>
    </section>
  );
}
