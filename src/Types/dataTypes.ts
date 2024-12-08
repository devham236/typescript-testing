import { ReactNode } from "react";

const exampleRecipe = {
  id: 1,
  name: "Classic Margherita Pizza",
  ingredients: [
    "Pizza dough",
    "Tomato sauce",
    "Fresh mozzarella cheese",
    "Fresh basil leaves",
    "Olive oil",
    "Salt and pepper to taste",
  ],
  instructions: [
    "Preheat the oven to 475°F (245°C).",
    "Roll out the pizza dough and spread tomato sauce evenly.",
    "Top with slices of fresh mozzarella and fresh basil leaves.",
    "Drizzle with olive oil and season with salt and pepper.",
    "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
    "Slice and serve hot.",
  ],
  prepTimeMinutes: 20,
  cookTimeMinutes: 15,
  servings: 4,
  difficulty: "Easy",
  cuisine: "Italian",
  caloriesPerServing: 300,
  tags: ["Pizza", "Italian"],
  userId: 45,
  image: "https://cdn.dummyjson.com/recipe-images/1.webp",
  rating: 4.6,
  reviewCount: 3,
  mealType: ["Dinner"],
};

export type RecipeType = typeof exampleRecipe;

export interface DataContextType {
  recipesData: RecipeType[];
  setRecipesData: React.Dispatch<React.SetStateAction<RecipeType[]>>;
  ///////////////////////////////////////
  modal: { open: boolean; data: RecipeType | null };
  setModal: React.Dispatch<
    React.SetStateAction<{ open: boolean; data: null | RecipeType }>
  >;
  closeModal: () => void;
  openModal: (recipe: RecipeType) => void;
  ///////////////////////////////////////
  checkoutData: RecipeType[];
  setCheckoutData: React.Dispatch<React.SetStateAction<RecipeType[]>>;
  addToCheckout: (item: RecipeType) => void;
  removeFromCheckout: (id: number) => void;
}

export interface RecipeProps {
  recipe: RecipeType;
}

export interface DataContextProviderProps {
  children: ReactNode;
}
