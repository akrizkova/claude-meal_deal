import type { ShopDefinition } from '../types';

export const tesco: ShopDefinition = {
  id: 'tesco',
  displayName: 'Tesco',
  colour: 'bg-blue-600',
  textColour: 'text-blue-600',
  borderColour: 'border-blue-600',
  items: [
    // Mains
    { id: 'tesco-main-001', shopId: 'tesco', slot: 'main', category: 'sandwich', name: 'Tesco Finest BLT', kcal: 420 },
    { id: 'tesco-main-002', shopId: 'tesco', slot: 'main', category: 'sandwich', name: 'Egg & Cress Sandwich', kcal: 310, isVegetarian: true },
    { id: 'tesco-main-003', shopId: 'tesco', slot: 'main', category: 'sandwich', name: 'Chicken & Stuffing Sandwich', kcal: 385 },
    { id: 'tesco-main-004', shopId: 'tesco', slot: 'main', category: 'wrap', name: 'Chicken Caesar Wrap', kcal: 390 },
    { id: 'tesco-main-005', shopId: 'tesco', slot: 'main', category: 'wrap', name: 'Falafel & Houmous Wrap', kcal: 350, isVegan: true, isVegetarian: true, isPescetarian: true },
    { id: 'tesco-main-006', shopId: 'tesco', slot: 'main', category: 'salad', name: 'Greek Salad Bowl', kcal: 210, isVegetarian: true, isGlutenFree: true },
    { id: 'tesco-main-007', shopId: 'tesco', slot: 'main', category: 'salad', name: 'Tuna Nicoise Salad', kcal: 280, isPescetarian: true, isGlutenFree: true },
    { id: 'tesco-main-008', shopId: 'tesco', slot: 'main', category: 'pasta', name: 'Pesto Pasta Pot', kcal: 350, isVegetarian: true },
    { id: 'tesco-main-009', shopId: 'tesco', slot: 'main', category: 'sushi', name: 'Salmon Nigiri Selection', kcal: 290, isPescetarian: true, isGlutenFree: true },
    { id: 'tesco-main-010', shopId: 'tesco', slot: 'main', category: 'sushi', name: 'Mixed Sushi Box', kcal: 340, isPescetarian: true },
    { id: 'tesco-main-011', shopId: 'tesco', slot: 'main', category: 'soup', name: 'Tomato & Basil Soup', kcal: 160, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'tesco-main-012', shopId: 'tesco', slot: 'main', category: 'hot food', name: 'Mac & Cheese Pot', kcal: 420, isVegetarian: true },

    // Snacks
    { id: 'tesco-snack-001', shopId: 'tesco', slot: 'snack', category: 'crisps', name: 'Walkers Ready Salted', brand: 'Walkers', kcal: 130, isVegan: true, isVegetarian: true, isPescetarian: true },
    { id: 'tesco-snack-002', shopId: 'tesco', slot: 'snack', category: 'crisps', name: 'Walkers Salt & Vinegar', brand: 'Walkers', kcal: 128, isVegetarian: true },
    { id: 'tesco-snack-003', shopId: 'tesco', slot: 'snack', category: 'crisps', name: 'Pringles Original 40g', brand: 'Pringles', kcal: 198, isVegetarian: true },
    { id: 'tesco-snack-004', shopId: 'tesco', slot: 'snack', category: 'savoury snack', name: 'Mini Cheddars Original', brand: "McVitie's", kcal: 175, isVegetarian: true },
    { id: 'tesco-snack-005', shopId: 'tesco', slot: 'snack', category: 'chocolate', name: 'KitKat 4-Finger', brand: 'Nestlé', kcal: 207, isVegetarian: true },
    { id: 'tesco-snack-006', shopId: 'tesco', slot: 'snack', category: 'chocolate', name: 'Cadbury Dairy Milk Bar', brand: 'Cadbury', kcal: 220, isVegetarian: true },
    { id: 'tesco-snack-007', shopId: 'tesco', slot: 'snack', category: 'sweet snack', name: 'Haribo Starmix 80g', brand: 'Haribo', kcal: 272, isVegetarian: true },
    { id: 'tesco-snack-008', shopId: 'tesco', slot: 'snack', category: 'fruit', name: 'Fruit Salad Pot', kcal: 65, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'tesco-snack-009', shopId: 'tesco', slot: 'snack', category: 'cake/pastry', name: 'Tesco Yum Yum', kcal: 280, isVegetarian: true },
    { id: 'tesco-snack-010', shopId: 'tesco', slot: 'snack', category: 'cereal bar', name: 'Nature Valley Oat & Honey', brand: 'Nature Valley', kcal: 187, isVegetarian: true },
    { id: 'tesco-snack-011', shopId: 'tesco', slot: 'snack', category: 'nuts', name: 'Tesco Mixed Nuts 30g', kcal: 190, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },

    // Drinks
    { id: 'tesco-drink-001', shopId: 'tesco', slot: 'drink', category: 'water', name: 'Highland Spring Still 500ml', kcal: 0, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'tesco-drink-002', shopId: 'tesco', slot: 'drink', category: 'juice', name: 'Tropicana Orange Juice 300ml', brand: 'Tropicana', kcal: 117, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'tesco-drink-003', shopId: 'tesco', slot: 'drink', category: 'fizzy drink', name: 'Coca-Cola Original 330ml', brand: 'Coca-Cola', kcal: 139, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'tesco-drink-004', shopId: 'tesco', slot: 'drink', category: 'fizzy drink', name: 'Diet Coke 330ml', brand: 'Coca-Cola', kcal: 1, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'tesco-drink-005', shopId: 'tesco', slot: 'drink', category: 'fizzy drink', name: 'Fanta Orange 330ml', brand: 'Fanta', kcal: 63, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'tesco-drink-006', shopId: 'tesco', slot: 'drink', category: 'smoothie', name: 'Innocent Mango & Passion Fruit 300ml', brand: 'Innocent', kcal: 156, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'tesco-drink-007', shopId: 'tesco', slot: 'drink', category: 'energy drink', name: 'Monster Energy Original 500ml', brand: 'Monster', kcal: 225, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'tesco-drink-008', shopId: 'tesco', slot: 'drink', category: 'hot drink', name: 'Tesco Americano', kcal: 5, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'tesco-drink-009', shopId: 'tesco', slot: 'drink', category: 'iced coffee', name: 'Tesco Cold Brew Coffee', kcal: 45, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
  ],
};
