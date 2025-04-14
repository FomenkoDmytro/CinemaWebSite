import { toast } from "react-toastify";
import { Field, Form, Formik } from "formik";
import styles from "./ProducerModalForm.module.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProducersApi } from "../../../../API/Producers/producers.api.ts";
import ButtonLoader from "../../../../components/Loader/Button/ButtonLoader.js";

function ProducerModalForm({ data, mode, onHide }) {
  const queryClient = useQueryClient();

  const createProducer = useMutation({
    mutationFn: (newProducer) => ProducersApi.create(newProducer),
    onSuccess: () => {
      queryClient.invalidateQueries(["Producers"]);
      onHide();
      toast.success("Продюсера успішно додано!");
    },
    onError: (error) => {
      toast.error(
        `Сталася помилка: ${error.message || "Не вдалося додати продюсера"}`
      );
    },
  });

  const updateProducer = useMutation({
    mutationFn: ({ id, dto }) => ProducersApi.update(id, dto),
    onSuccess: () => {
      queryClient.invalidateQueries(["Producers"]);
      onHide();
      toast.success("Продюсера успішно оновлено!");
    },
    onError: (error) => {
      toast.error(
        `Сталася помилка: ${error.message || "Не вдалося оновити продюсера"}`
      );
    },
  });

  const deleteProducer = useMutation({
    mutationFn: (id) => ProducersApi.remove(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["Producers"]);
      onHide();
      toast.success("Продюсера успішно видалено!");
    },
    onError: (error) => {
      toast.error(
        `Сталася помилка: ${error.message || "Не вдалося видалити продюсера"}`
      );
    },
  });

  const handleSubmit = async (values, { resetForm }) => {
    if (data?.id) {
      const updateDto = {
        firstName: values.firstName,
        lastName: values.lastName,
      };
      await updateProducer.mutateAsync({ id: data.id, dto: updateDto });
    } else {
      const createDto = {
        firstName: values.firstName,
        lastName: values.lastName,
      };
      await createProducer.mutateAsync(createDto);
    }
    resetForm();
  };

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={{
          firstName: mode === "edit" ? data.firstName : "",
          lastName: mode === "edit" ? data.lastName : "",
        }}
        validate={(values) => {
          const errors = {};

          if (values.firstName.length < 2) {
            errors.firstName =
              "Ім'я продюсера повинно бути більше одного символа";
          }

          if (values.firstName.length > 20) {
            errors.firstName = "Ім'я продюсера повинно бути до 20 символів";
          }

          if (values.lastName.length < 2) {
            errors.lastName =
              "Призвище продюсера повинно бути більше одного символа";
          }

          if (values.lastName.length > 20) {
            errors.lastName = "Призвище продюсера повинно бути до 20 символів";
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
                id="firstName"
                name="firstName"
                placeholder="Введіть і'мя продюсера"
                type="text"
                disabled={isSubmitting || deleteProducer.isPending}
              />
              {touched.firstName && errors.firstName && (
                <div className={styles.error}>{errors.firstName}</div>
              )}
            </div>

            <div>
              <Field
                className="input"
                id="lastName"
                name="lastName"
                placeholder="Введіть призвище продюсера"
                type="text"
                disabled={isSubmitting || deleteProducer.isPending}
              />
              {touched.lastName && errors.lastName && (
                <div className={styles.error}>{errors.lastName}</div>
              )}
            </div>

            <button
              type="submit"
              className="button"
              disabled={isSubmitting || deleteProducer.isPending}
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
                disabled={isSubmitting || deleteProducer.isPending}
                onClick={async () => await deleteProducer.mutateAsync(data.id)}
              >
                {deleteProducer.isPending ? <ButtonLoader /> : "Видалити"}
              </button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ProducerModalForm;
