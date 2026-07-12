export type CandleCategory = 
  | "floral"
  | "doce"
  | "citrico"
  | "amadeirado"
  | "refrescante"
  | "especial";

export interface Candle {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description?: string;
  category: CandleCategory;
  fragranceNotes?: string[];
  size?: string;
  burnTime?: string;
  price?: number;
  image: string;
  gallery?: string[];
  featured: boolean;
  available: boolean;
  new?: boolean;
  customizable?: boolean;
}
