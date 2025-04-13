import api from "../index.ts";
import { IActors, ICreateActorDto, IUpdateActorDto } from "./actors.type";

export const ActorsApi = {
  getAll: async (url: string): Promise<IActors[]> => {
    const response = await api.get(url);
    return response.data;
  },

  create: async (dto: ICreateActorDto): Promise<void> => {
    const response = await api.post("Actors", dto);
    return response.data;
  },

  update: async (id: number, dto: IUpdateActorDto): Promise<void> => {
    const response = await api.put(`Actors/${id}`, dto);
    return response.data;
  },

  remove: async (id: number): Promise<void> => {
    await api.delete(`Actors/${id}`);
  },
};
