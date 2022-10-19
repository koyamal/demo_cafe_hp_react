export type Menu = {
  imageUrl: string;
  name: string;
  price: string;
  allergens: string[];
  nutritions: {
    calories: string;
    proteins: string;
    fat: string;
    sodium: string;
    carbohydrate: string;
  };
  type: string;
};
