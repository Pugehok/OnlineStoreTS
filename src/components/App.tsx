import { IItem } from '../types/item';
import { NavBar } from './Navbar/Navbar';
import { ItemsList } from './ItemsList/ItemsList';
import { useState, useEffect, useRef } from 'react';
const products: Array<IItem> = [
  {
    id: 1,
    title: 'Стиральная машинка',
    avatar: 'test',
    discription: 'Универсальная стиральная машинка',
    category: 'Бытовая техника',
    price: 6000,
    rating: 5,
    count: 10,
    countInCart: 1,
  },
  {
    id: 2,
    title: 'Ноутбуук',
    avatar: 'Ноут',
    discription: 'Домашний ноутбук',
    category: 'Ноутбуки',
    discount: 5000,
    price: 120000,
    count: 6,
    countInCart: 1,
  },
];

export const App = () => {
  const [isOpenCart, setToggleCart] = useState<boolean>(false);
  const [items, setItems] = useState<IItem[]>([]);
  const [itemsInCart, setInCart] = useState<IItem[]>([]);
  useEffect(() => {
    setItems(products);
  }, []);

  const addToCart = (id: number): void => {
    const item = itemsInCart.find((item) => item.id === id);
    if (item) {
      const index = itemsInCart.indexOf(item);
      const coppyArr: IItem[] = [...itemsInCart];
      coppyArr[index].countInCart += 1;
      setInCart([...coppyArr]);
    } else {
      const arr: Array<IItem> | undefined = items.filter((item) => item.id === id);
      if (arr) setInCart([...itemsInCart, ...arr]);
    }
  };

  const toggleCart = (): void => {
    setToggleCart(!isOpenCart);
  };

  const removeItem = (id: number): void => {};

  return (
    <div>
      <header>
        <NavBar
          status={isOpenCart}
          items={itemsInCart}
          toggleCart={toggleCart}
          removeItem={removeItem}
        />
      </header>
      <section>
        <ItemsList items={items} addToCart={addToCart} />
      </section>
    </div>
  );
};
