import styles from "./DateList.module.scss";
import classNames from "classnames";

function DateList({ sessionsDates, setChoosenDate, choosenDate }) {
  const day = (date) => String(date.getDate()).padStart(2, "0");
  const month = (date) => String(date.getMonth() + 1).padStart(2, "0");
  const shorDayOfWeek = (date) =>
    new Intl.DateTimeFormat("uk-UA", {
      weekday: "short",
    })
      .format(date)
      .slice(0, 2);

  return (
    <div className={styles.dateContainer}>
      {sessionsDates.map((dates, index) => {
        const date = new Date(dates.date);
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
            {`${day(date)}.${month(date)} `}
            <br /> {shorDayOfWeek(date)}
          </div>
        );
      })}
    </div>
  );
}

export default DateList;
