import type { ShopDefinition } from '../types';

export const greggs: ShopDefinition = {
  id: 'greggs',
  displayName: 'Greggs',
  colour: 'bg-blue-800',
  textColour: 'text-blue-800',
  borderColour: 'border-blue-800',
  mealDealPrice: 375, // £3.75 (cold sandwich + drink)
  items: [
    { id: 'greggs-main-001', shopId: 'greggs', slot: 'main', category: 'roll', name: 'Sausage Roll', kcal: 311, price: 135, isHighProtein: true },
    { id: 'greggs-main-002', shopId: 'greggs', slot: 'main', category: 'roll', name: 'Vegan Sausage Roll', kcal: 309, price: 135, isVegan: true, isVegetarian: true, isPescetarian: true, isDairyFree: true, isLactoseFree: true },
    { id: 'greggs-main-003', shopId: 'greggs', slot: 'main', category: 'hot food', name: 'Steak Bake', kcal: 408, price: 165, isHighProtein: true },
    { id: 'greggs-main-004', shopId: 'greggs', slot: 'main', category: 'hot food', name: 'Chicken Bake', kcal: 395, price: 165, isHighProtein: true },
    { id: 'greggs-main-005', shopId: 'greggs', slot: 'main', category: 'hot food', name: 'Vegan Steak Bake', kcal: 392, price: 165, isVegan: true, isVegetarian: true, isPescetarian: true, isDairyFree: true, isLactoseFree: true },
    { id: 'greggs-main-006', shopId: 'greggs', slot: 'main', category: 'sandwich', name: 'Egg & Cheese Sandwich', kcal: 345, price: 280, isVegetarian: true, isNutFree: true, isHighProtein: true },
    { id: 'greggs-main-007', shopId: 'greggs', slot: 'main', category: 'sandwich', name: 'BLT Sandwich', kcal: 360, price: 299, isNutFree: true, isHighProtein: true },
    { id: 'greggs-main-008', shopId: 'greggs', slot: 'main', category: 'sandwich', name: 'Tuna Crunch Sandwich', kcal: 355, price: 285, isPescetarian: true, isNutFree: true, isHighProtein: true },
    { id: 'greggs-main-009', shopId: 'greggs', slot: 'main', category: 'wrap', name: 'Chicken & Bacon Wrap', kcal: 420, price: 310, isHighProtein: true },
    { id: 'greggs-main-010', shopId: 'greggs', slot: 'main', category: 'baguette', name: 'Chicken & Stuffing Baguette', kcal: 490, price: 360, isHighProtein: true },
    { id: 'greggs-main-011', shopId: 'greggs', slot: 'main', category: 'hot food', name: 'Mac & Cheese Bite', kcal: 190, price: 120, isVegetarian: true, isNutFree: true, isLowCalorie: true },
    { id: 'greggs-main-012', shopId: 'greggs', slot: 'main', category: 'soup', name: 'Chicken & Vegetable Soup', kcal: 120, price: 190, isNutFree: true, isLowCalorie: true, isHighProtein: true },

    { id: 'greggs-snack-001', shopId: 'greggs', slot: 'snack', category: 'cake/pastry', name: 'Greggs Doughnut', kcal: 270, price: 99, isVegetarian: true, isNutFree: true },
    { id: 'greggs-snack-002', shopId: 'greggs', slot: 'snack', category: 'cake/pastry', name: 'Caramel Latte Rocky Road', kcal: 265, price: 120, isVegetarian: true },
    { id: 'greggs-snack-003', shopId: 'greggs', slot: 'snack', category: 'cake/pastry', name: 'Glazed Ring Doughnut', kcal: 225, price: 90, isVegan: true, isVegetarian: true, isPescetarian: true, isDairyFree: true, isLactoseFree: true, isNutFree: true },
    { id: 'greggs-snack-004', shopId: 'greggs', slot: 'snack', category: 'chocolate', name: 'Cadbury Dairy Milk 45g', brand: 'Cadbury', kcal: 236, price: 110, isVegetarian: true, isNutFree: true },
    { id: 'greggs-snack-005', shopId: 'greggs', slot: 'snack', category: 'crisps', name: 'Walkers Salt & Vinegar', brand: 'Walkers', kcal: 128, price: 89, isVegetarian: true, isNutFree: true },
    { id: 'greggs-snack-006', shopId: 'greggs', slot: 'snack', category: 'crisps', name: 'Walkers Ready Salted', brand: 'Walkers', kcal: 130, price: 89, isVegan: true, isVegetarian: true, isPescetarian: true, isNutFree: true },
    { id: 'greggs-snack-007', shopId: 'greggs', slot: 'snack', category: 'fruit', name: 'Banana', kcal: 90, price: 30, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isLowCalorie: true },
    { id: 'greggs-snack-008', shopId: 'greggs', slot: 'snack', category: 'cereal bar', name: 'Tracker Chocolate Chip', brand: 'Tracker', kcal: 185, price: 89, isVegetarian: true },

    { id: 'greggs-drink-001', shopId: 'greggs', slot: 'drink', category: 'hot drink', name: 'Greggs Latte', kcal: 135, price: 249, isVegetarian: true, isGlutenFree: true, isNutFree: true },
    { id: 'greggs-drink-002', shopId: 'greggs', slot: 'drink', category: 'hot drink', name: 'Greggs Cappuccino', kcal: 110, price: 229, isVegetarian: true, isGlutenFree: true, isNutFree: true },
    { id: 'greggs-drink-003', shopId: 'greggs', slot: 'drink', category: 'hot drink', name: 'Greggs Americano', kcal: 15, price: 199, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isLowCalorie: true },
    { id: 'greggs-drink-004', shopId: 'greggs', slot: 'drink', category: 'fizzy drink', name: 'Coca-Cola Original 330ml', brand: 'Coca-Cola', kcal: 139, price: 130, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true },
    { id: 'greggs-drink-005', shopId: 'greggs', slot: 'drink', category: 'fizzy drink', name: 'Fanta Orange 330ml', brand: 'Fanta', kcal: 63, price: 125, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isLowCalorie: true },
    { id: 'greggs-drink-006', shopId: 'greggs', slot: 'drink', category: 'water', name: 'Still Water 500ml', kcal: 0, price: 65, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isLowCalorie: true },
    { id: 'greggs-drink-007', shopId: 'greggs', slot: 'drink', category: 'juice', name: 'Tropicana Orange 250ml', brand: 'Tropicana', kcal: 98, price: 160, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true },
    { id: 'greggs-drink-008', shopId: 'greggs', slot: 'drink', category: 'iced coffee', name: 'Greggs Iced Latte', kcal: 115, price: 269, isVegetarian: true, isGlutenFree: true, isNutFree: true },
  ],
};
