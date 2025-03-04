import { useNavigate } from "react-router-dom";
import styles from "./MovieShortInfo.module.scss";
import Icon from "../../../components/Icon/Icon";

function MovieShortInfo({ movie }) {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div className={styles.shortInfo}>
      <div>
        <p
          className={styles.shortInfoTitle}
          onClick={() => handleNavigate(`/${movie.title}`)}
        >
          {movie.title}{" "}
        </p>
        <div>
          {movie.ganres} <br />
          {`${movie.duration}, ${movie.durationMeasure}`}
        </div>
      </div>
      <div
        className={styles.movieInfo}
        onClick={() => handleNavigate(`/${movie.title}`)}
      >
        <Icon icon="icon-info" className={styles.movieInfoIcon} w="32" h="32" />{" "}
        <span className={styles.movieInfoText}>Про фільм</span>
      </div>
    </div>
  );
}
export default MovieShortInfo;
