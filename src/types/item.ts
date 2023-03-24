export interface IItem{
    id:number,
    title: string,
    avatar: string,
    discription: string,
    category: string,
    discount?: number,
    price: number,
    rating?: number,
    count: number;
    countInCart:number;
}