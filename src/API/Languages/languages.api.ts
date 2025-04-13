import api from "../index.ts";
import {
  ILanguages,
  ICreateLanguageDto,
  IUpdateLanguageDto,
} from "./languages.type";

export const LanguagesApi = {
  getAll: async (url: string): Promise<ILanguages[]> => {
    const response = await api.get(url);
    return response.data;
  },

  create: async (dto: ICreateLanguageDto): Promise<void> => {
    const response = await api.post("Languages", dto);
    return response.data;
  },

  update: async (id: number, dto: IUpdateLanguageDto): Promise<void> => {
    const response = await api.put(`Languages/${id}`, dto);
    return response.data;
  },

  remove: async (id: number): Promise<void> => {
    await api.delete(`Languages/${id}`);
  },
};
