import { LanguagesApi } from "./Languages/languages.api.ts";
import { GanresApi } from "./Ganres/ganres.api.ts";
import { ActorsApi } from "./Actors/actors.api.ts";
import { ProducersApi } from "./Producers/producers.api.ts";
import { AudiencesApi } from "./Audiences/audiences.api.ts";

export const dictionaryApiMap = {
  Languages: LanguagesApi,
  Ganres: GanresApi,
  Actors: ActorsApi,
  Producers: ProducersApi,
  Audiences: AudiencesApi,
};
