import { useNavigate } from "react-router-dom";
import styles from "./MovieSessions.module.scss";

function MoviesSessions({ movie, choosenDate }) {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      <p className={`${styles.scheduleTitle} text-primary-blue text-bold`}>
        Розклад сеансів
      </p>
      {movie.sessions.map((session) => {
        if (choosenDate === session.date) {
          return session.times.map((ses) => {
            return (
              <span
                className={styles.sessionTime}
                key={ses.id}
                onClick={() => handleNavigate(`/sessions/${ses.id}`)}
              >
                {ses.time}
              </span>
            );
          });
        }
        return null;
      })}{" "}
    </>
  );
}

export default MoviesSessions;
