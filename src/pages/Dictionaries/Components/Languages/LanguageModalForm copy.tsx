// import React from "react";
// import { toast } from "react-toastify";
// import { Field, Form, Formik } from "formik";
// import styles from "./LanguageModalForm.module.scss";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { LanguagesApi } from "../../../../API/Languages/languages.api.ts";
// import {
//   CreateLanguageDto,
//   UpdateLanguageDto,
//   Languages,
// } from "../../../../API/Languages/languages.type.ts";

// function LanguageModalForm({ data, mode, onHide }) {
//   const queryClient = useQueryClient();

//   const createLanguage = useMutation({
//     mutationFn: (dto: CreateLanguageDto) => LanguagesApi.create(dto),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["Languages"] });
//       onHide();
//       toast.success("Мова успішно додана!");
//     },
//     onError: (error) => {
//       toast.error(
//         `Сталася помилка: ${error.message || "Не вдалося додати мову"}`
//       );
//     },
//   });

//   const updateLanguage = useMutation({
//     mutationFn: ({ id, dto }: { id: number; dto: UpdateLanguageDto }) =>
//       LanguagesApi.update(id, dto),
//     onSuccess: () => {
//       console.log("Language successfully created");
//       queryClient.invalidateQueries({ queryKey: ["Languages"] });
//       onHide();
//       toast.success("Мова успішно оновлена!");
//     },
//     onError: (error) => {
//       toast.error(
//         `Сталася помилка: ${error.message || "Не вдалося оновити мову"}`
//       );
//     },
//   });

//   const deleteLanguage = useMutation({
//     mutationFn: (id: number) => LanguagesApi.remove(id),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["Languages"] });
//       onHide();
//       toast.success("Мова успішно видалена!");
//     },
//     onError: (error) => {
//       toast.error(
//         `Сталася помилка: ${error.message || "Не вдалося видалити мову"}`
//       );
//     },
//   });

//   const handleSubmit = (
//     values: CreateLanguageDto,
//     { resetForm }: { resetForm: () => void }
//   ) => {
//     if (mode === "edit" && data?.id) {
//       updateLanguage.mutate({ id: data.id, dto: values });
//     } else {
//       createLanguage.mutate(values);
//     }
//     resetForm();
//   };

//   return (
//     <div className={styles.formContainer}>
//       <Formik
//         initialValues={{
//           languageName: mode === "edit" ? data.languageName : "",
//         }}
//         validate={(values) => {
//           const errors: Partial<CreateLanguageDto> = {};

//           if (values.languageName.length < 2) {
//             errors.languageName =
//               "Назва мови повинна бути більше одного символа";
//           }

//           if (values.languageName.length > 20) {
//             errors.languageName = "Назва мови повинна бути до 20 символів";
//           }

//           return errors;
//         }}
//         onSubmit={handleSubmit}
//       >
//         {({ errors, touched }) => (
//           <Form className={styles.form}>
//             <div>
//               <Field
//                 className="input"
//                 id="languageName"
//                 name="languageName"
//                 placeholder="Введіть назву мови"
//                 type="text"
//               />
//               {touched.languageName &&
//                 typeof errors.languageName === "string" && (
//                   <div className={styles.error}>{errors.languageName}</div>
//                 )}
//             </div>

//             <button type="submit" className="button">
//               {mode === "edit" ? "Оновити" : "Додати"}
//             </button>

//             {mode === "edit" && (
//               <button
//                 type="button"
//                 className="buttonDanger"
//                 onClick={() => deleteLanguage.mutate(data.id)}
//               >
//                 Видалити
//               </button>
//             )}
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// }

// export default LanguageModalForm;
