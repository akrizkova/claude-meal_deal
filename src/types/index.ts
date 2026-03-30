export type ShopId = 'tesco' | 'sainsburys' | 'morrisons' | 'boots' | 'coop' | 'marks_spencer' | 'waitrose';

export type MainCategory = 'sandwich' | 'wrap' | 'salad' | 'sushi' | 'pasta' | 'soup' | 'hot food' | 'baguette' | 'roll' | 'bowl';
export type SnackCategory = 'crisps' | 'savoury snack' | 'chocolate' | 'sweet snack' | 'fruit' | 'cake/pastry' | 'cereal bar' | 'nuts';
export type DrinkCategory = 'water' | 'juice' | 'fizzy drink' | 'hot drink' | 'smoothie' | 'energy drink' | 'iced coffee';

export type SlotType = 'main' | 'snack' | 'drink';

export type DietaryType = 'none' | 'vegetarian' | 'vegan' | 'pescetarian';

export interface MealDealItem {
  id: string;
  shopId: ShopId;
  slot: SlotType;
  category: MainCategory | SnackCategory | DrinkCategory;
  name: string;
  brand?: string;
  kcal?: number;
  price: number;       // individual retail price in pence (e.g. 299 = £2.99)
  isVegetarian?: boolean;
  isVegan?: boolean;
  isPescetarian?: boolean;
  isGlutenFree?: boolean;
  isDairyFree?: boolean;
  isLactoseFree?: boolean;
  isHalal?: boolean;
  isNutFree?: boolean;
  isHighProtein?: boolean;
  isLowCalorie?: boolean;
}

export interface ShopDefinition {
  id: ShopId;
  displayName: string;
  colour: string;
  textColour: string;
  borderColour: string;
  mealDealPrice: number;  // bundle price in pence
  items: MealDealItem[];
}

export interface Preferences {
  mains: MainCategory[];
  snacks: SnackCategory[];
  drinks: DrinkCategory[];
  dietary: DietaryType;
  glutenFree: boolean;
  dairyFree: boolean;
  lactoseFree: boolean;
  halal: boolean;
  nutFree: boolean;
  highProtein: boolean;
  lowCalorie: boolean;
}

export interface Combination {
  id: string;
  shopId: ShopId;
  main: MealDealItem;
  snack: MealDealItem;
  drink: MealDealItem;
  savedAt?: number;
}

export const ALL_MAIN_CATEGORIES: MainCategory[] = [
  'sandwich', 'wrap', 'salad', 'sushi', 'pasta', 'soup', 'hot food', 'baguette', 'roll', 'bowl',
];

export const ALL_SNACK_CATEGORIES: SnackCategory[] = [
  'crisps', 'savoury snack', 'chocolate', 'sweet snack', 'fruit', 'cake/pastry', 'cereal bar', 'nuts',
];

export const ALL_DRINK_CATEGORIES: DrinkCategory[] = [
  'water', 'juice', 'fizzy drink', 'hot drink', 'smoothie', 'energy drink', 'iced coffee',
];

export function formatPrice(pence: number): string {
  return `£${(pence / 100).toFixed(2)}`;
}
