export interface Languages {
  id: number;
  languageName: string;
}

export interface CreateLanguageDto {
  languageName: string;
}

export interface UpdateLanguageDto {
  id: number;
  languageName: string;
}
