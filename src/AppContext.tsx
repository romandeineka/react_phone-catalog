import React, { ReactNode, createContext, useEffect, useState } from 'react';
import { Product } from './types/Product';
import { CartItem } from './types/CartItem';

type AppContextType = {
  phones: Product[];
  setPhones: React.Dispatch<React.SetStateAction<Product[]>>;
  selectedProduct: Product | null;
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product | null>>;
  tablets: Product[];
  setTablets: React.Dispatch<React.SetStateAction<Product[] | []>>;
  accessories: Product[];
  setAccessories: React.Dispatch<React.SetStateAction<Product[] | []>>;
  favourites: Product[];
  setFavourites: React.Dispatch<React.SetStateAction<Product[] | []>>;
  counterFavourites: number;
  setCounterFavourites: React.Dispatch<React.SetStateAction<number>>;
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[] | []>>;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  counterCart: number;
  setCounterCart: React.Dispatch<React.SetStateAction<number>>;
  sortItems: (items: Product[], order: string) => Product[];
};

export const AppContext = createContext<AppContextType>({
  phones: [],
  setPhones: () => {},
  selectedProduct: null,
  setSelectedProduct: () => {},
  tablets: [],
  setTablets: () => {},
  accessories: [],
  setAccessories: () => {},
  favourites: [],
  setFavourites: () => {},
  counterFavourites: 0,
  setCounterFavourites: () => {},
  cart: [],
  setCart: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  counterCart: 0,
  setCounterCart: () => {},
  sortItems: () => [] as Product[],
});
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [phones, setPhones] = useState<Product[] | []>([]);
  const [tablets, setTablets] = useState<Product[] | []>([]);
  const [accessories, setAccessories] = useState<Product[] | []>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [favourites, setFavourites] = useState<Product[] | []>(
    JSON.parse(localStorage.getItem('favourites') || '[]'),
  );
  const [counterFavourites, setCounterFavourites] = useState<number>(0);
  const [cart, setCart] = useState<CartItem[] | []>(
    JSON.parse(localStorage.getItem('cart') || '[]'),
  );
  const [counterCart, setCounterCart] = useState<number>(0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(
        item => item.product.id === product.id,
      );

      if (existingItem) {
        return prevCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.product.id === productId ? { ...item, quantity } : item,
      ),
    );
  };

  const sortItems = (items: Product[], order: string): Product[] => {
    const normalizedOrder = order.toLowerCase();

    return [...items].sort((a: Product, b: Product) => {
      if (normalizedOrder === 'newest') {
        return b.priceRegular - a.priceRegular;
      } else if (normalizedOrder === 'latest') {
        return a.priceRegular - b.priceRegular;
      }

      return 0;
    });
  };

  return (
    <AppContext.Provider
      value={{
        phones,
        setPhones,
        selectedProduct,
        setSelectedProduct,
        tablets,
        setTablets,
        accessories,
        setAccessories,
        favourites,
        setFavourites,
        counterFavourites,
        setCounterFavourites,
        cart,
        setCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        counterCart,
        setCounterCart,
        sortItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
