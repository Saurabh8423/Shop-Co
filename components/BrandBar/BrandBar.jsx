import styles from "./BrandBar.module.css";
import Image from "next/image";

export default function BrandBar() {
  const brands = [
    "/images/L1.png",
    "/images/L2.png",
    "/images/L3.png",
    "/images/L4.png",
    "/images/L5.png",
  ];

  return (
    <div className={styles.bar}>
      <div className="container" className={styles.wrapper}>
        {brands.map((b, i) => (
          <div key={i} className={styles.brand}>
            <Image
              src={b}
              width={120}
              height={50}
              alt={`brand-${i}`}
              className={styles.logo}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
