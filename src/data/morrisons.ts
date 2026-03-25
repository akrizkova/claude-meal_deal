import type { ShopDefinition } from '../types';

export const morrisons: ShopDefinition = {
  id: 'morrisons',
  displayName: 'Morrisons',
  colour: 'bg-yellow-500',
  textColour: 'text-yellow-600',
  borderColour: 'border-yellow-500',
  items: [
    // Mains
    { id: 'mor-main-001', shopId: 'morrisons', slot: 'main', category: 'sandwich', name: 'Morrisons The Best BLT', kcal: 430 },
    { id: 'mor-main-002', shopId: 'morrisons', slot: 'main', category: 'sandwich', name: 'Coronation Chicken Sandwich', kcal: 400 },
    { id: 'mor-main-003', shopId: 'morrisons', slot: 'main', category: 'sandwich', name: "Ploughman's Cheddar & Pickle", kcal: 410, isVegetarian: true },
    { id: 'mor-main-004', shopId: 'morrisons', slot: 'main', category: 'wrap', name: 'The Best Smoked Salmon Wrap', kcal: 375, isPescetarian: true },
    { id: 'mor-main-005', shopId: 'morrisons', slot: 'main', category: 'wrap', name: 'BBQ Chicken Wrap', kcal: 395 },
    { id: 'mor-main-006', shopId: 'morrisons', slot: 'main', category: 'wrap', name: 'Hummus & Roasted Veg Wrap', kcal: 330, isVegan: true, isVegetarian: true, isPescetarian: true },
    { id: 'mor-main-007', shopId: 'morrisons', slot: 'main', category: 'salad', name: 'Roast Chicken Salad', kcal: 260, isGlutenFree: true },
    { id: 'mor-main-008', shopId: 'morrisons', slot: 'main', category: 'salad', name: 'Rainbow Superfood Salad', kcal: 195, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'mor-main-009', shopId: 'morrisons', slot: 'main', category: 'pasta', name: 'Tuna Pasta Salad', kcal: 320, isPescetarian: true },
    { id: 'mor-main-010', shopId: 'morrisons', slot: 'main', category: 'sushi', name: 'Prawn & Avocado Sushi', kcal: 300, isPescetarian: true },
    { id: 'mor-main-011', shopId: 'morrisons', slot: 'main', category: 'soup', name: 'Minestrone Soup', kcal: 145, isVegan: true, isVegetarian: true, isPescetarian: true },
    { id: 'mor-main-012', shopId: 'morrisons', slot: 'main', category: 'hot food', name: 'Morrisons Savoury Rice Pot', kcal: 380, isVegetarian: true },
    { id: 'mor-main-013', shopId: 'morrisons', slot: 'main', category: 'bowl', name: 'Prawn & Noodle Bowl', kcal: 310, isPescetarian: true },

    // Snacks
    { id: 'mor-snack-001', shopId: 'morrisons', slot: 'snack', category: 'crisps', name: 'Doritos Tangy Cheese', brand: 'Doritos', kcal: 170, isVegetarian: true },
    { id: 'mor-snack-002', shopId: 'morrisons', slot: 'snack', category: 'crisps', name: 'Walkers Cheese & Onion', brand: 'Walkers', kcal: 130, isVegetarian: true },
    { id: 'mor-snack-003', shopId: 'morrisons', slot: 'snack', category: 'crisps', name: 'Kettle Chips Sea Salt', brand: 'Kettle', kcal: 155, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'mor-snack-004', shopId: 'morrisons', slot: 'snack', category: 'savoury snack', name: 'Snack a Jacks Salt & Vinegar', brand: 'Quaker', kcal: 88, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'mor-snack-005', shopId: 'morrisons', slot: 'snack', category: 'chocolate', name: 'Kinder Bueno', brand: 'Kinder', kcal: 247, isVegetarian: true },
    { id: 'mor-snack-006', shopId: 'morrisons', slot: 'snack', category: 'chocolate', name: 'Bounty Bar', brand: 'Mars', kcal: 271, isVegetarian: true },
    { id: 'mor-snack-007', shopId: 'morrisons', slot: 'snack', category: 'sweet snack', name: 'Digestive Biscuits 4-pack', brand: "McVitie's", kcal: 185, isVegetarian: true },
    { id: 'mor-snack-008', shopId: 'morrisons', slot: 'snack', category: 'fruit', name: 'Apple & Grape Snack Pot', kcal: 55, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'mor-snack-009', shopId: 'morrisons', slot: 'snack', category: 'cake/pastry', name: 'Morrisons Jam Doughnut', kcal: 295, isVegetarian: true },
    { id: 'mor-snack-010', shopId: 'morrisons', slot: 'snack', category: 'nuts', name: "Morrisons Salted Peanuts 30g", kcal: 180, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'mor-snack-011', shopId: 'morrisons', slot: 'snack', category: 'cereal bar', name: 'Nakd Berry Delight Bar', brand: 'Nakd', kcal: 135, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },

    // Drinks
    { id: 'mor-drink-001', shopId: 'morrisons', slot: 'drink', category: 'water', name: 'Morrisons Still Spring Water 500ml', kcal: 0, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'mor-drink-002', shopId: 'morrisons', slot: 'drink', category: 'juice', name: 'Tropicana Smooth Orange 250ml', brand: 'Tropicana', kcal: 98, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'mor-drink-003', shopId: 'morrisons', slot: 'drink', category: 'fizzy drink', name: 'Coca-Cola Zero 330ml', brand: 'Coca-Cola', kcal: 1, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'mor-drink-004', shopId: 'morrisons', slot: 'drink', category: 'fizzy drink', name: 'Dr Pepper 330ml', brand: 'Dr Pepper', kcal: 140, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'mor-drink-005', shopId: 'morrisons', slot: 'drink', category: 'fizzy drink', name: 'Sprite Zero 330ml', brand: 'Sprite', kcal: 2, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'mor-drink-006', shopId: 'morrisons', slot: 'drink', category: 'smoothie', name: 'Naked Blue Machine 300ml', brand: 'Naked', kcal: 162, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'mor-drink-007', shopId: 'morrisons', slot: 'drink', category: 'energy drink', name: 'Relentless Origin 500ml', brand: 'Relentless', kcal: 113, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'mor-drink-008', shopId: 'morrisons', slot: 'drink', category: 'hot drink', name: 'Morrisons Cafe Latte', kcal: 95, isVegetarian: true, isGlutenFree: true },
    { id: 'mor-drink-009', shopId: 'morrisons', slot: 'drink', category: 'iced coffee', name: 'Morrisons Iced Coffee', kcal: 105, isVegetarian: true, isGlutenFree: true },
  ],
};
