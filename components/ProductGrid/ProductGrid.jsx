"use client";
import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductGrid.module.css";

export default function ProductGrid({ products = [] }) {
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? products : products.slice(0, 4);

  return (
    <div className={styles.wrap}>
      <div className={styles.grid}>
        {visibleProducts.map((p) => (
          <ProductCard key={p.id + Math.random()} product={p} />
        ))}
      </div>

      {/* VIEW ALL BUTTON */}
      {!showAll && (
        <div style={{ textAlign: "center", marginTop: 18 }}>
          <button className="btn" onClick={() => setShowAll(true)}>
            View All
          </button>
        </div>
      )}
    </div>
  );
}
