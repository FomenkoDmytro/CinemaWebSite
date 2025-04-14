export interface IDurationUnits {
  id: number;
  shortName: string;
  fullName: string;
}

export interface ICreateDurationUnitDto {
  shortName: string;
  fullName: string;
}

export interface IUpdateDurationUnitDto {
  shortName: string;
  fullName: string;
}
