import { toast } from "react-toastify";
import { Field, Form, Formik } from "formik";
import styles from "./AudienceModalForm.module.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AudiencesApi } from "../../../../API/Audiences/audiences.api.ts";
import ButtonLoader from "../../../../components/Loader/Button/ButtonLoader.js";

function AudienceModalForm({ data, mode, onHide }) {
  const queryClient = useQueryClient();

  const createAudience = useMutation({
    mutationFn: (newAudience) => AudiencesApi.create(newAudience),
    onSuccess: () => {
      queryClient.invalidateQueries(["Audiences"]);
      onHide();
      toast.success("Категорію аудиторії успішно додано!");
    },
    onError: (error) => {
      toast.error(
        `Сталася помилка: ${
          error.message || "Не вдалося додати категорії аудиторії"
        }`
      );
    },
  });

  const updateAudience = useMutation({
    mutationFn: ({ id, dto }) => AudiencesApi.update(id, dto),
    onSuccess: () => {
      queryClient.invalidateQueries(["Audiences"]);
      onHide();
      toast.success("Категорію аудиторії успішно оновлено!");
    },
    onError: (error) => {
      toast.error(
        `Сталася помилка: ${
          error.message || "Не вдалося оновити категорію аудиторії"
        }`
      );
    },
  });

  const deleteAudience = useMutation({
    mutationFn: (id) => AudiencesApi.remove(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["Audiences"]);
      onHide();
      toast.success("Категорію аудиторії успішно видалено!");
    },
    onError: (error) => {
      toast.error(
        `Сталася помилка: ${
          error.message || "Не вдалося видалити категорії аудиторії"
        }`
      );
    },
  });

  const handleSubmit = async (values, { resetForm }) => {
    if (data?.id) {
      const updateDto = {
        category: values.category,
      };
      await updateAudience.mutateAsync({ id: data.id, dto: updateDto });
    } else {
      const createDto = {
        category: values.category,
      };
      await createAudience.mutateAsync(createDto);
    }
    resetForm();
  };

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={{
          category: mode === "edit" ? data.category : "",
        }}
        validate={(values) => {
          const errors = {};

          if (values.category.length < 2) {
            errors.category =
              "Назва категорії аудиторії повинна бути більше одного символа";
          }

          if (values.category.length > 20) {
            errors.category =
              "Назва категорії аудиторії повинна бути до 20 символів";
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
                id="category"
                name="category"
                placeholder="Введіть назву жанру"
                type="text"
                disabled={isSubmitting || deleteAudience.isPending}
              />
              {touched.category && errors.category && (
                <div className={styles.error}>{errors.category}</div>
              )}
            </div>

            <button
              type="submit"
              className="button"
              disabled={isSubmitting || deleteAudience.isPending}
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
                disabled={isSubmitting || deleteAudience.isPending}
                onClick={async () => await deleteAudience.mutateAsync(data.id)}
              >
                {deleteAudience.isPending ? <ButtonLoader /> : "Видалити"}
              </button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AudienceModalForm;
