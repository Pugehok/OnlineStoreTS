import { IItem } from '../../types/item';

interface Iproduct extends IItem {
  addToCart: (id: number) => void;
}

export const ProductCard: React.FC<Iproduct> = (props) => {
  const { id, title, discription, avatar, category, price, addToCart, discount } = props;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '300px', height: '300px' }}>
      <h2>{avatar}</h2>
      <span>{title}</span>
      <p>{discription}</p>
      <p>{category}</p>
      <p>Цена {price}</p>
      {discount ? <span> Цена со скидкой {price - discount}</span> : <span>{price}</span>}

      <button onClick={() => addToCart(id)}>Добавить в корзину</button>
    </div>
  );
};
