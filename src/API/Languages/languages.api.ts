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

  create: async (dto: CreateLanguageDto): Promise<Languages> => {
    const response = await api.post("Languages", dto);
    return response.data;
  },

  update: async (id: number, dto: CreateLanguageDto): Promise<Languages> => {
    const response = await api.put(`Languages/${id}`, dto);
    return response.data;
  },

  remove: async (id: number): Promise<void> => {
    await api.delete(`Languages/${id}`);
  },
};
