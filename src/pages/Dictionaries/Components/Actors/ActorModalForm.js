import { toast } from "react-toastify";
import { Field, Form, Formik } from "formik";
import styles from "./ActorModalForm.module.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ActorsApi } from "../../../../API/Actors/actors.api.ts";
import ButtonLoader from "../../../../components/Loader/Button/ButtonLoader.js";

function ActorModalForm({ data, mode, onHide }) {
  const queryClient = useQueryClient();

  const createActor = useMutation({
    mutationFn: (newActor) => ActorsApi.create(newActor),
    onSuccess: () => {
      queryClient.invalidateQueries(["Actors"]);
      onHide();
      toast.success("Актор успішно доданий!");
    },
    onError: (error) => {
      toast.error(
        `Сталася помилка: ${error.message || "Не вдалося додати актора"}`
      );
    },
  });

  const updateActor = useMutation({
    mutationFn: ({ id, dto }) => ActorsApi.update(id, dto),
    onSuccess: () => {
      queryClient.invalidateQueries(["Actors"]);
      onHide();
      toast.success("Актор успішно оновлений!");
    },
    onError: (error) => {
      toast.error(
        `Сталася помилка: ${error.message || "Не вдалося оновити актора"}`
      );
    },
  });

  const deleteActor = useMutation({
    mutationFn: (id) => ActorsApi.remove(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["Actors"]);
      onHide();
      toast.success("Актор успішно видалений!");
    },
    onError: (error) => {
      toast.error(
        `Сталася помилка: ${error.message || "Не вдалося видалити актора"}`
      );
    },
  });

  const handleSubmit = async (values, { resetForm }) => {
    if (data?.id) {
      const updateDto = {
        firstName: values.firstName,
        lastName: values.lastName,
      };
      await updateActor.mutateAsync({ id: data.id, dto: updateDto });
    } else {
      const createDto = {
        firstName: values.firstName,
        lastName: values.lastName,
      };
      await createActor.mutateAsync(createDto);
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
            errors.firstName = "Ім'я актора повинно бути більше одного символа";
          }

          if (values.firstName.length > 20) {
            errors.actorName = "Ім'я актора повинно бути до 20 символів";
          }

          if (values.lastName.length < 2) {
            errors.firstName =
              "Призвище актора повинно бути більше одного символа";
          }

          if (values.lastName.length > 20) {
            errors.actorName = "Призвище актора повинно бути до 20 символів";
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
                placeholder="Введіть і'мя актора"
                type="text"
                disabled={isSubmitting || deleteActor.isPending}
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
                placeholder="Введіть призвище актора"
                type="text"
                disabled={isSubmitting || deleteActor.isPending}
              />
              {touched.lastName && errors.lastName && (
                <div className={styles.error}>{errors.lastName}</div>
              )}
            </div>

            <button
              type="submit"
              className="button"
              disabled={isSubmitting || deleteActor.isPending}
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
                disabled={isSubmitting || deleteActor.isPending}
                onClick={async () => await deleteActor.mutateAsync(data.id)}
              >
                {deleteActor.isPending ? <ButtonLoader /> : "Видалити"}
              </button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ActorModalForm;
