import { IItem } from '../../types/item';

interface ICart {
  items: IItem[];
  status: boolean;
  handlerStatus: () => void;
  countItemesInCart: number;
  totalprice: number;
  removeItem: (id: number) => void;
}

export const CartComponent: React.FC<ICart> = (props: ICart) => {
  const { items, removeItem, countItemesInCart, status, handlerStatus, totalprice } = props;

  const itemsList: any = items.map((item) => {
    return (
      <li>
        <p>{item.avatar}</p>
        <span>{item.price}</span>
        <p>У вас в корзине {item.countInCart}</p>
        <button onClick={() => removeItem(item.id)}>Удалить из корзины</button>
      </li>
    );
  });

  return (
    <div>
      {status ? (
        <div>
          <span onClick={() => handlerStatus()}>cart</span>
          <p>{countItemesInCart}</p>
        </div>
      ) : (
        <div style={{ marginTop: '240px', border: '1px solid black' }}>
          <ul style={{ display: 'flex', flexDirection: 'column' }}>{itemsList}</ul>
          <h2>Total Price: {totalprice}</h2>
          <span onClick={() => handlerStatus()}>Закрыть корзину</span>
        </div>
      )}
    </div>
  );
};
