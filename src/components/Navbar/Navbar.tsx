import * as styles from './Navbar.module.css';
import { CartComponent } from './CartComponent';

import { IItem } from '../../types/item';

interface ICart {
  items: IItem[];
  status: boolean;
  toggleCart: () => void;
  removeItem: (id: number) => void;
}

export const NavBar: React.FC<ICart> = (props: ICart) => {
  const { items, status, toggleCart, removeItem } = props;
  const totalprice = (): number => {
    let counter: number = 0;

    for (let i = 0; i < items.length; i++) {
      counter += items[i].price;
    }

    return counter;
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        height: '5vh',
        alignItems: 'center',
      }}
    >
      <h1>LOGO</h1>
      <textarea placeholder="Поиск" name=""></textarea>
      <CartComponent
        items={items}
        status={status}
        handlerStatus={toggleCart}
        totalprice={totalprice()}
      />
    </div>
  );
};
