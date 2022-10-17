import { Menu } from "../../types/menu/menu";

export const MenuItems: Menu[] = [
  {
    imageUrl: "https://source.unsplash.com/NZMeJsrMC8U",
    name: "coffee",
    price: "180",
    allergens: []
  },
  {
    imageUrl: "https://source.unsplash.com/qEcWgrTG578",
    name: "tea",
    price: "170",
    allergens: []
  },
  {
    imageUrl: "https://source.unsplash.com/nXKWLn8y9qE",
    name: "cake",
    price: "250",
    allergens: ["wheat", "egg", "dairy"]
  },
  {
    imageUrl: "https://source.unsplash.com/6jHpcBPw7i8",
    name: "chokocake",
    price: "280",
    allergens: ["wheat", "egg", "dairy"]
  }
];
