import { IItem } from '../types/item';
import { NavBar } from './Navbar/Navbar';
import { ItemsList } from './ItemsList/ItemsList';
import { useState, useEffect, useRef } from 'react';
const products: IItem[] = [
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
  const [filtredItems, setfiltredItems] = useState<IItem[]>([]);
  useEffect(() => {
    setItems(products);
    setfiltredItems(products);
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

  const removeItem = (id: number): void => {
    const item = itemsInCart.find((item) => item.id === id);

    if (item && item.countInCart >= 2) {
      const index: number = itemsInCart.indexOf(item);
      const coppyArr: IItem[] = [...itemsInCart];
      coppyArr[index].countInCart -= 1;
      setInCart([...coppyArr]);
    }

    if (item && item.countInCart === 1) {
      const index: number = itemsInCart.indexOf(item);
      const coppyArr: IItem[] = [...itemsInCart];
      coppyArr.splice(index, 1);
      console.log(index, coppyArr);
      setInCart([...coppyArr]);
    }
  };

  const filterCategory: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value.length > 2) {
      const filtredItemsOnCategory: IItem[] | undefined = items.filter((obj) =>
        obj.category.toLocaleLowerCase().includes(e.target.value.toLowerCase()),
      );
      const filtredItemsOnTitle: IItem[] | undefined = items.filter((obj) =>
        obj.title.toLocaleLowerCase().includes(e.target.value.toLowerCase()),
      );
      filtredItemsOnCategory.length > filtredItemsOnTitle.length
        ? setfiltredItems([...filtredItemsOnCategory])
        : setfiltredItems([...filtredItemsOnTitle]);
    } else {
      setfiltredItems([...items]);
    }
  };

  return (
    <div>
      <header>
        <NavBar
          status={isOpenCart}
          items={itemsInCart}
          toggleCart={toggleCart}
          removeItem={removeItem}
          filterCategory={filterCategory}
        />
      </header>
      <section>
        <ItemsList items={filtredItems} addToCart={addToCart} />
      </section>
    </div>
  );
};
