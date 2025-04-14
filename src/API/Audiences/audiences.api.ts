import api from "../index.ts";
import {
  IAudiences,
  ICreateAudienceDto,
  IUpdateAudienceDto,
} from "./audiences.type.ts";

export const AudiencesApi = {
  getAll: async (url: string): Promise<IAudiences[]> => {
    const response = await api.get(url);
    return response.data;
  },

  create: async (dto: ICreateAudienceDto): Promise<void> => {
    const response = await api.post("Audiences", dto);
    return response.data;
  },

  update: async (id: number, dto: IUpdateAudienceDto): Promise<void> => {
    const response = await api.put(`Audiences/${id}`, dto);
    return response.data;
  },

  remove: async (id: number): Promise<void> => {
    await api.delete(`Audiences/${id}`);
  },
};
