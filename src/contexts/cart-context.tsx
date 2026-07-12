"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { Candle } from "@/types/candle";
import { toast } from "sonner";

export interface CartItem {
  candle: Candle;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (candle: Candle) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Load from local storage
  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem("aqua-marine-cart");
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("aqua-marine-cart", JSON.stringify(items));
    }
  }, [items, isMounted]);

  const addItem = (candle: Candle) => {
    setItems((current) => {
      const existing = current.find((item) => item.candle.id === candle.id);
      if (existing) {
        return current.map((item) =>
          item.candle.id === candle.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...current, { candle, quantity: 1 }];
    });
    toast.success(`"${candle.name}" adicionada à sacola`, {
      description: "Você pode finalizar o pedido a qualquer momento.",
      action: {
        label: "Ver sacola",
        onClick: () => setIsCartOpen(true),
      },
    });
  };

  const removeItem = (id: string) => {
    setItems((current) => current.filter((item) => item.candle.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    setItems((current) =>
      current.map((item) =>
        item.candle.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.candle.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
