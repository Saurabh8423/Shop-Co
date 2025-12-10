"use client";

import { useRef } from "react";
import styles from "./Rating.module.css";

const customers = [
  {
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
];

export default function HappyCustomers() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.headerRow}>
        <h2 className={styles.heading}>OUR HAPPY CUSTOMERS</h2>

        <div className={styles.arrows}>
          <span className={styles.arrow} onClick={scrollLeft}>←</span>
          <span className={styles.arrow} onClick={scrollRight}>→</span>
        </div>
      </div>

      <div className={styles.cards} ref={scrollRef}>
        {customers.map((cust, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
            <h4 className={styles.name}>
              {cust.name} <span className={styles.tick}>✔</span>
            </h4>
            <p className={styles.review}>{cust.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
