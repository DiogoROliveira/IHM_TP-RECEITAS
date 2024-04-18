export interface Recipe {
    id: number;
    title: string;
    description: string;
    ingredients: {name : string, quantity: string}[];
    preparation: string[];
  }
  