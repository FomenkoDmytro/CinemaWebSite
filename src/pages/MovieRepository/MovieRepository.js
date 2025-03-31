import { useNavigate } from "react-router-dom";
import styles from "./MovieRepository.module.scss";
import image from "../../assets/images/CinemaHall1.jpg";

const movies = [
  {
    id: 0,
    image: image,
    title: "Фільм 1",
    text: "Великий екран, розкішне зображення і звук, що захоплює.",
  },
  {
    id: 1,
    image: image,
    title: "Фільм 2",
    text: "Інтимний зал для справжніх кіномеломанів.",
  },
  {
    id: 2,
    image: image,
    title: "Фільм 3",
    text: "Мультимедійний простір для перегляду фільмів у 3D і IMAX.",
  },
  {
    id: 3,
    image: image,
    title: "Фільм 4",
    text: "Ідеальний для сімейних вечорів та дитячих сеансів.",
  },
  {
    id: 4,
    image: image,
    title: "Фільм 3",
    text: "Мультимедійний простір для перегляду фільмів у 3D і IMAX.",
  },
  {
    id: 5,
    image: image,
    title: "Фільм 4",
    text: "Ідеальний для сімейних вечорів та дитячих сеансів.",
  },
];

function MovieRepository() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className={`${styles.container} container`}>
      <h2 className={`${styles.title} text-primary-blue text-bold`}>
        Репозиторій фільмів
      </h2>
      <div className={styles.functionalPanel}>
        <input
          className={`${styles.search} input`}
          placeholder="Введіть назву фільму для пошуку"
        />
        <div
          className={`${styles.addButton} button`}
          onClick={() => handleNavigate(`/addnewmovie`)}
        >
          Додати фільм
        </div>
      </div>
      <div className={styles.moviesContainer}>
        {movies.map((movie) => {
          return (
            <div key={movie.id} className={styles.movieCard}>
              <img
                className={styles.movieImg}
                src={movie.image}
                alt={movie.title}
              />
              <div className={styles.movieInfo}>
                <h3
                  className={styles.movieTitle}
                  onClick={() => handleNavigate(`/movie/${movie.id}`)}
                >
                  {movie.title}
                </h3>
                <p className={styles.movieDescription}>{movie.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MovieRepository;
