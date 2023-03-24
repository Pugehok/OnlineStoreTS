import { IItem } from '../../types/item';

interface ICart {
  items: IItem[];
  status: boolean;
  handlerStatus: () => void;
  totalprice: number;
}

export const CartComponent: React.FC<ICart> = (props: ICart) => {
  const { items, status, handlerStatus, totalprice } = props;

  const itemsList: any = items.map((item) => {
    return (
      <li>
        <p>{item.avatar}</p>
        <span>{item.price}</span>
        <p>У вас в корзине {item.countInCart}</p>
        <button>Удалить из корзины</button>
      </li>
    );
  });

  return (
    <div onClick={() => handlerStatus()}>
      {status ? (
        <div>
          <span>cart</span>
          <p>{items.length}</p>
        </div>
      ) : (
        <div style={{ marginTop: '240px', border: '1px solid black' }}>
          <ul style={{ display: 'flex', flexDirection: 'column' }}>{itemsList}</ul>
          <h2>Total Price: {totalprice}</h2>
        </div>
      )}
    </div>
  );
};
