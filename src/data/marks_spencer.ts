import type { ShopDefinition } from '../types';

export const marks_spencer: ShopDefinition = {
  id: 'marks_spencer',
  displayName: 'M&S',
  colour: 'bg-black',
  textColour: 'text-gray-900',
  borderColour: 'border-gray-900',
  items: [
    // Mains
    { id: 'ms-main-001', shopId: 'marks_spencer', slot: 'main', category: 'sandwich', name: 'M&S Gastropub Coronation Chicken', kcal: 465 },
    { id: 'ms-main-002', shopId: 'marks_spencer', slot: 'main', category: 'sandwich', name: 'Smoked Scottish Salmon & Cream Cheese', kcal: 390, isPescetarian: true },
    { id: 'ms-main-003', shopId: 'marks_spencer', slot: 'main', category: 'sandwich', name: 'Wiltshire Cured Ham & Mustard', kcal: 380 },
    { id: 'ms-main-004', shopId: 'marks_spencer', slot: 'main', category: 'sandwich', name: 'Mature Cheddar & Pickle', kcal: 420, isVegetarian: true },
    { id: 'ms-main-005', shopId: 'marks_spencer', slot: 'main', category: 'wrap', name: 'M&S Hoisin Duck Wrap', kcal: 445 },
    { id: 'ms-main-006', shopId: 'marks_spencer', slot: 'main', category: 'wrap', name: 'Falafel & Houmous Wrap', kcal: 360, isVegan: true, isVegetarian: true, isPescetarian: true },
    { id: 'ms-main-007', shopId: 'marks_spencer', slot: 'main', category: 'salad', name: 'Chicken Caesar Salad', kcal: 295 },
    { id: 'ms-main-008', shopId: 'marks_spencer', slot: 'main', category: 'salad', name: 'Chargrilled Salmon Nicoise', kcal: 310, isPescetarian: true, isGlutenFree: true },
    { id: 'ms-main-009', shopId: 'marks_spencer', slot: 'main', category: 'bowl', name: 'Chicken & Rice Bowl', kcal: 385, isGlutenFree: true },
    { id: 'ms-main-010', shopId: 'marks_spencer', slot: 'main', category: 'bowl', name: 'Falafel & Tabbouleh Bowl', kcal: 340, isVegan: true, isVegetarian: true, isPescetarian: true },
    { id: 'ms-main-011', shopId: 'marks_spencer', slot: 'main', category: 'sushi', name: 'M&S Sushi Selection', kcal: 320, isPescetarian: true },
    { id: 'ms-main-012', shopId: 'marks_spencer', slot: 'main', category: 'soup', name: 'Roasted Tomato & Basil Soup', kcal: 145, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },

    // Snacks
    { id: 'ms-snack-001', shopId: 'marks_spencer', slot: 'snack', category: 'crisps', name: 'M&S Sea Salt Crisps', kcal: 145, isVegan: true, isVegetarian: true, isPescetarian: true },
    { id: 'ms-snack-002', shopId: 'marks_spencer', slot: 'snack', category: 'crisps', name: 'M&S Prawn Cocktail Crisps', kcal: 138, isPescetarian: true },
    { id: 'ms-snack-003', shopId: 'marks_spencer', slot: 'snack', category: 'chocolate', name: 'M&S Belgian Milk Chocolate Bar', kcal: 235, isVegetarian: true },
    { id: 'ms-snack-004', shopId: 'marks_spencer', slot: 'snack', category: 'chocolate', name: 'M&S Dark Chocolate & Ginger', kcal: 195, isVegan: true, isVegetarian: true, isPescetarian: true },
    { id: 'ms-snack-005', shopId: 'marks_spencer', slot: 'snack', category: 'cake/pastry', name: 'M&S Colin the Caterpillar Mini Roll', kcal: 145, isVegetarian: true },
    { id: 'ms-snack-006', shopId: 'marks_spencer', slot: 'snack', category: 'fruit', name: 'M&S Summer Berry Pot', kcal: 60, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'ms-snack-007', shopId: 'marks_spencer', slot: 'snack', category: 'nuts', name: 'M&S Honey Roast Cashews 40g', kcal: 210, isVegetarian: true, isGlutenFree: true },
    { id: 'ms-snack-008', shopId: 'marks_spencer', slot: 'snack', category: 'cereal bar', name: 'M&S High Protein Bar Chocolate', kcal: 185, isVegetarian: true },

    // Drinks
    { id: 'ms-drink-001', shopId: 'marks_spencer', slot: 'drink', category: 'water', name: 'M&S Still Water 500ml', kcal: 0, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'ms-drink-002', shopId: 'marks_spencer', slot: 'drink', category: 'juice', name: 'M&S Squeezed Orange Juice 250ml', kcal: 105, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'ms-drink-003', shopId: 'marks_spencer', slot: 'drink', category: 'fizzy drink', name: 'M&S Sparkling Elderflower', kcal: 55, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'ms-drink-004', shopId: 'marks_spencer', slot: 'drink', category: 'fizzy drink', name: 'Coca-Cola Original 330ml', brand: 'Coca-Cola', kcal: 139, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'ms-drink-005', shopId: 'marks_spencer', slot: 'drink', category: 'smoothie', name: 'M&S Green Smoothie', kcal: 120, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'ms-drink-006', shopId: 'marks_spencer', slot: 'drink', category: 'iced coffee', name: 'M&S Cold Brew Coffee', kcal: 50, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'ms-drink-007', shopId: 'marks_spencer', slot: 'drink', category: 'hot drink', name: 'M&S Café Flat White', kcal: 75, isVegetarian: true, isGlutenFree: true },
    { id: 'ms-drink-008', shopId: 'marks_spencer', slot: 'drink', category: 'energy drink', name: 'Red Bull Original 250ml', brand: 'Red Bull', kcal: 113, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
  ],
};
