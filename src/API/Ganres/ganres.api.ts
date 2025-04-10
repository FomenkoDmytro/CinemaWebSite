import api from "../index.ts";
import { Ganres, CreateGanreDto, UpdateGanreDto } from "./Ganres.type";

export const GanresApi = {
  getAll: async (url: string): Promise<Ganres[]> => {
    const response = await api.get(url);
    return response.data;
  },
};
