import { useQuery } from "@tanstack/react-query";
import { LanguagesApi } from "../../../API/Languages/languages.api.ts";

function Dictionary({ type, name }) {
  const url = `${type}/dictionary`;
  const { data, isLoading, error } = useQuery({
    queryKey: [type],
    queryFn: () => LanguagesApi.getAll(url),
  });

  if (isLoading) return <div>Заватаження</div>;
  if (error) return <div>Помилка!</div>;

  return (
    <>
      <h2>Довідник: {name}</h2>
      <ul>
        {data.map((item) => (
          <input key={item.id}>{item.languageName}</input>
        ))}
      </ul>
    </>
  );
}

export default Dictionary;
