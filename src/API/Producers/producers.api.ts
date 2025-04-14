import api from "../index.ts";
import {
  IProducers,
  ICreateProducerDto,
  IUpdateProducerDto,
} from "./producers.type";

export const ProducersApi = {
  getAll: async (url: string): Promise<IProducers[]> => {
    const response = await api.get(url);
    return response.data;
  },

  create: async (dto: ICreateProducerDto): Promise<void> => {
    const response = await api.post("Producers", dto);
    return response.data;
  },

  update: async (id: number, dto: IUpdateProducerDto): Promise<void> => {
    const response = await api.put(`Producers/${id}`, dto);
    return response.data;
  },

  remove: async (id: number): Promise<void> => {
    await api.delete(`Producers/${id}`);
  },
};
