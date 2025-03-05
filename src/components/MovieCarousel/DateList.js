import styles from "./DateList.module.scss";
import classNames from "classnames";
import { day, month, shortDayOfWeek } from "../../utils/DateUtils";

function DateList({ sessionsDates, setChoosenDate, choosenDate }) {
  return (
    <div className={styles.dateContainer}>
      {sessionsDates.map((dates, index) => {
        const isChoosenDate = dates.date === choosenDate;
        const dateClasses = classNames(styles.date, {
          [styles.ChoosenDate]: isChoosenDate,
        });

        return (
          <div
            key={index}
            className={dateClasses}
            onClick={() => setChoosenDate(dates.date)}
          >
            {`${day(dates.date)}.${month(dates.date)} `}
            <br /> {shortDayOfWeek(dates.date)}
          </div>
        );
      })}
    </div>
  );
}

export default DateList;
