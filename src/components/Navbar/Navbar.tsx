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
    return items.reduce((accamulate, item) => {
      return accamulate + item.price * item.countInCart;
    }, 0);
  };

  const countItemesInCart = (): number => {
    return items.reduce((accamulate, item) => {
      return accamulate + item.countInCart;
    }, 0);
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
        removeItem={removeItem}
        items={items}
        status={status}
        handlerStatus={toggleCart}
        totalprice={totalprice()}
        countItemesInCart={countItemesInCart()}
      />
    </div>
  );
};
