export interface Product {
  name: string;
  id: number;
  parentId: number | null;
}

export interface MenuProduct {
  name: string;
  id: number;
  children?: MenuProduct[];
}
