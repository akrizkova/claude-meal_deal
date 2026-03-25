import type { ShopDefinition } from '../types';

export const sainsburys: ShopDefinition = {
  id: 'sainsburys',
  displayName: "Sainsbury's",
  colour: 'bg-orange-500',
  textColour: 'text-orange-500',
  borderColour: 'border-orange-500',
  items: [
    // Mains
    { id: 'sb-main-001', shopId: 'sainsburys', slot: 'main', category: 'sandwich', name: "Sainsbury's Chicken & Bacon Club", kcal: 440 },
    { id: 'sb-main-002', shopId: 'sainsburys', slot: 'main', category: 'sandwich', name: "Mature Cheddar Ploughman's", kcal: 395, isVegetarian: true },
    { id: 'sb-main-003', shopId: 'sainsburys', slot: 'main', category: 'sandwich', name: 'Prawn Marie Rose', kcal: 350, isPescetarian: true },
    { id: 'sb-main-004', shopId: 'sainsburys', slot: 'main', category: 'wrap', name: 'Red Thai Chicken Wrap', kcal: 410 },
    { id: 'sb-main-005', shopId: 'sainsburys', slot: 'main', category: 'wrap', name: 'Vegan Katsu Wrap', kcal: 380, isVegan: true, isVegetarian: true, isPescetarian: true },
    { id: 'sb-main-006', shopId: 'sainsburys', slot: 'main', category: 'salad', name: 'Caesar Salad with Chicken', kcal: 300 },
    { id: 'sb-main-007', shopId: 'sainsburys', slot: 'main', category: 'salad', name: 'Super Green Salad', kcal: 190, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'sb-main-008', shopId: 'sainsburys', slot: 'main', category: 'pasta', name: 'Tomato & Mozzarella Pasta', kcal: 360, isVegetarian: true },
    { id: 'sb-main-009', shopId: 'sainsburys', slot: 'main', category: 'sushi', name: 'Sushi Selection Box', kcal: 310, isPescetarian: true },
    { id: 'sb-main-010', shopId: 'sainsburys', slot: 'main', category: 'soup', name: 'Lentil & Vegetable Soup', kcal: 140, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'sb-main-011', shopId: 'sainsburys', slot: 'main', category: 'soup', name: 'Chicken Noodle Soup', kcal: 170 },
    { id: 'sb-main-012', shopId: 'sainsburys', slot: 'main', category: 'hot food', name: 'Macaroni Cheese', kcal: 450, isVegetarian: true },
    { id: 'sb-main-013', shopId: 'sainsburys', slot: 'main', category: 'bowl', name: 'Poke Bowl with Salmon', kcal: 375, isPescetarian: true, isGlutenFree: true },

    // Snacks
    { id: 'sb-snack-001', shopId: 'sainsburys', slot: 'snack', category: 'crisps', name: "Lay's Lightly Salted", brand: "Lay's", kcal: 135, isVegan: true, isVegetarian: true, isPescetarian: true },
    { id: 'sb-snack-002', shopId: 'sainsburys', slot: 'snack', category: 'crisps', name: 'Tyrells Sea Salt & Cider Vinegar', brand: 'Tyrells', kcal: 150, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'sb-snack-003', shopId: 'sainsburys', slot: 'snack', category: 'crisps', name: "McCoy's Flame Grilled Steak", brand: "McCoy's", kcal: 145 },
    { id: 'sb-snack-004', shopId: 'sainsburys', slot: 'snack', category: 'savoury snack', name: 'Cheesy Wotsits', brand: 'Walkers', kcal: 100, isVegetarian: true },
    { id: 'sb-snack-005', shopId: 'sainsburys', slot: 'snack', category: 'chocolate', name: 'Twirl Bar', brand: 'Cadbury', kcal: 220, isVegetarian: true },
    { id: 'sb-snack-006', shopId: 'sainsburys', slot: 'snack', category: 'chocolate', name: 'Maltesers Share Bag', brand: 'Mars', kcal: 187, isVegetarian: true },
    { id: 'sb-snack-007', shopId: 'sainsburys', slot: 'snack', category: 'sweet snack', name: 'Jaffa Cakes 6-pack', brand: "McVitie's", kcal: 195, isVegetarian: true },
    { id: 'sb-snack-008', shopId: 'sainsburys', slot: 'snack', category: 'fruit', name: 'Grapes & Cheese Snack Pot', kcal: 185, isVegetarian: true, isGlutenFree: true },
    { id: 'sb-snack-009', shopId: 'sainsburys', slot: 'snack', category: 'cake/pastry', name: 'Belgian Chocolate Cookie', kcal: 265, isVegetarian: true },
    { id: 'sb-snack-010', shopId: 'sainsburys', slot: 'snack', category: 'nuts', name: "Sainsbury's Roasted Almonds 30g", kcal: 185, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'sb-snack-011', shopId: 'sainsburys', slot: 'snack', category: 'cereal bar', name: 'Nakd Cocoa Orange Bar', brand: 'Nakd', kcal: 130, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },

    // Drinks
    { id: 'sb-drink-001', shopId: 'sainsburys', slot: 'drink', category: 'water', name: 'Evian Still Water 500ml', brand: 'Evian', kcal: 0, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'sb-drink-002', shopId: 'sainsburys', slot: 'drink', category: 'juice', name: 'Copella Apple Juice 300ml', brand: 'Copella', kcal: 120, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'sb-drink-003', shopId: 'sainsburys', slot: 'drink', category: 'fizzy drink', name: 'Pepsi Max 330ml', brand: 'Pepsi', kcal: 1, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'sb-drink-004', shopId: 'sainsburys', slot: 'drink', category: 'fizzy drink', name: '7UP Free 330ml', brand: '7UP', kcal: 3, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'sb-drink-005', shopId: 'sainsburys', slot: 'drink', category: 'fizzy drink', name: 'Irn-Bru 330ml', brand: 'Irn-Bru', kcal: 138, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'sb-drink-006', shopId: 'sainsburys', slot: 'drink', category: 'smoothie', name: 'Innocent Strawberry & Banana 300ml', brand: 'Innocent', kcal: 144, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'sb-drink-007', shopId: 'sainsburys', slot: 'drink', category: 'energy drink', name: 'Lucozade Energy Original 380ml', brand: 'Lucozade', kcal: 266, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true },
    { id: 'sb-drink-008', shopId: 'sainsburys', slot: 'drink', category: 'hot drink', name: "Sainsbury's Flat White", kcal: 80, isVegetarian: true, isGlutenFree: true },
    { id: 'sb-drink-009', shopId: 'sainsburys', slot: 'drink', category: 'iced coffee', name: 'Emmi Caffè Latte 230ml', brand: 'Emmi', kcal: 115, isVegetarian: true, isGlutenFree: true },
  ],
};
