import type { ShopDefinition } from '../types';

export const coop: ShopDefinition = {
  id: 'coop',
  displayName: 'Co-op',
  colour: 'bg-teal-600',
  textColour: 'text-teal-600',
  borderColour: 'border-teal-600',
  items: [
    // Mains
    { id: 'coop-main-001', shopId: 'coop', slot: 'main', category: 'sandwich', name: 'Co-op Irresistible Coronation Chicken', kcal: 415 },
    { id: 'coop-main-002', shopId: 'coop', slot: 'main', category: 'sandwich', name: 'Tuna Mayonnaise & Sweetcorn', kcal: 360, isPescetarian: true },
    { id: 'coop-main-003', shopId: 'coop', slot: 'main', category: 'sandwich', name: 'Brie & Cranberry', kcal: 400, isVegetarian: true },
    { id: 'coop-main-004', shopId: 'coop', slot: 'main', category: 'wrap', name: 'Chicken Tikka Wrap', kcal: 430 },
    { id: 'coop-main-005', shopId: 'coop', slot: 'main', category: 'wrap', name: 'Vegan Club Wrap', kcal: 340, isVegan: true, isVegetarian: true, isPescetarian: true },
    { id: 'coop-main-006', shopId: 'coop', slot: 'main', category: 'salad', name: 'Nicoise Salad', kcal: 260, isPescetarian: true, isGlutenFree: true },
    { id: 'coop-main-007', shopId: 'coop', slot: 'main', category: 'salad', name: 'Edamame & Quinoa Salad', kcal: 210, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'coop-main-008', shopId: 'coop', slot: 'main', category: 'pasta', name: 'Tomato & Basil Pasta Salad', kcal: 330, isVegan: true, isVegetarian: true, isPescetarian: true },
    { id: 'coop-main-009', shopId: 'coop', slot: 'main', category: 'baguette', name: 'Ham & Cheddar Baguette', kcal: 460 },
    { id: 'coop-main-010', shopId: 'coop', slot: 'main', category: 'soup', name: 'Leek & Potato Soup', kcal: 130, isVegetarian: true, isGlutenFree: true },
    { id: 'coop-main-011', shopId: 'coop', slot: 'main', category: 'roll', name: 'Smoked Salmon & Cream Cheese Roll', kcal: 355, isPescetarian: true },
    { id: 'coop-main-012', shopId: 'coop', slot: 'main', category: 'hot food', name: 'Co-op Mac & Cheese Pot', kcal: 440, isVegetarian: true },

    // Snacks
    { id: 'coop-snack-001', shopId: 'coop', slot: 'snack', category: 'crisps', name: 'Tyrells Lightly Sea Salted', brand: 'Tyrells', kcal: 148, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'coop-snack-002', shopId: 'coop', slot: 'snack', category: 'crisps', name: 'Walkers Cheese & Onion', brand: 'Walkers', kcal: 130, isVegetarian: true },
    { id: 'coop-snack-003', shopId: 'coop', slot: 'snack', category: 'chocolate', name: 'Cadbury Wispa', brand: 'Cadbury', kcal: 185, isVegetarian: true },
    { id: 'coop-snack-004', shopId: 'coop', slot: 'snack', category: 'chocolate', name: 'Lindt Milk Chocolate 35g', brand: 'Lindt', kcal: 194, isVegetarian: true },
    { id: 'coop-snack-005', shopId: 'coop', slot: 'snack', category: 'cereal bar', name: 'Trek Protein Bar Cocoa Chaos', brand: 'Trek', kcal: 195, isVegan: true, isVegetarian: true, isPescetarian: true },
    { id: 'coop-snack-006', shopId: 'coop', slot: 'snack', category: 'fruit', name: 'Melon & Grape Fruit Pot', kcal: 55, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'coop-snack-007', shopId: 'coop', slot: 'snack', category: 'cake/pastry', name: 'Co-op Chocolate Brownie', kcal: 290, isVegetarian: true },
    { id: 'coop-snack-008', shopId: 'coop', slot: 'snack', category: 'nuts', name: 'Co-op Roasted Mixed Nuts 35g', kcal: 200, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },

    // Drinks
    { id: 'coop-drink-001', shopId: 'coop', slot: 'drink', category: 'water', name: 'Highland Spring Still 500ml', kcal: 0, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'coop-drink-002', shopId: 'coop', slot: 'drink', category: 'juice', name: 'Eager Apple Juice 300ml', brand: 'Eager', kcal: 114, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'coop-drink-003', shopId: 'coop', slot: 'drink', category: 'fizzy drink', name: 'Coca-Cola Zero 330ml', brand: 'Coca-Cola', kcal: 1, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'coop-drink-004', shopId: 'coop', slot: 'drink', category: 'fizzy drink', name: 'Fanta Fruit Twist 330ml', brand: 'Fanta', kcal: 58, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'coop-drink-005', shopId: 'coop', slot: 'drink', category: 'smoothie', name: 'Innocent Mango Smoothie 300ml', brand: 'Innocent', kcal: 144, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'coop-drink-006', shopId: 'coop', slot: 'drink', category: 'energy drink', name: 'Monster Energy Zero 500ml', brand: 'Monster', kcal: 10, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'coop-drink-007', shopId: 'coop', slot: 'drink', category: 'hot drink', name: 'Co-op Café Latte', kcal: 90, isVegetarian: true, isGlutenFree: true },
    { id: 'coop-drink-008', shopId: 'coop', slot: 'drink', category: 'iced coffee', name: 'Emmi Caffè Latte 230ml', brand: 'Emmi', kcal: 115, isVegetarian: true, isGlutenFree: true },
  ],
};
