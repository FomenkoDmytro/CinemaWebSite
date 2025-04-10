import api from "../index.ts";
import {
  Languages,
  CreateLanguageDto,
  UpdateLanguageDto,
} from "./languages.type";

export const LanguagesApi = {
  getAll: async (url: string): Promise<Languages[]> => {
    const response = await api.get(url);
    return response.data;
  },
};
