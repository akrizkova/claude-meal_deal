import type { ShopDefinition } from '../types';

export const morrisons: ShopDefinition = {
  id: 'morrisons',
  displayName: 'Morrisons',
  colour: 'bg-yellow-500',
  textColour: 'text-yellow-600',
  borderColour: 'border-yellow-500',
  mealDealPrice: 375, // £3.75
  items: [
    // === MAINS ===
    // Sandwiches
    { id: 'mor-main-001', shopId: 'morrisons', slot: 'main', category: 'sandwich', name: 'Morrisons Cheese & Onion Sandwich', kcal: 380, price: 170, isVegetarian: true, isPescetarian: true, isNutFree: true, isHalal: true },
    { id: 'mor-main-002', shopId: 'morrisons', slot: 'main', category: 'sandwich', name: 'Morrisons Egg & Cress Sandwich', kcal: 290, price: 170, isVegetarian: true, isPescetarian: true, isNutFree: true, isHalal: true },
    { id: 'mor-main-003', shopId: 'morrisons', slot: 'main', category: 'sandwich', name: 'Morrisons Roast Chicken & Bacon Sandwich', kcal: 395, price: 300, isNutFree: true, isHighProtein: true },
    { id: 'mor-main-004', shopId: 'morrisons', slot: 'main', category: 'sandwich', name: 'Morrisons BLT Sandwich', kcal: 370, price: 300, isNutFree: true },
    { id: 'mor-main-005', shopId: 'morrisons', slot: 'main', category: 'sandwich', name: 'Morrisons Tuna & Sweetcorn Sandwich', kcal: 350, price: 225, isPescetarian: true, isNutFree: true, isHighProtein: true, isHalal: true },
    { id: 'mor-main-006', shopId: 'morrisons', slot: 'main', category: 'sandwich', name: 'Morrisons Tuna Mayo Sandwich', kcal: 330, price: 170, isPescetarian: true, isNutFree: true, isHighProtein: true, isHalal: true },
    { id: 'mor-main-007', shopId: 'morrisons', slot: 'main', category: 'sandwich', name: 'Morrisons Mature Cheese & Pickle Sandwich', kcal: 400, price: 220, isVegetarian: true, isPescetarian: true, isNutFree: true, isHalal: true },
    { id: 'mor-main-008', shopId: 'morrisons', slot: 'main', category: 'sandwich', name: 'Morrisons Prawn Mayonnaise Sandwich', kcal: 320, price: 285, isPescetarian: true, isNutFree: true, isHighProtein: true, isHalal: true },
    { id: 'mor-main-009', shopId: 'morrisons', slot: 'main', category: 'sandwich', name: 'Morrisons Coronation Chicken Sandwich', kcal: 410, price: 275, isNutFree: true, isHighProtein: true },
    { id: 'mor-main-010', shopId: 'morrisons', slot: 'main', category: 'sandwich', name: 'Morrisons Simply Cheddar Sandwich', kcal: 360, price: 160, isVegetarian: true, isPescetarian: true, isNutFree: true, isHalal: true },
    { id: 'mor-main-011', shopId: 'morrisons', slot: 'main', category: 'sandwich', name: 'Morrisons Egg Mayo & Bacon Sandwich', kcal: 350, price: 285, isNutFree: true },
    { id: 'mor-main-012', shopId: 'morrisons', slot: 'main', category: 'sandwich', name: 'Morrisons Ham & Cheese Sandwich', kcal: 380, price: 300, isNutFree: true, isHighProtein: true },
    // Wraps
    { id: 'mor-main-013', shopId: 'morrisons', slot: 'main', category: 'wrap', name: 'Morrisons Chicken Caesar Wrap', kcal: 440, price: 330, isNutFree: true, isHighProtein: true },
    { id: 'mor-main-014', shopId: 'morrisons', slot: 'main', category: 'wrap', name: 'Morrisons Mexican Bean Wrap', kcal: 375, price: 325, isVegan: true, isVegetarian: true, isPescetarian: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isHalal: true },
    { id: 'mor-main-015', shopId: 'morrisons', slot: 'main', category: 'wrap', name: 'Morrisons Sweet Chilli Chicken Wrap', kcal: 420, price: 285, isNutFree: true, isHighProtein: true },
    { id: 'mor-main-016', shopId: 'morrisons', slot: 'main', category: 'wrap', name: 'Morrisons Southern Fried Chicken Wrap', kcal: 450, price: 285, isNutFree: true, isHighProtein: true },
    { id: 'mor-main-017', shopId: 'morrisons', slot: 'main', category: 'wrap', name: 'Morrisons Chicken Fajita Wrap', kcal: 430, price: 325, isNutFree: true, isHighProtein: true },
    // Pasta
    { id: 'mor-main-018', shopId: 'morrisons', slot: 'main', category: 'pasta', name: 'Morrisons Tomato & Basil Chicken Pasta 300g', kcal: 330, price: 310, isNutFree: true, isHighProtein: true },
    { id: 'mor-main-019', shopId: 'morrisons', slot: 'main', category: 'pasta', name: 'Morrisons Cheese & Tomato Pasta Pot 300g', kcal: 295, price: 200, isVegetarian: true, isPescetarian: true, isNutFree: true, isHalal: true },
    { id: 'mor-main-020', shopId: 'morrisons', slot: 'main', category: 'pasta', name: 'Morrisons Spicy Chicken Pasta Pot 300g', kcal: 310, price: 200, isNutFree: true, isHighProtein: true },
    { id: 'mor-main-021', shopId: 'morrisons', slot: 'main', category: 'pasta', name: 'Morrisons Chicken & Bacon Pasta 300g', kcal: 340, price: 310, isNutFree: true, isHighProtein: true },
    // Rolls / Sub rolls
    { id: 'mor-main-022', shopId: 'morrisons', slot: 'main', category: 'roll', name: 'Morrisons Ham & Cheese Sub Roll', kcal: 420, price: 330, isNutFree: true, isHighProtein: true },
    { id: 'mor-main-023', shopId: 'morrisons', slot: 'main', category: 'roll', name: 'Morrisons Tuna Crunch Sub Roll', kcal: 380, price: 330, isPescetarian: true, isNutFree: true, isHighProtein: true, isHalal: true },
    { id: 'mor-main-024', shopId: 'morrisons', slot: 'main', category: 'roll', name: 'Morrisons Cheese & Tomato Roll', kcal: 360, price: 330, isVegetarian: true, isPescetarian: true, isNutFree: true, isHalal: true },
    { id: 'mor-main-025', shopId: 'morrisons', slot: 'main', category: 'roll', name: 'Morrisons Beef & Mustard Roll', kcal: 400, price: 330, isNutFree: true, isHighProtein: true },
    { id: 'mor-main-026', shopId: 'morrisons', slot: 'main', category: 'roll', name: 'Morrisons Chicken & Bacon Sub Roll', kcal: 430, price: 330, isNutFree: true, isHighProtein: true },

    // === SNACKS (called "Side" on Morrisons) ===
    // Crisps
    { id: 'mor-snack-001', shopId: 'morrisons', slot: 'snack', category: 'crisps', name: 'Walkers Ready Salted Crisps 45g', kcal: 230, price: 120, isVegan: true, isVegetarian: true, isPescetarian: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isHalal: true },
    { id: 'mor-snack-002', shopId: 'morrisons', slot: 'snack', category: 'crisps', name: 'Walkers Cheese & Onion Crisps 45g', kcal: 235, price: 120, isVegetarian: true, isPescetarian: true, isNutFree: true, isHalal: true },
    { id: 'mor-snack-003', shopId: 'morrisons', slot: 'snack', category: 'crisps', name: 'Walkers Monster Munch Pickled Onion 40g', kcal: 195, price: 120, isVegan: true, isVegetarian: true, isPescetarian: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isHalal: true },
    { id: 'mor-snack-004', shopId: 'morrisons', slot: 'snack', category: 'crisps', name: "McCoy's Flame Grilled Steak Crisps 45g", kcal: 230, price: 115, isNutFree: true },
    { id: 'mor-snack-005', shopId: 'morrisons', slot: 'snack', category: 'crisps', name: 'Tyrrells Sea Salted Crisps 40g', kcal: 207, price: 110, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isHalal: true },
    { id: 'mor-snack-006', shopId: 'morrisons', slot: 'snack', category: 'crisps', name: 'Walkers Baked Prawn Cocktail 37.5g', kcal: 155, price: 120, isPescetarian: true, isNutFree: true, isHalal: true },
    { id: 'mor-snack-007', shopId: 'morrisons', slot: 'snack', category: 'crisps', name: 'Popchips Sea Salt 23g', kcal: 99, price: 100, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isLowCalorie: true, isHalal: true },
    { id: 'mor-snack-008', shopId: 'morrisons', slot: 'snack', category: 'crisps', name: 'Hula Hoops Salted 45g', kcal: 220, price: 115, isVegan: true, isVegetarian: true, isPescetarian: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isHalal: true },
    { id: 'mor-snack-009', shopId: 'morrisons', slot: 'snack', category: 'crisps', name: 'Doritos Cool Original Tortilla Chips 40g', kcal: 195, price: 100, isVegan: true, isVegetarian: true, isPescetarian: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isHalal: true },
    { id: 'mor-snack-010', shopId: 'morrisons', slot: 'snack', category: 'crisps', name: 'Walkers Wotsits Really Cheesy 36g', kcal: 185, price: 120, isVegetarian: true, isPescetarian: true, isNutFree: true, isHalal: true },
    // Chocolate
    { id: 'mor-snack-011', shopId: 'morrisons', slot: 'snack', category: 'chocolate', name: 'Cadbury Starbar 49g', kcal: 245, price: 100, isVegetarian: true, isNutFree: true, isHalal: true },
    { id: 'mor-snack-012', shopId: 'morrisons', slot: 'snack', category: 'chocolate', name: 'Lindt Lindor Milk Chocolate 38g', kcal: 215, price: 135, isVegetarian: true, isNutFree: true, isHalal: true },
    { id: 'mor-snack-013', shopId: 'morrisons', slot: 'snack', category: 'chocolate', name: 'Kinder Bueno Twin Finger Bar', kcal: 244, price: 100, isVegetarian: true, isHalal: true },
    { id: 'mor-snack-014', shopId: 'morrisons', slot: 'snack', category: 'chocolate', name: 'KitKat Chunky Milk Chocolate Duo 64g', kcal: 324, price: 130, isVegetarian: true, isNutFree: true, isHalal: true },
    { id: 'mor-snack-015', shopId: 'morrisons', slot: 'snack', category: 'chocolate', name: 'Cadbury Dairy Milk Duo 54g', kcal: 275, price: 135, isVegetarian: true, isNutFree: true, isHalal: true },
    { id: 'mor-snack-016', shopId: 'morrisons', slot: 'snack', category: 'chocolate', name: 'Snickers 48g', kcal: 245, price: 120, isVegetarian: true, isHalal: true },
    { id: 'mor-snack-017', shopId: 'morrisons', slot: 'snack', category: 'chocolate', name: 'Cadbury Twirl Xtra Duo 54g', kcal: 285, price: 135, isVegetarian: true, isNutFree: true, isHalal: true },
    { id: 'mor-snack-018', shopId: 'morrisons', slot: 'snack', category: 'chocolate', name: 'Cadbury Crunchie 40g', kcal: 195, price: 100, isVegetarian: true, isNutFree: true, isHalal: true },
    // Sweet snacks
    { id: 'mor-snack-019', shopId: 'morrisons', slot: 'snack', category: 'sweet snack', name: 'Skittles 45g', kcal: 170, price: 75, isVegan: true, isVegetarian: true, isPescetarian: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isHalal: true },
    { id: 'mor-snack-020', shopId: 'morrisons', slot: 'snack', category: 'sweet snack', name: 'Fruitella Strawberry Stick 40g', kcal: 135, price: 75, isVegetarian: true, isNutFree: true, isHalal: true },
    { id: 'mor-snack-021', shopId: 'morrisons', slot: 'snack', category: 'sweet snack', name: 'Trebor Extra Strong Peppermint Roll', kcal: 145, price: 80, isVegan: true, isVegetarian: true, isPescetarian: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isHalal: true },
    // Fruit
    { id: 'mor-snack-022', shopId: 'morrisons', slot: 'snack', category: 'fruit', name: 'Del Monte Pineapple Chunks 110g', kcal: 55, price: 150, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isLowCalorie: true, isHalal: true },
    { id: 'mor-snack-023', shopId: 'morrisons', slot: 'snack', category: 'fruit', name: 'Del Monte Apple, Grape & Strawberry 95g', kcal: 50, price: 150, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isLowCalorie: true, isHalal: true },
    // Savoury snacks
    { id: 'mor-snack-024', shopId: 'morrisons', slot: 'snack', category: 'savoury snack', name: 'Morrisons Individual Sausage Roll 114g', kcal: 385, price: 130, isNutFree: true },
    { id: 'mor-snack-025', shopId: 'morrisons', slot: 'snack', category: 'savoury snack', name: 'Morrisons Snack Seafood Sticks 100g', kcal: 95, price: 200, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isLowCalorie: true, isHalal: true },
    { id: 'mor-snack-026', shopId: 'morrisons', slot: 'snack', category: 'savoury snack', name: 'Fridge Raiders Slow Roast Chicken Bites 45g', kcal: 85, price: 135, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isLowCalorie: true, isHighProtein: true },
    { id: 'mor-snack-027', shopId: 'morrisons', slot: 'snack', category: 'savoury snack', name: 'Morrisons Carrot Sticks & Houmous 100g', kcal: 130, price: 130, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isHalal: true },
    { id: 'mor-snack-028', shopId: 'morrisons', slot: 'snack', category: 'savoury snack', name: 'Morrisons Jumbo Vegetable Samosa', kcal: 310, price: 150, isVegan: true, isVegetarian: true, isPescetarian: true, isNutFree: true, isHalal: true },
    { id: 'mor-snack-029', shopId: 'morrisons', slot: 'snack', category: 'savoury snack', name: 'Morrisons Onion Bhaji & Mango Chutney 110g', kcal: 290, price: 150, isVegan: true, isVegetarian: true, isPescetarian: true, isNutFree: true, isHalal: true },
    { id: 'mor-snack-030', shopId: 'morrisons', slot: 'snack', category: 'savoury snack', name: 'Peperami Hot 22.5g', kcal: 120, price: 130, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isHighProtein: true },
    { id: 'mor-snack-031', shopId: 'morrisons', slot: 'snack', category: 'savoury snack', name: 'Morrisons Vegetable Spring Rolls 78g', kcal: 220, price: 150, isVegan: true, isVegetarian: true, isPescetarian: true, isNutFree: true, isHalal: true },
    // Cereal bars
    { id: 'mor-snack-032', shopId: 'morrisons', slot: 'snack', category: 'cereal bar', name: 'Nakd Cocoa Orange Bar 35g', kcal: 137, price: 99, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isHalal: true },
    { id: 'mor-snack-033', shopId: 'morrisons', slot: 'snack', category: 'cereal bar', name: 'Nakd Bakewell Tart Bar 35g', kcal: 135, price: 100, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isHalal: true },
    { id: 'mor-snack-034', shopId: 'morrisons', slot: 'snack', category: 'cereal bar', name: 'Soreen Malt Loaf Slices 45g', kcal: 150, price: 130, isVegetarian: true, isPescetarian: true, isNutFree: true, isHalal: true },
    { id: 'mor-snack-035', shopId: 'morrisons', slot: 'snack', category: 'cereal bar', name: 'Eatlean Protein Cheese Bar 60g', kcal: 180, price: 125, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isNutFree: true, isHighProtein: true, isHalal: true },
    { id: 'mor-snack-036', shopId: 'morrisons', slot: 'snack', category: 'cereal bar', name: 'Morrisons Golden Syrup Porridge Pot 55g', kcal: 185, price: 55, isVegetarian: true, isPescetarian: true, isNutFree: true, isHalal: true },
    // Cake/pastry
    { id: 'mor-snack-037', shopId: 'morrisons', slot: 'snack', category: 'cake/pastry', name: 'Morrisons All Butter Flapjack Bar 50g', kcal: 230, price: 125, isVegetarian: true, isPescetarian: true, isNutFree: true, isHalal: true },
    { id: 'mor-snack-038', shopId: 'morrisons', slot: 'snack', category: 'cake/pastry', name: 'Morrisons Chocolate Brownie Bar 50g', kcal: 225, price: 125, isVegetarian: true, isPescetarian: true, isNutFree: true, isHalal: true },
    { id: 'mor-snack-039', shopId: 'morrisons', slot: 'snack', category: 'cake/pastry', name: 'Morrisons Rocky Road Bar 50g', kcal: 235, price: 125, isVegetarian: true, isPescetarian: true, isNutFree: true, isHalal: true },
    { id: 'mor-snack-040', shopId: 'morrisons', slot: 'snack', category: 'cake/pastry', name: 'Morrisons Millionaire Shortbread Bar 50g', kcal: 250, price: 125, isVegetarian: true, isPescetarian: true, isNutFree: true, isHalal: true },

    // === DRINKS ===
    // Water
    { id: 'mor-drink-001', shopId: 'morrisons', slot: 'drink', category: 'water', name: 'Highland Spring Still Water 500ml', kcal: 0, price: 75, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isLowCalorie: true, isHalal: true },
    { id: 'mor-drink-002', shopId: 'morrisons', slot: 'drink', category: 'water', name: 'Evian Natural Mineral Water 500ml', kcal: 0, price: 150, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isLowCalorie: true, isHalal: true },
    { id: 'mor-drink-003', shopId: 'morrisons', slot: 'drink', category: 'water', name: 'Buxton Still Mineral Water 500ml', kcal: 0, price: 75, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isLowCalorie: true, isHalal: true },
    // Juice
    { id: 'mor-drink-004', shopId: 'morrisons', slot: 'drink', category: 'juice', name: 'Tropicana Smooth Orange Juice 300ml', kcal: 108, price: 225, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isHalal: true },
    { id: 'mor-drink-005', shopId: 'morrisons', slot: 'drink', category: 'juice', name: 'Ribena Blackcurrant Juice Drink 500ml', kcal: 110, price: 170, isVegan: true, isVegetarian: true, isPescetarian: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isHalal: true },
    { id: 'mor-drink-006', shopId: 'morrisons', slot: 'drink', category: 'juice', name: 'Oasis Summer Fruits 500ml', kcal: 80, price: 200, isVegan: true, isVegetarian: true, isPescetarian: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isHalal: true },
    { id: 'mor-drink-007', shopId: 'morrisons', slot: 'drink', category: 'juice', name: 'Juiceburst Apple 500ml', kcal: 225, price: 195, isVegan: true, isVegetarian: true, isPescetarian: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isHalal: true },
    { id: 'mor-drink-008', shopId: 'morrisons', slot: 'drink', category: 'juice', name: 'Rubicon Sparkling Mango Juice 500ml', kcal: 100, price: 190, isVegan: true, isVegetarian: true, isPescetarian: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isHalal: true },
    // Smoothies
    { id: 'mor-drink-009', shopId: 'morrisons', slot: 'drink', category: 'smoothie', name: 'Naked Green Machine Super Smoothie 300ml', kcal: 140, price: 290, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isHalal: true },
    { id: 'mor-drink-010', shopId: 'morrisons', slot: 'drink', category: 'smoothie', name: 'Innocent Orange Juice Smooth 330ml', kcal: 130, price: 220, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isHalal: true },
    { id: 'mor-drink-011', shopId: 'morrisons', slot: 'drink', category: 'smoothie', name: 'Innocent Strawberries, Bananas & Apples Smoothie 250ml', kcal: 130, price: 200, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isHalal: true },
    // Fizzy drinks
    { id: 'mor-drink-012', shopId: 'morrisons', slot: 'drink', category: 'fizzy drink', name: 'Coca-Cola Original Taste 500ml', kcal: 210, price: 210, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isHalal: true },
    { id: 'mor-drink-013', shopId: 'morrisons', slot: 'drink', category: 'fizzy drink', name: 'Coca-Cola Zero Sugar 500ml', kcal: 2, price: 195, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isLowCalorie: true, isHalal: true },
    { id: 'mor-drink-014', shopId: 'morrisons', slot: 'drink', category: 'fizzy drink', name: 'Diet Coke 500ml', kcal: 2, price: 195, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isLowCalorie: true, isHalal: true },
    { id: 'mor-drink-015', shopId: 'morrisons', slot: 'drink', category: 'fizzy drink', name: 'Pepsi Max No Sugar Cola 500ml', kcal: 2, price: 190, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isLowCalorie: true, isHalal: true },
    { id: 'mor-drink-016', shopId: 'morrisons', slot: 'drink', category: 'fizzy drink', name: 'Fanta Orange 500ml', kcal: 125, price: 200, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isHalal: true },
    { id: 'mor-drink-017', shopId: 'morrisons', slot: 'drink', category: 'fizzy drink', name: 'Dr Pepper 500ml', kcal: 215, price: 200, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isHalal: true },
    { id: 'mor-drink-018', shopId: 'morrisons', slot: 'drink', category: 'fizzy drink', name: 'Sprite 500ml', kcal: 145, price: 195, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isHalal: true },
    { id: 'mor-drink-019', shopId: 'morrisons', slot: 'drink', category: 'fizzy drink', name: 'Vimto 500ml', kcal: 130, price: 145, isVegan: true, isVegetarian: true, isPescetarian: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isHalal: true },
    { id: 'mor-drink-020', shopId: 'morrisons', slot: 'drink', category: 'fizzy drink', name: 'IRN-BRU 500ml', kcal: 175, price: 180, isVegan: true, isVegetarian: true, isPescetarian: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isHalal: true },
    // Energy drinks
    { id: 'mor-drink-021', shopId: 'morrisons', slot: 'drink', category: 'energy drink', name: 'Relentless Origin Energy Drink 500ml', kcal: 108, price: 100, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isHalal: true },
    { id: 'mor-drink-022', shopId: 'morrisons', slot: 'drink', category: 'energy drink', name: 'Lucozade Energy Original 500ml', kcal: 348, price: 185, isVegan: true, isVegetarian: true, isPescetarian: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isHalal: true },
    { id: 'mor-drink-023', shopId: 'morrisons', slot: 'drink', category: 'energy drink', name: 'Monster Energy Drink 500ml', kcal: 230, price: 215, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isHalal: true },
    { id: 'mor-drink-024', shopId: 'morrisons', slot: 'drink', category: 'energy drink', name: 'Red Bull Energy Drink 250ml', kcal: 113, price: 185, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isHalal: true },
    { id: 'mor-drink-025', shopId: 'morrisons', slot: 'drink', category: 'energy drink', name: 'Powerade Berry & Tropical 500ml', kcal: 90, price: 200, isVegan: true, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isDairyFree: true, isLactoseFree: true, isNutFree: true, isHalal: true },
    // Iced coffee
    { id: 'mor-drink-026', shopId: 'morrisons', slot: 'drink', category: 'iced coffee', name: 'Arctic Coffee Caramel Latte 330ml', kcal: 175, price: 115, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isNutFree: true, isHalal: true },
    { id: 'mor-drink-027', shopId: 'morrisons', slot: 'drink', category: 'iced coffee', name: 'Arctic Cafe Latte 330ml', kcal: 155, price: 115, isVegetarian: true, isPescetarian: true, isGlutenFree: true, isNutFree: true, isHalal: true },
  ],
};
