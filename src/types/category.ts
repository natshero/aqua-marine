import { CandleCategory } from "./candle";
import { LucideIcon } from "lucide-react";

export interface CategoryItem {
  id: CandleCategory;
  name: string;
  description: string;
  icon: LucideIcon;
}
