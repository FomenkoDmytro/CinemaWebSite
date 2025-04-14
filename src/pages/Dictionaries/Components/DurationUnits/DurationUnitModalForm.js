import { toast } from "react-toastify";
import { Field, Form, Formik } from "formik";
import styles from "./DurationUnitModalForm.module.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DurationUnitsApi } from "../../../../API/DurationUnits/durationUnits.api.ts";
import ButtonLoader from "../../../../components/Loader/Button/ButtonLoader.js";

function DurationUnitModalForm({ data, mode, onHide }) {
  const queryClient = useQueryClient();

  const createDurationUnit = useMutation({
    mutationFn: (newDurationUnit) => DurationUnitsApi.create(newDurationUnit),
    onSuccess: () => {
      queryClient.invalidateQueries(["DurationUnits"]);
      onHide();
      toast.success("Одиницю виміру часу успішно додано!");
    },
    onError: (error) => {
      toast.error(
        `Сталася помилка: ${
          error.message || "Не вдалося додати одиницю виміру часу"
        }`
      );
    },
  });

  const updateDurationUnit = useMutation({
    mutationFn: ({ id, dto }) => DurationUnitsApi.update(id, dto),
    onSuccess: () => {
      queryClient.invalidateQueries(["DurationUnits"]);
      onHide();
      toast.success("Одиницю виміру часу успішно оновлено!");
    },
    onError: (error) => {
      toast.error(
        `Сталася помилка: ${
          error.message || "Не вдалося оновити одиницю виміру часу"
        }`
      );
    },
  });

  const deleteDurationUnit = useMutation({
    mutationFn: (id) => DurationUnitsApi.remove(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["DurationUnits"]);
      onHide();
      toast.success("Одиницю виміру часу успішно видалено!");
    },
    onError: (error) => {
      toast.error(
        `Сталася помилка: ${
          error.message || "Не вдалося видалити одиницю виміру часу"
        }`
      );
    },
  });

  const handleSubmit = async (values, { resetForm }) => {
    if (data?.id) {
      const updateDto = {
        shortName: values.shortName,
        fullName: values.fullName,
      };
      await updateDurationUnit.mutateAsync({ id: data.id, dto: updateDto });
    } else {
      const createDto = {
        shortName: values.shortName,
        fullName: values.fullName,
      };
      await createDurationUnit.mutateAsync(createDto);
    }
    resetForm();
  };

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={{
          shortName: mode === "edit" ? data.shortName : "",
          fullName: mode === "edit" ? data.fullName : "",
        }}
        validate={(values) => {
          const errors = {};

          if (values.shortName.length < 2) {
            errors.shortName =
              "Назва одиниці виміру часу повинна бути більше одного символа";
          }

          if (values.shortName.length > 20) {
            errors.shortName =
              "Назва одиниці виміру часу повинна бути до 20 символів";
          }

          if (values.fullName.length < 2) {
            errors.fullName =
              "Назва одиниці виміру часу повинна бути більше одного символа";
          }

          if (values.fullName.length > 20) {
            errors.fullName =
              "Назва одиниці виміру часу повинна бути до 20 символів";
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
                id="fullName"
                name="fullName"
                placeholder="Введіть повну назву оидиниці виміру часу"
                type="text"
                disabled={isSubmitting || deleteDurationUnit.isPending}
              />
              {touched.fullName && errors.fullName && (
                <div className={styles.error}>{errors.fullName}</div>
              )}
            </div>

            <div>
              <Field
                className="input"
                id="shortName"
                name="shortName"
                placeholder="Введіть скорочену назву оидиниці виміру часу"
                type="text"
                disabled={isSubmitting || deleteDurationUnit.isPending}
              />
              {touched.shortName && errors.shortName && (
                <div className={styles.error}>{errors.shortName}</div>
              )}
            </div>

            <button
              type="submit"
              className="button"
              disabled={isSubmitting || deleteDurationUnit.isPending}
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
                disabled={isSubmitting || deleteDurationUnit.isPending}
                onClick={async () =>
                  await deleteDurationUnit.mutateAsync(data.id)
                }
              >
                {deleteDurationUnit.isPending ? <ButtonLoader /> : "Видалити"}
              </button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default DurationUnitModalForm;
