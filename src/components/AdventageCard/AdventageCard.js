import styles from "./AdventageCard.module.scss";

function AdventageCard({ header, text }) {
  return (
    <article className={styles.card}>
      <h2 className={styles.title}>{header}</h2>
      <p className={styles.text}>{text}</p>
    </article>
  );
}

export default AdventageCard;
