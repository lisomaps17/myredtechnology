export type Category = 'MASCULINO' | 'FEMENINO';

export interface ComboItem {
  name: string;
  price: string;
}

export interface Combo {
  id: string;
  title: string;
  image: string;
  category: Category;
  items: ComboItem[];
}