import styles from "./ProductCard.module.css";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <div className={styles.thumb}>
        <Image
          src={product.image}
          alt={product.title}
          width={295}
          height={298}
        />
        <button className={styles.quick}>Get Best Quote</button>
      </div>
      <div className={styles.body}>
        <h4>{product.title}</h4>
        <div className={styles.rating}>
          ⭐️⭐️⭐️⭐️ <span>{product.rating}/5</span>
        </div>
        <div className={styles.price}>
          <span className={styles.current}>${product.price}</span>
          {product.oldPrice && (
            <span className={styles.old}>${product.oldPrice}</span>
          )}
          {product.discount && (
            <span className={styles.tag}>-{product.discount}%</span>
          )}
        </div>
      </div>
    </div>
  );
}
