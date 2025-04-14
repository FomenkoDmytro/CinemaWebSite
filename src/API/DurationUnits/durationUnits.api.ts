import api from "../index.ts";
import {
  IDurationUnits,
  ICreateDurationUnitDto,
  IUpdateDurationUnitDto,
} from "./durationUnits.type";

export const DurationUnitsApi = {
  getAll: async (url: string): Promise<IDurationUnits[]> => {
    const response = await api.get(url);
    return response.data;
  },

  create: async (dto: ICreateDurationUnitDto): Promise<void> => {
    const response = await api.post("DurationUnits", dto);
    return response.data;
  },

  update: async (id: number, dto: IUpdateDurationUnitDto): Promise<void> => {
    const response = await api.put(`DurationUnits/${id}`, dto);
    return response.data;
  },

  remove: async (id: number): Promise<void> => {
    await api.delete(`DurationUnits/${id}`);
  },
};
