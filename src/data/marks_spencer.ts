import type { ShopDefinition } from '../types';

export const marks_spencer: ShopDefinition = {
  id: 'marks_spencer',
  displayName: 'M&S',
  colour: 'bg-black',
  textColour: 'text-gray-900',
  borderColour: 'border-gray-900',
  mealDealPrice: 500, // £5.00
  items: [
    { id: 'ms-main-001', shopId: 'marks_spencer', slot: 'main', category: 'sandwich', name: 'M&S Gastropub Coronation Chicken', kcal: 465, price: 450 },
    { id: 'ms-main-002', shopId: 'marks_spencer', slot: 'main', category: 'sandwich', name: 'Smoked Scottish Salmon & Cream Cheese', kcal: 390, price: 490, isPescetarian: true, isNutFree: true },
    { id: 'ms-main-003', shopId: 'marks_spencer', slot: 'main', category: 'sandwich', name: 'Wiltshire Cured Ham & Mustard', kcal: 380, price: 420 },
    { id: 'ms-main-004', shopId: 'marks_spencer', slot: 'main', category: 'sandwich', name: 'Mature Cheddar & Pickle', kcal: 420, price: 410, isVegetarian: true, isNutFree: true },
    { id: 'ms-main-005', shopId: 'marks_spencer', slot: 'main', category: 'wrap', name: 'M&S Hoisin Duck Wrap', kcal: 445, price: 460 },
    { id: 'ms-main-006', shopId: 'marks_spencer', slot: 'main', category: 'wrap', name: 'Falafel & Houmous Wrap', kcal: 360, price: 420, isVegan: true, isVegetarian: true, isPescetarian: true, isDairyFree: true },
    { id: 'ms-main-007', shopId: 'marks_spencer', slot: 'main', category: 'salad', name: 'Chicken Caesar Salad', kcal: 295, price: 450 },
    { id: 'ms-main-008', shopId: 'marks_spencer', slot: 'main', category: 'salad', name: 'Chargrilled Salmon Nicoise', kcal: 310, price: 490, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isNutFree: true },
    { id: 'ms-main-009', shopId: 'marks_spencer', slot: 'main', category: 'bowl', name: 'Chicken & Rice Bowl', kcal: 385, price: 475, isGlutenFree: true, isDairyFree: true, isNutFree: true },
    { id: 'ms-main-010', shopId: 'marks_spencer', slot: 'main', category: 'bowl', name: 'Falafel & Tabbouleh Bowl', kcal: 340, price: 450, isVegan: true, isVegetarian: true, isPescetarian: true, isDairyFree: true, isNutFree: true },
    { id: 'ms-main-011', shopId: 'marks_spencer', slot: 'main', category: 'sushi', name: 'M&S Sushi Selection', kcal: 320, price: 520, isPescetarian: true, isDairyFree: true },
    { id: 'ms-main-012', shopId: 'marks_spencer', slot: 'main', category: 'soup', name: 'Roasted Tomato & Basil Soup', kcal: 145, price: 299, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isNutFree: true },

    { id: 'ms-snack-001', shopId: 'marks_spencer', slot: 'snack', category: 'crisps', name: 'M&S Sea Salt Crisps', kcal: 145, price: 130, isVegan: true, isVegetarian: true, isPescetarian: true, isDairyFree: true, isNutFree: true },
    { id: 'ms-snack-002', shopId: 'marks_spencer', slot: 'snack', category: 'crisps', name: 'M&S Prawn Cocktail Crisps', kcal: 138, price: 130, isPescetarian: true, isNutFree: true },
    { id: 'ms-snack-003', shopId: 'marks_spencer', slot: 'snack', category: 'chocolate', name: 'M&S Belgian Milk Chocolate Bar', kcal: 235, price: 175, isVegetarian: true },
    { id: 'ms-snack-004', shopId: 'marks_spencer', slot: 'snack', category: 'chocolate', name: 'M&S Dark Chocolate & Ginger', kcal: 195, price: 175, isVegan: true, isVegetarian: true, isPescetarian: true, isDairyFree: true },
    { id: 'ms-snack-005', shopId: 'marks_spencer', slot: 'snack', category: 'cake/pastry', name: 'M&S Colin the Caterpillar Mini Roll', kcal: 145, price: 150, isVegetarian: true, isNutFree: true },
    { id: 'ms-snack-006', shopId: 'marks_spencer', slot: 'snack', category: 'fruit', name: 'M&S Summer Berry Pot', kcal: 60, price: 199, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isNutFree: true },
    { id: 'ms-snack-007', shopId: 'marks_spencer', slot: 'snack', category: 'nuts', name: 'M&S Honey Roast Cashews 40g', kcal: 210, price: 175, isVegetarian: true, isGlutenFree: true, isDairyFree: true },
    { id: 'ms-snack-008', shopId: 'marks_spencer', slot: 'snack', category: 'cereal bar', name: 'M&S High Protein Bar Chocolate', kcal: 185, price: 165, isVegetarian: true },

    { id: 'ms-drink-001', shopId: 'marks_spencer', slot: 'drink', category: 'water', name: 'M&S Still Water 500ml', kcal: 0, price: 90, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isNutFree: true },
    { id: 'ms-drink-002', shopId: 'marks_spencer', slot: 'drink', category: 'juice', name: 'M&S Squeezed Orange Juice 250ml', kcal: 105, price: 199, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isNutFree: true },
    { id: 'ms-drink-003', shopId: 'marks_spencer', slot: 'drink', category: 'fizzy drink', name: 'M&S Sparkling Elderflower', kcal: 55, price: 175, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isNutFree: true },
    { id: 'ms-drink-004', shopId: 'marks_spencer', slot: 'drink', category: 'fizzy drink', name: 'Coca-Cola Original 330ml', brand: 'Coca-Cola', kcal: 139, price: 130, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isNutFree: true },
    { id: 'ms-drink-005', shopId: 'marks_spencer', slot: 'drink', category: 'smoothie', name: 'M&S Green Smoothie', kcal: 120, price: 299, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isNutFree: true },
    { id: 'ms-drink-006', shopId: 'marks_spencer', slot: 'drink', category: 'iced coffee', name: 'M&S Cold Brew Coffee', kcal: 50, price: 249, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isNutFree: true },
    { id: 'ms-drink-007', shopId: 'marks_spencer', slot: 'drink', category: 'hot drink', name: 'M&S Café Flat White', kcal: 75, price: 329, isVegetarian: true, isGlutenFree: true, isNutFree: true },
    { id: 'ms-drink-008', shopId: 'marks_spencer', slot: 'drink', category: 'energy drink', name: 'Red Bull Original 250ml', brand: 'Red Bull', kcal: 113, price: 165, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isNutFree: true },
  ],
};
