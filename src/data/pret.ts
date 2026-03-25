import type { ShopDefinition } from '../types';

export const pret: ShopDefinition = {
  id: 'pret',
  displayName: 'Pret',
  colour: 'bg-red-700',
  textColour: 'text-red-700',
  borderColour: 'border-red-700',
  items: [
    // Mains
    { id: 'pret-main-001', shopId: 'pret', slot: 'main', category: 'sandwich', name: 'Pret Classic Crayfish & Rocket', kcal: 370, isPescetarian: true },
    { id: 'pret-main-002', shopId: 'pret', slot: 'main', category: 'sandwich', name: 'Ham & Pickle Baguette', kcal: 455 },
    { id: 'pret-main-003', shopId: 'pret', slot: 'main', category: 'sandwich', name: 'Mature Cheddar & Pickle', kcal: 420, isVegetarian: true },
    { id: 'pret-main-004', shopId: 'pret', slot: 'main', category: 'wrap', name: 'Chicken Caesar & Bacon Wrap', kcal: 445 },
    { id: 'pret-main-005', shopId: 'pret', slot: 'main', category: 'wrap', name: 'Veggie Falafel & Halloumi Wrap', kcal: 395, isVegetarian: true },
    { id: 'pret-main-006', shopId: 'pret', slot: 'main', category: 'wrap', name: 'Vegan Chipotle Black Bean Wrap', kcal: 370, isVegan: true, isVegetarian: true, isPescetarian: true },
    { id: 'pret-main-007', shopId: 'pret', slot: 'main', category: 'salad', name: 'Super Greens & Feta Salad', kcal: 235, isVegetarian: true, isGlutenFree: true },
    { id: 'pret-main-008', shopId: 'pret', slot: 'main', category: 'salad', name: 'Chicken Avocado & Herb Salad', kcal: 265, isGlutenFree: true },
    { id: 'pret-main-009', shopId: 'pret', slot: 'main', category: 'bowl', name: 'Chicken & Avocado Protein Bowl', kcal: 395, isGlutenFree: true },
    { id: 'pret-main-010', shopId: 'pret', slot: 'main', category: 'bowl', name: 'Vegan Lentil & Tahini Bowl', kcal: 360, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'pret-main-011', shopId: 'pret', slot: 'main', category: 'soup', name: 'Chicken & Vegetable Soup', kcal: 140, isGlutenFree: true },
    { id: 'pret-main-012', shopId: 'pret', slot: 'main', category: 'soup', name: 'Butternut Squash & Ginger Soup', kcal: 125, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },

    // Snacks
    { id: 'pret-snack-001', shopId: 'pret', slot: 'snack', category: 'cake/pastry', name: 'Pret Almond Croissant', kcal: 430, isVegetarian: true },
    { id: 'pret-snack-002', shopId: 'pret', slot: 'snack', category: 'cake/pastry', name: 'Vegan Brownie', kcal: 385, isVegan: true, isVegetarian: true, isPescetarian: true },
    { id: 'pret-snack-003', shopId: 'pret', slot: 'snack', category: 'cake/pastry', name: 'Chocolate Chip Cookie', kcal: 295, isVegetarian: true },
    { id: 'pret-snack-004', shopId: 'pret', slot: 'snack', category: 'fruit', name: 'Pret Fruit Pot', kcal: 70, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'pret-snack-005', shopId: 'pret', slot: 'snack', category: 'nuts', name: 'Pret Lemon Cashews 40g', kcal: 220, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'pret-snack-006', shopId: 'pret', slot: 'snack', category: 'cereal bar', name: 'Pret Granola Bar', kcal: 240, isVegan: true, isVegetarian: true, isPescetarian: true },
    { id: 'pret-snack-007', shopId: 'pret', slot: 'snack', category: 'chocolate', name: 'Pret Dark Chocolate Bar', kcal: 210, isVegan: true, isVegetarian: true, isPescetarian: true },
    { id: 'pret-snack-008', shopId: 'pret', slot: 'snack', category: 'crisps', name: 'Pret Sea Salt Popcorn', kcal: 115, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },

    // Drinks
    { id: 'pret-drink-001', shopId: 'pret', slot: 'drink', category: 'hot drink', name: 'Pret Flat White', kcal: 90, isVegetarian: true, isGlutenFree: true },
    { id: 'pret-drink-002', shopId: 'pret', slot: 'drink', category: 'hot drink', name: 'Pret Matcha Latte', kcal: 175, isVegetarian: true, isGlutenFree: true },
    { id: 'pret-drink-003', shopId: 'pret', slot: 'drink', category: 'iced coffee', name: 'Pret Iced Latte', kcal: 120, isVegetarian: true, isGlutenFree: true },
    { id: 'pret-drink-004', shopId: 'pret', slot: 'drink', category: 'smoothie', name: 'Pret Tropical Smoothie', kcal: 185, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'pret-drink-005', shopId: 'pret', slot: 'drink', category: 'juice', name: 'Pret Pressed Orange Juice', kcal: 110, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'pret-drink-006', shopId: 'pret', slot: 'drink', category: 'water', name: 'Pret Still Water 500ml', kcal: 0, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'pret-drink-007', shopId: 'pret', slot: 'drink', category: 'fizzy drink', name: 'Pret Sparkling Mint Lemonade', kcal: 80, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'pret-drink-008', shopId: 'pret', slot: 'drink', category: 'energy drink', name: 'Red Bull Original 250ml', brand: 'Red Bull', kcal: 113, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
  ],
};
