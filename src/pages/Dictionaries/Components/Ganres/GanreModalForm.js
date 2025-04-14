import { toast } from "react-toastify";
import { Field, Form, Formik } from "formik";
import styles from "./GanreModalForm.module.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GanresApi } from "../../../../API/Ganres/ganres.api.ts";
import ButtonLoader from "../../../../components/Loader/Button/ButtonLoader.js";

function GanreModalForm({ data, mode, onHide }) {
  const queryClient = useQueryClient();

  const createGanre = useMutation({
    mutationFn: (newGanre) => GanresApi.create(newGanre),
    onSuccess: () => {
      queryClient.invalidateQueries(["Ganres"]);
      onHide();
      toast.success("Жанр успішно додано!");
    },
    onError: (error) => {
      toast.error(
        `Сталася помилка: ${error.message || "Не вдалося додати жанр"}`
      );
    },
  });

  const updateGanre = useMutation({
    mutationFn: ({ id, dto }) => GanresApi.update(id, dto),
    onSuccess: () => {
      queryClient.invalidateQueries(["Ganres"]);
      onHide();
      toast.success("Жанр успішно оновлено!");
    },
    onError: (error) => {
      toast.error(
        `Сталася помилка: ${error.message || "Не вдалося оновити жанр"}`
      );
    },
  });

  const deleteGanre = useMutation({
    mutationFn: (id) => GanresApi.remove(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["Ganres"]);
      onHide();
      toast.success("Жанр успішно видалено!");
    },
    onError: (error) => {
      toast.error(
        `Сталася помилка: ${error.message || "Не вдалося видалити жанр"}`
      );
    },
  });

  const handleSubmit = async (values, { resetForm }) => {
    if (data?.id) {
      const updateDto = {
        name: values.name,
      };
      await updateGanre.mutateAsync({ id: data.id, dto: updateDto });
    } else {
      const createDto = {
        name: values.name,
      };
      await createGanre.mutateAsync(createDto);
    }
    resetForm();
  };

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={{
          name: mode === "edit" ? data.name : "",
        }}
        validate={(values) => {
          const errors = {};

          if (values.name.length < 2) {
            errors.name = "Назва жанру повинна бути більше одного символа";
          }

          if (values.name.length > 20) {
            errors.name = "Назва жанру повинна бути до 20 символів";
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
                id="name"
                name="name"
                placeholder="Введіть назву жанру"
                type="text"
                disabled={isSubmitting || deleteGanre.isPending}
              />
              {touched.name && errors.name && (
                <div className={styles.error}>{errors.name}</div>
              )}
            </div>

            <button
              type="submit"
              className="button"
              disabled={isSubmitting || deleteGanre.isPending}
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
                disabled={isSubmitting || deleteGanre.isPending}
                onClick={async () => await deleteGanre.mutateAsync(data.id)}
              >
                {deleteGanre.isPending ? <ButtonLoader /> : "Видалити"}
              </button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default GanreModalForm;
