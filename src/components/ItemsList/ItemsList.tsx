import { IItem } from '../../types/item';
import { ProductCard } from '../item/item';
interface IProducts {
  items: IItem[];
  addToCart: (id: number) => void;
}

export const ItemsList: React.FC<IProducts> = (props) => {
  const { items, addToCart } = props;

  return (
    <div>
      {items.map((item) => (
        <ProductCard key={item.id} {...item} addToCart={addToCart} />
      ))}
    </div>
  );
};
