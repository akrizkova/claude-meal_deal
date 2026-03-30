import type { ShopDefinition } from '../types';

export const waitrose: ShopDefinition = {
  id: 'waitrose',
  displayName: 'Waitrose',
  colour: 'bg-green-700',
  textColour: 'text-green-700',
  borderColour: 'border-green-700',
  mealDealPrice: 500, // £5.00
  items: [
    // Mains
    { id: 'wt-main-001', shopId: 'waitrose', slot: 'main', category: 'sandwich', name: 'Waitrose 1 Wiltshire Ham & Mustard', kcal: 375, price: 450, isHighProtein: true },
    { id: 'wt-main-002', shopId: 'waitrose', slot: 'main', category: 'sandwich', name: 'Smoked Salmon & Cream Cheese', kcal: 385, price: 490, isPescetarian: true, isNutFree: true, isHighProtein: true },
    { id: 'wt-main-003', shopId: 'waitrose', slot: 'main', category: 'sandwich', name: 'Coronation Chicken Sandwich', kcal: 420, price: 450, isHighProtein: true },
    { id: 'wt-main-004', shopId: 'waitrose', slot: 'main', category: 'sandwich', name: 'Avocado & Houmous Sandwich', kcal: 335, price: 420, isVegan: true, isVegetarian: true, isPescetarian: true, isDairyFree: true, isLactoseFree: true, isNutFree: true },
    { id: 'wt-main-005', shopId: 'waitrose', slot: 'main', category: 'wrap', name: 'Chicken Caesar Wrap', kcal: 430, price: 460, isHighProtein: true },
    { id: 'wt-main-006', shopId: 'waitrose', slot: 'main', category: 'wrap', name: 'Falafel & Houmous Wrap', kcal: 355, price: 440, isVegan: true, isVegetarian: true, isPescetarian: true, isDairyFree: true, isLactoseFree: true },
    { id: 'wt-main-007', shopId: 'waitrose', slot: 'main', category: 'salad', name: 'Chicken & Avocado Salad', kcal: 270, price: 475, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isHighProtein: true },
    { id: 'wt-main-008', shopId: 'waitrose', slot: 'main', category: 'salad', name: 'Supergreen Salad', kcal: 195, price: 450, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isLowCalorie: true },
    { id: 'wt-main-009', shopId: 'waitrose', slot: 'main', category: 'bowl', name: 'Poké Bowl with Salmon', kcal: 380, price: 550, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isHighProtein: true },
    { id: 'wt-main-010', shopId: 'waitrose', slot: 'main', category: 'bowl', name: 'Falafel & Tabbouleh Bowl', kcal: 345, price: 499, isVegan: true, isVegetarian: true, isPescetarian: true, isDairyFree: true, isLactoseFree: true, isNutFree: true },
    { id: 'wt-main-011', shopId: 'waitrose', slot: 'main', category: 'soup', name: 'Roasted Tomato & Basil Soup', kcal: 150, price: 299, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isLowCalorie: true },
    { id: 'wt-main-012', shopId: 'waitrose', slot: 'main', category: 'sushi', name: 'Sushi Selection', kcal: 310, price: 520, isPescetarian: true, isDairyFree: true, isLactoseFree: true, isHighProtein: true },
    { id: 'wt-main-013', shopId: 'waitrose', slot: 'main', category: 'pasta', name: 'Tomato & Mozzarella Pasta', kcal: 355, price: 380, isVegetarian: true, isNutFree: true },

    // Snacks
    { id: 'wt-snack-001', shopId: 'waitrose', slot: 'snack', category: 'crisps', name: 'Waitrose Sea Salt Crisps', kcal: 140, price: 130, isVegan: true, isVegetarian: true, isPescetarian: true, isDairyFree: true, isLactoseFree: true, isNutFree: true },
    { id: 'wt-snack-002', shopId: 'waitrose', slot: 'snack', category: 'crisps', name: 'Tyrells Sea Salt & Cider Vinegar', brand: 'Tyrells', kcal: 150, price: 135, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true },
    { id: 'wt-snack-003', shopId: 'waitrose', slot: 'snack', category: 'chocolate', name: 'Waitrose Belgian Dark Chocolate', kcal: 195, price: 180, isVegan: true, isVegetarian: true, isPescetarian: true, isDairyFree: true, isLactoseFree: true },
    { id: 'wt-snack-004', shopId: 'waitrose', slot: 'snack', category: 'chocolate', name: 'Green & Blacks Milk Chocolate', brand: 'Green & Blacks', kcal: 220, price: 175, isVegetarian: true },
    { id: 'wt-snack-005', shopId: 'waitrose', slot: 'snack', category: 'fruit', name: 'Waitrose Berry Fruit Pot', kcal: 60, price: 199, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isLowCalorie: true },
    { id: 'wt-snack-006', shopId: 'waitrose', slot: 'snack', category: 'nuts', name: 'Waitrose Roasted Cashews 40g', kcal: 215, price: 175, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isHighProtein: true },
    { id: 'wt-snack-007', shopId: 'waitrose', slot: 'snack', category: 'cereal bar', name: 'Nakd Cocoa Orange Bar', brand: 'Nakd', kcal: 130, price: 120, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true },
    { id: 'wt-snack-008', shopId: 'waitrose', slot: 'snack', category: 'cake/pastry', name: 'Waitrose Lemon Tart Slice', kcal: 275, price: 175, isVegetarian: true, isNutFree: true },
    { id: 'wt-snack-009', shopId: 'waitrose', slot: 'snack', category: 'sweet snack', name: 'Waitrose Medjool Dates 60g', kcal: 165, price: 149, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true },
    { id: 'wt-snack-010', shopId: 'waitrose', slot: 'snack', category: 'savoury snack', name: 'Waitrose Cheese Straws', kcal: 180, price: 150, isVegetarian: true },

    // Drinks
    { id: 'wt-drink-001', shopId: 'waitrose', slot: 'drink', category: 'water', name: 'Waitrose Still Water 500ml', kcal: 0, price: 90, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isLowCalorie: true },
    { id: 'wt-drink-002', shopId: 'waitrose', slot: 'drink', category: 'juice', name: 'Waitrose Squeezed Orange Juice 250ml', kcal: 108, price: 199, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true },
    { id: 'wt-drink-003', shopId: 'waitrose', slot: 'drink', category: 'fizzy drink', name: 'Waitrose Sparkling Elderflower', kcal: 58, price: 175, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isLowCalorie: true },
    { id: 'wt-drink-004', shopId: 'waitrose', slot: 'drink', category: 'fizzy drink', name: 'Coca-Cola Zero 330ml', brand: 'Coca-Cola', kcal: 1, price: 130, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isLowCalorie: true },
    { id: 'wt-drink-005', shopId: 'waitrose', slot: 'drink', category: 'smoothie', name: 'Innocent Mango & Passion Fruit 300ml', brand: 'Innocent', kcal: 156, price: 249, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true },
    { id: 'wt-drink-006', shopId: 'waitrose', slot: 'drink', category: 'hot drink', name: 'Waitrose Café Flat White', kcal: 80, price: 329, isVegetarian: true, isGlutenFree: true, isNutFree: true, isLowCalorie: true },
    { id: 'wt-drink-007', shopId: 'waitrose', slot: 'drink', category: 'hot drink', name: 'Waitrose Americano', kcal: 5, price: 279, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isLowCalorie: true },
    { id: 'wt-drink-008', shopId: 'waitrose', slot: 'drink', category: 'iced coffee', name: 'Waitrose Cold Brew Coffee', kcal: 15, price: 299, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isLowCalorie: true },
    { id: 'wt-drink-009', shopId: 'waitrose', slot: 'drink', category: 'energy drink', name: 'Red Bull Original 250ml', brand: 'Red Bull', kcal: 113, price: 165, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true },
  ],
};
