import { Candle } from "@/types/candle";
import { CandleCard } from "./candle-card";
import { EmptyState } from "@/components/shared/empty-state";

interface CandleGridProps {
  candles: Candle[];
}

export function CandleGrid({ candles }: CandleGridProps) {
  if (candles.length === 0) {
    return (
      <EmptyState
        title="Nenhum produto encontrado"
        description="Não encontramos nenhuma vela com os filtros selecionados no momento."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {candles.map((candle) => (
        <CandleCard key={candle.id} candle={candle} />
      ))}
    </div>
  );
}
