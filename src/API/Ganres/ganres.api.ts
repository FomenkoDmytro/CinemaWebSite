import api from "../index.ts";
import { IGanres, ICreateGanreDto, IUpdateGanreDto } from "./ganres.type.ts";

export const GanresApi = {
  getAll: async (url: string): Promise<IGanres[]> => {
    const response = await api.get(url);
    return response.data;
  },

  create: async (dto: ICreateGanreDto): Promise<void> => {
    const response = await api.post("Ganres", dto);
    return response.data;
  },

  update: async (id: number, dto: IUpdateGanreDto): Promise<void> => {
    const response = await api.put(`Ganres/${id}`, dto);
    return response.data;
  },

  remove: async (id: number): Promise<void> => {
    await api.delete(`Ganres/${id}`);
  },
};
