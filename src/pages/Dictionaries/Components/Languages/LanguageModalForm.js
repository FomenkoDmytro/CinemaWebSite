import { toast } from "react-toastify";
import { Field, Form, Formik } from "formik";
import styles from "./LanguageModalForm.module.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LanguagesApi } from "../../../../API/Languages/languages.api.ts";
import ButtonLoader from "../../../../components/Loader/Button/ButtonLoader.js";

function LanguageModalForm({ data, mode, onHide }) {
  const queryClient = useQueryClient();

  const createLanguage = useMutation({
    mutationFn: (newLang) => LanguagesApi.create(newLang),
    onSuccess: () => {
      queryClient.invalidateQueries(["Languages"]);
      onHide();
      toast.success("Мова успішно додана!");
    },
    onError: (error) => {
      toast.error(
        `Сталася помилка: ${error.message || "Не вдалося додати мову"}`
      );
    },
  });

  const updateLanguage = useMutation({
    mutationFn: ({ id, dto }) => LanguagesApi.update(id, dto),
    onSuccess: () => {
      queryClient.invalidateQueries(["Languages"]);
      onHide();
      toast.success("Мова успішно оновлена!");
    },
    onError: (error) => {
      toast.error(
        `Сталася помилка: ${error.message || "Не вдалося оновити мову"}`
      );
    },
  });

  const deleteLanguage = useMutation({
    mutationFn: (id) => LanguagesApi.remove(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["Languages"]);
      onHide();
      toast.success("Мова успішно видалена!");
    },
    onError: (error) => {
      toast.error(
        `Сталася помилка: ${error.message || "Не вдалося видалити мову"}`
      );
    },
  });

  const handleSubmit = async (values, { resetForm }) => {
    if (data?.id) {
      const updateDto = { languageName: values.languageName };
      await updateLanguage.mutateAsync({ id: data.id, dto: updateDto });
    } else {
      const createDto = { languageName: values.languageName };
      await createLanguage.mutateAsync(createDto);
    }
    resetForm();
  };

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={{
          languageName: mode === "edit" ? data.languageName : "",
        }}
        validate={(values) => {
          const errors = {};

          if (values.languageName.length < 2) {
            errors.languageName =
              "Назва мови повинна бути більше одного символа";
          }

          if (values.languageName.length > 20) {
            errors.languageName = "Назва мови повинна бути до 20 символів";
          }

          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className={styles.form}>
            <div>
              <Field
                className="input"
                id="languageName"
                name="languageName"
                placeholder="Введіть назву мови"
                type="text"
                disabled={isSubmitting || deleteLanguage.isPending}
              />
              {touched.languageName && errors.languageName && (
                <div className={styles.error}>{errors.languageName}</div>
              )}
            </div>

            <button
              type="submit"
              className="button"
              disabled={isSubmitting || deleteLanguage.isPending}
            >
              {isSubmitting ? (
                <ButtonLoader />
              ) : mode === "edit" ? (
                "Оновити"
              ) : (
                "Додати"
              )}
            </button>

            {mode === "edit" && (
              <button
                type="button"
                className="buttonDanger"
                disabled={isSubmitting || deleteLanguage.isPending}
                onClick={async () => await deleteLanguage.mutateAsync(data.id)}
              >
                {deleteLanguage.isPending ? <ButtonLoader /> : "Видалити"}
              </button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LanguageModalForm;
