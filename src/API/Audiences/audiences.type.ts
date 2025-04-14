export interface IAudiences {
  id: number;
  category: string;
}

export interface ICreateAudienceDto {
  category: string;
}

export interface IUpdateAudienceDto {
  id: number;
  category: string;
}
