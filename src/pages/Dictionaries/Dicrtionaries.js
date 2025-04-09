import { useState } from "react";
import styles from "./Dictionaries.module.scss";
import Select from "react-select";
import Dictionary from "./Components/Dictionary";

const dictionariesOptions = [
  { value: "Actors", label: "Актори" },
  { value: "Audiences", label: "Аудиторія" },
  { value: "DurationUnits", label: "Одиниці виміру часу" },
  { value: "Ganres", label: "Жанри" },
  { value: "Languages", label: "Мови" },
  { value: "Producers", label: "Продюсери" },
];

function Dictionaries() {
  const [selectedDictionary, setSelectedDictionary] = useState();
  return (
    <div className="container">
      <h2 className={`${styles.title} text-primary-blue text-bold`}>
        Довідники
      </h2>
      <div>
        <label htmlFor="dictionary" className={styles.label}>
          Оберіть довідник, в який необхідно внести зміни
        </label>
        <Select
          name="dictionary"
          inputId="dictionary"
          options={dictionariesOptions}
          classNamePrefix="select"
          onChange={(options) => setSelectedDictionary(options)}
        />
      </div>
      <div className={styles.formContainer}>
        {selectedDictionary && (
          <Dictionary
            type={selectedDictionary.value}
            name={selectedDictionary.label}
          />
        )}
      </div>
    </div>
  );
}

export default Dictionaries;
