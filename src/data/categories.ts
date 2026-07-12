import { CategoryItem } from "@/types/category";
import { Flower2, Heart, Sun, TreePine, Droplets, Sparkles } from "lucide-react";

export const categories: CategoryItem[] = [
  { id: "floral", name: "Florais", description: "Aromas delicados que remetem a campos floridos.", icon: Flower2 },
  { id: "doce", name: "Doces", description: "Aromas envolventes e aconchegantes.", icon: Heart },
  { id: "citrico", name: "Cítricos", description: "Energizantes, frescos e vibrantes.", icon: Sun },
  { id: "amadeirado", name: "Amadeirados", description: "Notas intensas, elegantes e terrosas.", icon: TreePine },
  { id: "refrescante", name: "Refrescantes", description: "Aromas que trazem sensação de pureza e brisa limpa.", icon: Droplets },
  { id: "especial", name: "Especiais", description: "Edições limitadas e misturas exclusivas.", icon: Sparkles },
];
