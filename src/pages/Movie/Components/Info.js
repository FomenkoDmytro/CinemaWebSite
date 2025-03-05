import styles from "./Info.module.scss";
import { fullDate } from "../../../utils/DateUtils";
import ModalTrailer from "./ModalTrailer";
import { useState } from "react";

function Info({ movie }) {
  const [ReturnFormShow, setReturnFormShow] = useState(false);

  const handleClick = () => {
    setReturnFormShow(true);
  };

  return (
    <div className={styles.infoContainer}>
      <div className={styles.trainerContainer}>
        <img className={styles.img} src={movie.image} alt={movie.title} />
        <div className="button" onClick={handleClick}>
          Дивитись трейлер
        </div>

        <ModalTrailer
          show={ReturnFormShow}
          onHide={() => setReturnFormShow(false)}
          movieTitle={movie.title}
        />
      </div>
      <div className={styles.credentionalsContainer}>
        <h1 className={styles.title}>{movie.title}</h1>
        <ul className={styles.credentionals}>
          <li>
            <p className={styles.key}>У прокаті з:</p>
            <p className={styles.val}>{fullDate(movie.starts)}</p>
          </li>
          <li>
            <p className={styles.key}>Жанр:</p>
            <p className={styles.val}>{movie.ganres}</p>
          </li>
          <li>
            <p className={styles.key}>Аудиторія:</p>
            <p className={styles.val}>{movie.audience}</p>
          </li>
          <li>
            <p className={styles.key}>В ролях:</p>
            <p className={styles.val}>{movie.actors}</p>
          </li>
          <li>
            <p className={styles.key}>Режисер:</p>
            <p className={styles.val}>{movie.producer}</p>
          </li>
          <li>
            <p className={styles.key}>Хронометраж:</p>
            <p
              className={styles.val}
            >{`${movie.duration}, ${movie.durationMeasure}`}</p>
          </li>
          <li>
            <p className={styles.key}> Мова:</p>
            <p className={styles.val}>{movie.language}</p>
          </li>
          <li>
            <p className={styles.key}>Сюжет:</p>
            <p className={styles.val}>{movie.plot}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Info;
