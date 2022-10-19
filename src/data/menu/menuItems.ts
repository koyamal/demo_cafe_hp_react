import { Menu } from "../../types/menu/menu";

export const MenuItems: Menu[] = [
  {
    imageUrl: "https://source.unsplash.com/NZMeJsrMC8U",
    name: "coffee",
    price: "180",
    allergens: [],
    nutritions: {
      calories: "125kcal",
      proteins: "12g",
      fat: "3g",
      sodium: "45mg",
      carbohydrate: "31g"
    },
    type: "drink"
  },
  {
    imageUrl: "https://source.unsplash.com/qEcWgrTG578",
    name: "tea",
    price: "170",
    allergens: [],
    nutritions: {
      calories: "125kcal",
      proteins: "12g",
      fat: "3g",
      sodium: "45mg",
      carbohydrate: "31g"
    },
    type: "drink"
  },
  {
    imageUrl: "https://source.unsplash.com/nXKWLn8y9qE",
    name: "cake",
    price: "250",
    allergens: ["wheat", "egg", "dairy"],
    nutritions: {
      calories: "125kcal",
      proteins: "12g",
      fat: "3g",
      sodium: "45mg",
      carbohydrate: "31g"
    },
    type: "food"
  },
  {
    imageUrl: "https://source.unsplash.com/6jHpcBPw7i8",
    name: "chokocake",
    price: "280",
    allergens: ["wheat", "egg", "dairy"],
    nutritions: {
      calories: "125kcal",
      proteins: "12g",
      fat: "3g",
      sodium: "45mg",
      carbohydrate: "31g"
    },
    type: "food"
  }
];
