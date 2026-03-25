import type { ShopDefinition } from '../types';

export const boots: ShopDefinition = {
  id: 'boots',
  displayName: 'Boots',
  colour: 'bg-sky-700',
  textColour: 'text-sky-700',
  borderColour: 'border-sky-700',
  items: [
    // Mains
    { id: 'boots-main-001', shopId: 'boots', slot: 'main', category: 'sandwich', name: 'Chicken & Bacon Sandwich', kcal: 395 },
    { id: 'boots-main-002', shopId: 'boots', slot: 'main', category: 'sandwich', name: 'BLT Sandwich', kcal: 380 },
    { id: 'boots-main-003', shopId: 'boots', slot: 'main', category: 'sandwich', name: 'Egg & Cress Sandwich', kcal: 295, isVegetarian: true, isGlutenFree: false },
    { id: 'boots-main-004', shopId: 'boots', slot: 'main', category: 'sandwich', name: 'Mature Cheddar Ploughman\'s', kcal: 410, isVegetarian: true },
    { id: 'boots-main-005', shopId: 'boots', slot: 'main', category: 'wrap', name: 'Chicken Caesar Wrap', kcal: 400 },
    { id: 'boots-main-006', shopId: 'boots', slot: 'main', category: 'wrap', name: 'Sweet Potato & Falafel Wrap', kcal: 355, isVegan: true, isVegetarian: true, isPescetarian: true },
    { id: 'boots-main-007', shopId: 'boots', slot: 'main', category: 'salad', name: 'Chicken & Bacon Salad', kcal: 240 },
    { id: 'boots-main-008', shopId: 'boots', slot: 'main', category: 'salad', name: 'Super Greens Salad', kcal: 185, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'boots-main-009', shopId: 'boots', slot: 'main', category: 'pasta', name: 'Pesto Pasta Pot', kcal: 340, isVegetarian: true },
    { id: 'boots-main-010', shopId: 'boots', slot: 'main', category: 'sushi', name: 'Salmon Sushi Selection', kcal: 285, isPescetarian: true },
    { id: 'boots-main-011', shopId: 'boots', slot: 'main', category: 'soup', name: 'Tomato Soup', kcal: 150, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'boots-main-012', shopId: 'boots', slot: 'main', category: 'roll', name: 'Prawn Marie Rose Roll', kcal: 330, isPescetarian: true },

    // Snacks
    { id: 'boots-snack-001', shopId: 'boots', slot: 'snack', category: 'crisps', name: 'Walkers Ready Salted 32.5g', brand: 'Walkers', kcal: 172 },
    { id: 'boots-snack-002', shopId: 'boots', slot: 'snack', category: 'crisps', name: 'Popchips Sea Salt 23g', brand: 'Popchips', kcal: 95, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'boots-snack-003', shopId: 'boots', slot: 'snack', category: 'chocolate', name: 'Cadbury Freddo', brand: 'Cadbury', kcal: 95, isVegetarian: true },
    { id: 'boots-snack-004', shopId: 'boots', slot: 'snack', category: 'chocolate', name: 'Galaxy Smooth Milk 42g', brand: 'Galaxy', kcal: 220, isVegetarian: true },
    { id: 'boots-snack-005', shopId: 'boots', slot: 'snack', category: 'cereal bar', name: 'Nature Valley Oat & Honey', brand: 'Nature Valley', kcal: 187, isVegetarian: true },
    { id: 'boots-snack-006', shopId: 'boots', slot: 'snack', category: 'fruit', name: 'Apple & Grape Pot', kcal: 50, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'boots-snack-007', shopId: 'boots', slot: 'snack', category: 'cake/pastry', name: 'Boots Lemon Drizzle Slice', kcal: 265, isVegetarian: true },
    { id: 'boots-snack-008', shopId: 'boots', slot: 'snack', category: 'nuts', name: 'Almond & Cashew Mix 30g', kcal: 175, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },

    // Drinks
    { id: 'boots-drink-001', shopId: 'boots', slot: 'drink', category: 'water', name: 'Buxton Still Water 500ml', brand: 'Buxton', kcal: 0, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'boots-drink-002', shopId: 'boots', slot: 'drink', category: 'juice', name: 'Tropicana Orange Juice 250ml', brand: 'Tropicana', kcal: 98, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'boots-drink-003', shopId: 'boots', slot: 'drink', category: 'fizzy drink', name: 'Coca-Cola Original 330ml', brand: 'Coca-Cola', kcal: 139, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'boots-drink-004', shopId: 'boots', slot: 'drink', category: 'fizzy drink', name: 'Pepsi Max 330ml', brand: 'Pepsi', kcal: 1, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'boots-drink-005', shopId: 'boots', slot: 'drink', category: 'smoothie', name: 'Innocent Berry Smoothie 300ml', brand: 'Innocent', kcal: 135, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'boots-drink-006', shopId: 'boots', slot: 'drink', category: 'energy drink', name: 'Lucozade Sport Orange 500ml', brand: 'Lucozade', kcal: 140, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'boots-drink-007', shopId: 'boots', slot: 'drink', category: 'hot drink', name: 'Boots Café Americano', kcal: 5, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
  ],
};
