import styles from "./AdventageCard.module.scss";

function AdventageCard({ header, text }) {
  return (
    <article className={styles.card}>
      <h3>{header}</h3>
      <p className={styles.text}>{text}</p>
    </article>
  );
}

export default AdventageCard;
