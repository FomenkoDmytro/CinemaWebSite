import { useNavigate } from "react-router-dom";
import styles from "./Schedule.module.scss";
import { day, month, shortDayOfWeek } from "../../../utils/DateUtils";

function Schedule({ sessions }) {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.container}>
      <p className={`${styles.scheduleTitle} text-primary-blue text-bold`}>
        Розклад сеансів
      </p>
      {sessions.map((session, index) => {
        return (
          <div className={styles.sessionContainer}>
            <p key={index} className={styles.date}>
              {`${day(session.date)}.${month(session.date)} ${shortDayOfWeek(
                session.date
              )}`}
            </p>
            <div className={styles.sessionTimeContainer}>
              {session.times.map((ses) => (
                <p
                  key={ses.id}
                  className={styles.sessionTime}
                  onClick={() => handleNavigate(`/sessions/${ses.id}`)}
                >
                  {ses.time}
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Schedule;
