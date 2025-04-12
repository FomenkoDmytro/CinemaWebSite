import { useQuery } from "@tanstack/react-query";
import { dictionaryApiMap } from "../../../API/dictionaryApiMap.ts";
import DictionaryViewFactory from "./DictionaryViewFactory.js";
import styles from "./Dictionary.module.scss";
import FullPageLoader from "../../../components/Loader/FullPage/FullPageLoader.js";

function Dictionary({ type, name }) {
  const api = dictionaryApiMap[type];
  const { data, isLoading, error } = useQuery({
    queryKey: [type],
    queryFn: () => api.getAll(`${type}/dictionary`),
    enabled: !!api,
  });

  if (!api)
    return <div className={styles.error}>API не знайдено для "{type}"</div>;
  if (isLoading) return <FullPageLoader />;
  if (error)
    return <div className={styles.error}>{`Помилка! ${error.message}`} </div>;

  return (
    <>
      <h2 className={styles.dictionaryTitle}>Довідник: {name}</h2>
      <DictionaryViewFactory type={type} data={data} />
    </>
  );
}

export default Dictionary;
