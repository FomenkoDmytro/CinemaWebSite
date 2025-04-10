import { useQuery } from "@tanstack/react-query";
import { dictionaryApiMap } from "../../../API/dictionaryApiMap.ts";
import { dictionaryFieldMap } from "../../../API/dictionaryFieldMap.ts";

function Dictionary({ type, name }) {
  const api = dictionaryApiMap[type];
  const fieldName = dictionaryFieldMap[type];
  const { data, isLoading, error } = useQuery({
    queryKey: [type],
    queryFn: () => api.getAll(`${type}/dictionary`),
    enabled: !!api,
  });

  if (!api || !fieldName)
    return <div>API або поле не знайдено для "{type}"</div>;
  if (isLoading) return <div>Заватаження</div>;
  if (error) return <div>Помилка!</div>;

  return (
    <>
      <h2>Довідник: {name}</h2>
      <ul>
        {data.map((item) => (
          <input key={item.id} placeholder={item[fieldName]} />
        ))}
      </ul>
    </>
  );
}

export default Dictionary;
