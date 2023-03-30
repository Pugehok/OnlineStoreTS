export interface IItem{
    id:number,
    title: string,
    avatar: string,
    discription: string,
    category: string,
    discount?: number,
    countInCart: number,
    price: number,
    rating?: number,
    count: number;
}

export type formValues = {
    firstName: string;
    lastName: string;
    adress: string;
    numberphone: string;
};
  