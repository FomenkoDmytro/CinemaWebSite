import LanguagesView from "./Languages/LanguagesView";

function DictionaryViewFactory({ type, data, onEdit }) {
  switch (type) {
    case "Languages":
      return <LanguagesView data={data} onEdit={onEdit} />;
    case "Ganres":
      return <div>Ganres</div>;
    default:
      return <div>Помилка, компонент {type} не знайдено</div>;
  }
}

export default DictionaryViewFactory;
