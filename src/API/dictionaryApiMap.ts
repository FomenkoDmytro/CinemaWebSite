import { LanguagesApi } from "./Languages/languages.api.ts";
import { GanresApi } from "./Ganres/ganres.api.ts";
import { ActorsApi } from "./Actors/actors.api.ts";

export const dictionaryApiMap = {
  Languages: LanguagesApi,
  Ganres: GanresApi,
  Actors: ActorsApi,
};
