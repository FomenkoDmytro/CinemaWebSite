import ActorsView from "./Actors/ActorsView";
import ProducersView from "./Producers/ProducersView";
import GanresView from "./Ganres/GanresView";
import LanguagesView from "./Languages/LanguagesView";
import AudiencesView from "./Audiences/AudiencesView";
import DurationUnitsView from "./DurationUnits/DurationUnitsView";

function DictionaryViewFactory({ type, data }) {
  switch (type) {
    case "Languages":
      return <LanguagesView data={data} />;
    case "Actors":
      return <ActorsView data={data} />;
    case "Ganres":
      return <GanresView data={data} />;
    case "Producers":
      return <ProducersView data={data} />;
    case "Audiences":
      return <AudiencesView data={data} />;
    case "DurationUnits":
      return <DurationUnitsView data={data} />;
    default:
      return <div>Помилка, компонент {type} не знайдено</div>;
  }
}

export default DictionaryViewFactory;
