import styles from "./CinemaHallCard.module.scss";

function CinemaHallCard({ header, text, image }) {
  return (
    <article className={styles.card}>
      <img src={image} alt="${header}" className={styles.image} />
      <h3>{header}</h3>
      <p>{text}</p>
    </article>
  );
}

export default CinemaHallCard;
