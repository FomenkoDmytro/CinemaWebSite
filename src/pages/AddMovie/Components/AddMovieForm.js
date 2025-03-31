import { Form, Field, Formik } from "formik";
import Select from "react-select";
import styles from "./AddMovieForm.module.scss";

const languages = [
  { id: 0, name: "Українська" },
  { id: 1, name: "Англійська" },
];

const durationUnit = [
  { id: 0, name: "Хвилини" },
  { id: 1, name: "Години" },
];

const audience = [
  { id: 0, category: "0+" },
  { id: 1, category: "12+" },
  { id: 2, category: "16+" },
  { id: 3, category: "18+" },
];

const producers = [
  { id: 0, name: "Name0", lastName: "LastName0" },
  { id: 1, name: "Name1", lastName: "LastName1" },
  { id: 2, name: "Name2", lastName: "LastName2" },
  { id: 3, name: "Name3", lastName: "LastName3" },
  { id: 4, name: "Name4", lastName: "LastName4" },
  { id: 5, name: "Name5", lastName: "LastName5" },
  { id: 6, name: "Name6", lastName: "LastName6" },
  { id: 7, name: "Name7", lastName: "LastName7" },
  { id: 8, name: "Name8", lastName: "LastName8" },
];

const actors = [
  { id: 0, name: "Name0", lastName: "LastName0" },
  { id: 1, name: "Name1", lastName: "LastName1" },
  { id: 2, name: "Name2", lastName: "LastName2" },
  { id: 3, name: "Name3", lastName: "LastName3" },
  { id: 4, name: "Name4", lastName: "LastName4" },
  { id: 5, name: "Name5", lastName: "LastName5" },
  { id: 6, name: "Name6", lastName: "LastName6" },
  { id: 7, name: "Name7", lastName: "LastName7" },
  { id: 8, name: "Name8", lastName: "LastName8" },
];

const ganres = [
  { id: 0, name: "Ganre0" },
  { id: 1, name: "Ganre1" },
  { id: 2, name: "Ganre2" },
  { id: 3, name: "Ganre3" },
  { id: 4, name: "Ganre4" },
  { id: 5, name: "Ganre5" },
  { id: 6, name: "Ganre6" },
  { id: 7, name: "Ganre7" },
  { id: 8, name: "Ganre8" },
];

const languageOptions = languages.map((language) => ({
  value: language.id,
  label: language.name,
}));

const durationUnitOptions = durationUnit.map((durUnit) => ({
  value: durUnit.id,
  label: durUnit.name,
}));

const audienceOptions = audience.map((aud) => ({
  value: aud.id,
  label: aud.category,
}));

const producerOptions = producers.map((producer) => ({
  value: producer.id,
  label: `${producer.name} ${producer.lastName}`,
}));

const actorOptions = actors.map((actor) => ({
  value: actor.id,
  label: `${actor.name} ${actor.lastName}`,
}));

const ganreOptions = ganres.map((ganre) => ({
  value: ganre.id,
  label: ganre.name,
}));

function AddMovieForm() {
  const handleSubmit = (values, { setValues }) => {
    alert("OK");
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={`${styles.title} text-primary-blue text-bold`}>
        Додавання нового фільму в репозиторій
      </h2>
      <Formik
        initialValues={{
          email: "",
          name: "",
          phone: "",
          date: "",
          movie: "",
          comments: "",
        }}
        validate={(values) => {
          const errors = {};
          //   if (!emailPattern.test(values.email)) {
          //     errors.email = "Невірна email адреса";
          //   }

          //   if (values.name.length < 4) {
          //     errors.name = "Ім'я повинно бути більше трьох символів";
          //   }

          //   if (values.name.length > 20) {
          //     errors.name = "Ім'я повинно бути до 20 символів";
          //   }

          //   if (!phonePattern.test(values.phone)) {
          //     errors.phone = "Невірний формат телефону";
          //   }

          //   if (!values.date) {
          //     errors.date = "Оберіть дату сеансу";
          //   }

          //   if (values.movie.length < 4) {
          //     errors.movie = "Занадто коротка назва фільму та час сеансу";
          //   }

          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <div>
              <label htmlFor="title" className={styles.label}>
                Назва
              </label>
              <Field
                className="input"
                id="title"
                name="title"
                placeholder="Введіть назву фільму"
                type="text"
              />
            </div>

            <div>
              <label htmlFor="plot" className={styles.label}>
                Сюжет
              </label>
              <Field
                className={`${styles.textArea} input`}
                id="plot"
                name="plot"
                placeholder="Сюжет"
                as="textarea"
              />
            </div>

            <div>
              <label htmlFor="ImageUrl" className={styles.label}>
                Постер
              </label>
              <Field
                className="input"
                id="ImageUrl"
                name="ImageUrl"
                placeholder="Завантажте картинку фільму"
                type="text"
              />
            </div>

            <div>
              <label htmlFor="TrailerUrl" className={styles.label}>
                Посилання на трейлер
              </label>
              <Field
                className="input"
                id="TrailerUrl"
                name="TrailerUrl"
                placeholder="Посилання на трейлер"
                type="text"
              />
            </div>

            <div>
              <label htmlFor="date" className={styles.label}>
                Дата початку прокату
              </label>
              <Field className="input" id="date" name="date" type="date" />
            </div>

            <div className={styles.durationContainer}>
              <div className={styles.duration}>
                <label htmlFor="duration" className={styles.label}>
                  Тривалість фільму
                </label>
                <Field
                  className={`${styles.durationInput} input`}
                  id="duration"
                  name="duration"
                  placeholder="Введіть тривалість фільму"
                  type="number"
                />
              </div>
              <div className={styles.duration}>
                <label htmlFor="durationUnit" className={styles.label}>
                  Одиниці тривалості фільму
                </label>
                <Select
                  name="durationUnit"
                  inputId="durationUnit"
                  options={durationUnitOptions}
                  classNamePrefix="select"
                />
              </div>
            </div>

            <div>
              <label htmlFor="audience" className={styles.label}>
                Категорія аудиторії
              </label>
              <Select
                name="audience"
                inputId="audience"
                options={audienceOptions}
                classNamePrefix="select"
              />
            </div>

            <div>
              <label htmlFor="producer" className={styles.label}>
                Продюсер
              </label>
              <Select
                name="producer"
                inputId="producer"
                options={producerOptions}
                classNamePrefix="select"
              />
            </div>

            <div>
              <label htmlFor="actors" className={styles.label}>
                Актори
              </label>
              <Select
                isMulti
                name="actors"
                inputId="actors"
                options={actorOptions}
                classNamePrefix="select"
              />
            </div>

            <div>
              <label htmlFor="actors" className={styles.label}>
                Жанри
              </label>
              <Select
                isMulti
                name="ganres"
                inputId="ganres"
                options={ganreOptions}
                classNamePrefix="select"
              />
            </div>

            <div>
              <label htmlFor="language" className={styles.label}>
                Мова
              </label>
              <Select
                name="language"
                inputId="language"
                options={languageOptions}
                classNamePrefix="select"
              />
            </div>

            <div>
              <label htmlFor="sessions" className={styles.label}>
                Сеанси
              </label>
              <Select
                isMulti
                name="sessions"
                inputId="sessions"
                options={actorOptions}
                classNamePrefix="select"
              />
            </div>

            <button type="submit" className="button">
              Додати
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddMovieForm;
