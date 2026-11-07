// ============================================================================
// IRISH SUPERMARKET RECIPE & FOOD LIBRARY
// (Dunnes Stores, Tesco Ireland, Aldi Ireland, Lidl Ireland)
// ============================================================================

export const IRISH_SUPERMARKETS = [
  "All Stores",
  "Dunnes Stores",
  "Tesco",
  "Aldi",
  "Lidl"
];

export const IRISH_STAPLES_QUICK_ADD = [
  { name: "Avonmore Protein Milk (1L)", aisle: "Dairy & Eggs", store: "Tesco / Dunnes" },
  { name: "McCambridge Irish Soda Bread", aisle: "Bakery", store: "All Stores" },
  { name: "Flahavan's Progress Oatlets (1kg)", aisle: "Pantry & Grains", store: "All Stores" },
  { name: "Bord Bia 5% Lean Irish Steak Mince (500g)", aisle: "Meat & Seafood", store: "All Stores" },
  { name: "Bord Bia Irish Chicken Breast Fillets (500g)", aisle: "Meat & Seafood", store: "All Stores" },
  { name: "Aldi Brooklea / Lidl Milbona 20g Protein Yogurt", aisle: "Dairy & Eggs", store: "Aldi / Lidl" },
  { name: "Dubliner Lighter White Cheddar Block", aisle: "Dairy & Eggs", store: "All Stores" },
  { name: "Kerrygold Pure Irish Butter", aisle: "Dairy & Eggs", store: "All Stores" },
  { name: "Irish Rooster Potatoes (2kg Bag)", aisle: "Produce", store: "All Stores" },
  { name: "Clonakilty Black & White Pudding", aisle: "Meat & Seafood", store: "Dunnes / Tesco" },
  { name: "Glenisk 0% Fat Irish Strained Protein Yogurt", aisle: "Dairy & Eggs", store: "Dunnes / Tesco" },
  { name: "Fulfil Chocolate Salted Caramel Bar", aisle: "Pantry & Grains", store: "All Stores" }
];

export const STARTER_RECIPES = [
  // ==========================================================================
  // BREAKFAST
  // ==========================================================================
  {
    id: "rec-flahavans-gold-porridge",
    title: "Flahavan's Creamy Irish Porridge & Glenisk Berry Bowl",
    category: "Breakfast",
    store: "Dunnes Stores",
    availableAt: ["Dunnes Stores", "Tesco", "Aldi", "Lidl"],
    prepTime: 3,
    cookTime: 5,
    servings: 1,
    calories: 385,
    protein: 22,
    carbs: 52,
    fat: 9,
    tags: ["Irish Classic", "High Fiber", "Dunnes / Tesco"],
    emoji: "🥣",
    description: "Traditional Waterford Flahavan's oats cooked in Avonmore Protein Milk, topped with Glenisk Greek yogurt, mixed berries, and honey.",
    ingredients: [
      { name: "Flahavan's Progress Oatlets", amount: 50, unit: "g", aisle: "Pantry & Grains" },
      { name: "Avonmore Protein Milk", amount: 200, unit: "ml", aisle: "Dairy & Eggs" },
      { name: "Glenisk 0% Irish Greek Yogurt", amount: 2, unit: "tbsp", aisle: "Dairy & Eggs" },
      { name: "Fresh Irish strawberries & blueberries", amount: 80, unit: "g", aisle: "Produce" },
      { name: "Boyne Valley Irish Honey", amount: 1, unit: "tsp", aisle: "Pantry & Grains" },
      { name: "Chia or milled flaxseed (Linwoods)", amount: 1, unit: "tbsp", aisle: "Pantry & Grains" }
    ],
    instructions: [
      "Combine Flahavan's oats and Avonmore Protein Milk in a small saucepan over medium heat.",
      "Bring to a gentle simmer and stir continuously for 4-5 minutes until thick and velvety.",
      "Pour into a warm bowl, swirl in the Glenisk Greek yogurt, and top with fresh berries, Linwoods flaxseed, and a drizzle of honey."
    ]
  },
  {
    id: "rec-healthy-full-irish",
    title: "Lighter Weekend Full Irish Grill-Up",
    category: "Breakfast",
    store: "Tesco",
    availableAt: ["Dunnes Stores", "Tesco", "Aldi", "Lidl"],
    prepTime: 8,
    cookTime: 14,
    servings: 1,
    calories: 520,
    protein: 38,
    carbs: 34,
    fat: 24,
    tags: ["Irish Classic", "High Protein", "Weekend"],
    emoji: "🍳",
    description: "Grilled lean Irish back bacon medallions, reduced-fat pork sausages, Clonakilty pudding, poached eggs, grilled tomato, and McCambridge soda bread.",
    ingredients: [
      { name: "Lean Irish bacon medallions", amount: 2, unit: "medallions", aisle: "Meat & Seafood" },
      { name: "Reduced-fat Irish pork sausages (e.g. Mallon's / Tesco Lean)", amount: 2, unit: "sausages", aisle: "Meat & Seafood" },
      { name: "Clonakilty black or white pudding", amount: 2, unit: "slices", aisle: "Meat & Seafood" },
      { name: "Bord Bia free-range eggs", amount: 2, unit: "whole", aisle: "Dairy & Eggs" },
      { name: "McCambridge wholewheat soda bread", amount: 1, unit: "slice", aisle: "Bakery" },
      { name: "Vine tomato, halved", amount: 1, unit: "whole", aisle: "Produce" },
      { name: "Flat cap mushrooms", amount: 4, unit: "whole", aisle: "Produce" }
    ],
    instructions: [
      "Preheat your grill or air fryer to 190°C. Place the sausages in for 10-12 minutes, turning halfway.",
      "Add the bacon medallions, Clonakilty pudding slices, halved tomato, and mushrooms for the final 6 minutes until sizzling and golden.",
      "Meanwhile, poach or dry-fry the 2 free-range eggs in a non-stick pan and toast the slice of McCambridge brown bread.",
      "Plate everything hot with a grind of black pepper and optional splash of Ballymaloe Relish."
    ]
  },
  {
    id: "rec-aldi-lidl-protein-pancakes",
    title: "Aldi Brooklea / Lidl Milbona High-Protein Berry Pancakes",
    category: "Breakfast",
    store: "Aldi",
    availableAt: ["Aldi", "Lidl"],
    prepTime: 6,
    cookTime: 8,
    servings: 1,
    calories: 430,
    protein: 34,
    carbs: 48,
    fat: 10,
    tags: ["High Protein", "Aldi / Lidl", "Quick"],
    emoji: "🥞",
    description: "Fluffy oat and cottage cheese/quark pancakes topped with Aldi Brooklea or Lidl Milbona vanilla protein yogurt and warm raspberries.",
    ingredients: [
      { name: "Rolled porridge oats (blended)", amount: 50, unit: "g", aisle: "Pantry & Grains" },
      { name: "Lidl Milbona / Aldi Brooklea Fat-Free Quark or Protein Yogurt", amount: 120, unit: "g", aisle: "Dairy & Eggs" },
      { name: "Free-range eggs", amount: 2, unit: "whole", aisle: "Dairy & Eggs" },
      { name: "Baking powder", amount: 0.5, unit: "tsp", aisle: "Pantry & Grains" },
      { name: "Fresh or frozen raspberries", amount: 80, unit: "g", aisle: "Produce" },
      { name: "1 kcal cooking spray", amount: 4, unit: "sprays", aisle: "Pantry & Grains" }
    ],
    instructions: [
      "Blend the porridge oats, quark (reserve 2 tbsp for topping), eggs, and baking powder until smooth.",
      "Mist a non-stick frying pan with cooking spray over medium heat.",
      "Pour 3 small rounds of batter and cook for 2-3 minutes until bubbles appear on top, then flip for 1-2 minutes until golden.",
      "Stack the pancakes and top with the reserved protein yogurt and warm crushed raspberries."
    ]
  },
  {
    id: "rec-smoked-salmon-mccambridge",
    title: "West Cork Smoked Salmon & Scrambled Eggs on Brown Soda Bread",
    category: "Breakfast",
    store: "Dunnes Stores",
    availableAt: ["Dunnes Stores", "Tesco", "Aldi", "Lidl"],
    prepTime: 5,
    cookTime: 5,
    servings: 1,
    calories: 440,
    protein: 31,
    carbs: 28,
    fat: 22,
    tags: ["Omega-3", "High Protein", "10-Min"],
    emoji: "🐟",
    description: "Dunnes Simply Better or Aldi Specially Selected Irish oak-smoked salmon with creamy scrambled eggs on toasted brown soda bread.",
    ingredients: [
      { name: "Irish oak-smoked salmon slices", amount: 60, unit: "g", aisle: "Meat & Seafood" },
      { name: "McCambridge brown soda bread", amount: 2, unit: "slices", aisle: "Bakery" },
      { name: "Bord Bia free-range eggs", amount: 2, unit: "whole", aisle: "Dairy & Eggs" },
      { name: "Kerrygold butter", amount: 1, unit: "tsp", aisle: "Dairy & Eggs" },
      { name: "Fresh chives & lemon wedge", amount: 1, unit: "tbsp", aisle: "Produce" }
    ],
    instructions: [
      "Toast the two slices of McCambridge brown soda bread.",
      "Whisk the eggs with a pinch of black pepper. Melt Kerrygold butter in a cold pan over low-medium heat and stir gently with a spatula until soft curds form.",
      "Top the toasted soda bread with silky scrambled eggs, drape over the smoked salmon, and finish with chopped chives and lemon juice."
    ]
  },
  {
    id: "rec-avocado-poached-eggs",
    title: "Sourdough Avocado Toast & Poached Eggs",
    category: "Breakfast",
    store: "Tesco",
    availableAt: ["Dunnes Stores", "Tesco", "Aldi", "Lidl"],
    prepTime: 10,
    cookTime: 5,
    servings: 1,
    calories: 420,
    protein: 19,
    carbs: 34,
    fat: 24,
    tags: ["High Protein", "Vegetarian", "Quick"],
    emoji: "🥑",
    description: "Crispy bakery sourdough topped with lemon-herb smashed avocado and two runny poached eggs.",
    ingredients: [
      { name: "Sourdough bread", amount: 2, unit: "slices", aisle: "Bakery" },
      { name: "Ripe avocado", amount: 1, unit: "whole", aisle: "Produce" },
      { name: "Large eggs", amount: 2, unit: "whole", aisle: "Dairy & Eggs" },
      { name: "Fresh lemon juice", amount: 1, unit: "tsp", aisle: "Produce" },
      { name: "Red pepper flakes", amount: 0.5, unit: "tsp", aisle: "Spices & Condiments" },
      { name: "Flaky sea salt", amount: 0.5, unit: "tsp", aisle: "Spices & Condiments" }
    ],
    instructions: [
      "Bring a small pot of water to a gentle simmer and add a splash of vinegar.",
      "Toast the sourdough bread slices until golden brown and crisp on the edges.",
      "Halve the avocado, remove the pit, and mash the flesh in a bowl with lemon juice, salt, and pepper.",
      "Crack each egg into a small cup, swirl the simmering water gently, and slide the eggs in. Poach for 3 minutes for runny yolks.",
      "Spread the smashed avocado generously over the toasted sourdough, top with poached eggs, and garnish with red pepper flakes."
    ]
  },
  {
    id: "rec-berry-protein-oats",
    title: "Creamy Berry & Almond Overnight Oats",
    category: "Breakfast",
    store: "Lidl",
    availableAt: ["Dunnes Stores", "Tesco", "Aldi", "Lidl"],
    prepTime: 8,
    cookTime: 0,
    servings: 1,
    calories: 390,
    protein: 24,
    carbs: 48,
    fat: 11,
    tags: ["Meal Prep", "High Fiber", "No Cook"],
    emoji: "🍓",
    description: "Rolled oats soaked in Greek yogurt, almond milk, and chia seeds topped with fresh mixed berries.",
    ingredients: [
      { name: "Rolled oats", amount: 0.5, unit: "cup", aisle: "Pantry & Grains" },
      { name: "Greek yogurt (plain, 0%)", amount: 0.5, unit: "cup", aisle: "Dairy & Eggs" },
      { name: "Unsweetened almond milk", amount: 0.5, unit: "cup", aisle: "Dairy & Eggs" },
      { name: "Chia seeds", amount: 1, unit: "tbsp", aisle: "Pantry & Grains" },
      { name: "Mixed berries (blueberries & strawberries)", amount: 0.75, unit: "cup", aisle: "Produce" },
      { name: "Sliced almonds", amount: 1, unit: "tbsp", aisle: "Pantry & Grains" },
      { name: "Pure maple syrup", amount: 1, unit: "tsp", aisle: "Spices & Condiments" }
    ],
    instructions: [
      "In a mason jar or airtight container, whisk together Greek yogurt, almond milk, and maple syrup until smooth.",
      "Stir in the rolled oats and chia seeds until completely coated.",
      "Cover and refrigerate for at least 4 hours or overnight.",
      "Before serving, stir well and top with fresh mixed berries and toasted sliced almonds."
    ]
  },

  // ==========================================================================
  // LUNCH
  // ==========================================================================
  {
    id: "rec-irish-chicken-fillet-roll",
    title: "Healthy Air-Fryer Irish Deli Chicken Fillet Roll",
    category: "Lunch",
    store: "Lidl",
    availableAt: ["Dunnes Stores", "Tesco", "Aldi", "Lidl"],
    prepTime: 5,
    cookTime: 15,
    servings: 1,
    calories: 530,
    protein: 39,
    carbs: 54,
    fat: 16,
    tags: ["Irish Classic", "Fakeaway", "High Protein"],
    emoji: "🥖",
    description: "Ireland's favourite deli lunch made macro-friendly: crispy air-fried southern-spiced Irish chicken breast in a warm bakery demi-baguette.",
    ingredients: [
      { name: "Bakery demi-baguette or bake-at-home roll (Lidl / Aldi / Dunnes)", amount: 1, unit: "roll", aisle: "Bakery" },
      { name: "Breaded southern-fried Irish chicken breast goujons (fresh chiller aisle)", amount: 130, unit: "g", aisle: "Meat & Seafood" },
      { name: "Shredded iceberg lettuce", amount: 1, unit: "cup", aisle: "Produce" },
      { name: "Red onion, finely diced", amount: 2, unit: "tbsp", aisle: "Produce" },
      { name: "Dubliner Lighter grated cheddar", amount: 20, unit: "g", aisle: "Dairy & Eggs" },
      { name: "Light mayonnaise or taco sauce", amount: 1, unit: "tbsp", aisle: "Spices & Condiments" }
    ],
    instructions: [
      "Pop the southern-fried chicken goujons into the air fryer at 200°C for 12-14 minutes until golden and piping hot.",
      "Warm the demi-baguette in the air fryer for the final 2 minutes so the crust is crisp.",
      "Slice the roll open, spread with light mayo or taco sauce, and layer in the hot chopped chicken, grated Dubliner lighter cheese, red onion, and crisp lettuce."
    ]
  },
  {
    id: "rec-dunnes-veg-soup-soda-bread",
    title: "Wholesome Country Vegetable Soup, Chicken & Brown Soda Bread",
    category: "Lunch",
    store: "Dunnes Stores",
    availableAt: ["Dunnes Stores", "Tesco", "Aldi", "Lidl"],
    prepTime: 5,
    cookTime: 6,
    servings: 1,
    calories: 445,
    protein: 32,
    carbs: 48,
    fat: 12,
    tags: ["Irish Classic", "Warm & Comforting", "10-Min"],
    emoji: "🍲",
    description: "Fresh Irish chiller-cabinet country vegetable soup boosted with shredded roast chicken breast and served with McCambridge brown bread.",
    ingredients: [
      { name: "Fresh Country Vegetable Soup tub (Dunnes Simply Better / Avonmore / Aldi)", amount: 400, unit: "g", aisle: "Produce" },
      { name: "Cooked Irish chicken breast pieces", amount: 90, unit: "g", aisle: "Meat & Seafood" },
      { name: "McCambridge Irish soda bread", amount: 2, unit: "slices", aisle: "Bakery" },
      { name: "Kerrygold Lighter butter", amount: 1, unit: "tsp", aisle: "Dairy & Eggs" }
    ],
    instructions: [
      "Pour the fresh vegetable soup into a saucepan (or microwave-safe bowl) and stir in the cooked shredded chicken breast so it heats through for 4-5 minutes.",
      "Butter the slices of McCambridge brown soda bread with Kerrygold and serve alongside the steaming bowl of soup."
    ]
  },
  {
    id: "rec-dubliner-tuna-melt",
    title: "Dubliner Cheddar Tuna & Sweetcorn Sourdough Melt",
    category: "Lunch",
    store: "Tesco",
    availableAt: ["Dunnes Stores", "Tesco", "Aldi", "Lidl"],
    prepTime: 8,
    cookTime: 6,
    servings: 1,
    calories: 490,
    protein: 42,
    carbs: 44,
    fat: 15,
    tags: ["High Protein", "Budget Friendly", "Quick"],
    emoji: "🥪",
    description: "John West / Aldi pole-and-line tuna mixed with Greek yogurt, crunchy sweetcorn, and red onion, grilled under bubbling Dubliner cheddar.",
    ingredients: [
      { name: "Tuna chunks in spring water, drained", amount: 1, unit: "tin", aisle: "Pantry & Grains" },
      { name: "Sourdough bread slices (Lidl / Aldi / Tesco Bakery)", amount: 2, unit: "slices", aisle: "Bakery" },
      { name: "Dubliner Lighter White or Red Cheddar, grated", amount: 35, unit: "g", aisle: "Dairy & Eggs" },
      { name: "Sweetcorn kernels (tinned)", amount: 3, unit: "tbsp", aisle: "Pantry & Grains" },
      { name: "Greek yogurt or light mayo", amount: 1.5, unit: "tbsp", aisle: "Dairy & Eggs" },
      { name: "Spring onion, chopped", amount: 1, unit: "stalk", aisle: "Produce" }
    ],
    instructions: [
      "Flake the drained tuna in a bowl and mix with Greek yogurt (or light mayo), sweetcorn, chopped spring onion, and black pepper.",
      "Lightly toast both slices of sourdough bread, then pile the tuna mixture onto them.",
      "Scatter the grated Dubliner cheddar on top and grill or air-fry at 200°C for 4-5 minutes until bubbling and golden."
    ]
  },
  {
    id: "rec-piri-chicken-rice-bowl",
    title: "Aldi / Tesco Piri-Piri Chicken & Spicy Rice Box",
    category: "Lunch",
    store: "Aldi",
    availableAt: ["Dunnes Stores", "Tesco", "Aldi", "Lidl"],
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    calories: 515,
    protein: 45,
    carbs: 52,
    fat: 13,
    tags: ["Fakeaway", "Meal Prep", "High Protein"],
    emoji: "🌶️",
    description: "Nando's-style fakeaway lunch box using Irish chicken breast, Piri-Piri seasoning, charred corn, and Mexican microwave rice.",
    ingredients: [
      { name: "Irish chicken breast fillets", amount: 350, unit: "g", aisle: "Meat & Seafood" },
      { name: "Microwave Mexican or Spicy Rice pouch (Aldi / Ben's)", amount: 1, unit: "pouch", aisle: "Pantry & Grains" },
      { name: "Piri-Piri seasoning or marinade", amount: 2, unit: "tbsp", aisle: "Spices & Condiments" },
      { name: "Mixed bell peppers, sliced", amount: 1, unit: "whole", aisle: "Produce" },
      { name: "Baby spinach & rocket salad bag", amount: 2, unit: "cups", aisle: "Produce" },
      { name: "Light perinaise or Greek yogurt", amount: 2, unit: "tbsp", aisle: "Spices & Condiments" }
    ],
    instructions: [
      "Coat the chicken breast fillets and sliced peppers in Piri-Piri seasoning and a spray of oil.",
      "Air-fry or pan-sear at 195°C for 14-15 minutes until charred and cooked through, then slice into strips.",
      "Heat the spicy rice pouch for 2 minutes. Divide rice, fresh spinach/rocket, peppers, and Piri-Piri chicken between two bowls and drizzle with light perinaise."
    ]
  },
  {
    id: "rec-mediterranean-chicken-bowl",
    title: "Grilled Lemon Herb Chicken Quinoa Bowl",
    category: "Lunch",
    store: "Dunnes Stores",
    availableAt: ["Dunnes Stores", "Tesco", "Aldi", "Lidl"],
    prepTime: 15,
    cookTime: 18,
    servings: 2,
    calories: 540,
    protein: 44,
    carbs: 46,
    fat: 19,
    tags: ["High Protein", "Mediterranean", "Gluten-Free"],
    emoji: "🥗",
    description: "Juicy lemon-oregano chicken breast over fluffy quinoa with crisp cucumber, kalamata olives, and tzatziki.",
    ingredients: [
      { name: "Boneless skinless chicken breast", amount: 350, unit: "g", aisle: "Meat & Seafood" },
      { name: "Dry quinoa", amount: 1, unit: "cup", aisle: "Pantry & Grains" },
      { name: "English cucumber, diced", amount: 1, unit: "cup", aisle: "Produce" },
      { name: "Cherry tomatoes, halved", amount: 1, unit: "cup", aisle: "Produce" },
      { name: "Kalamata olives, pitted", amount: 0.25, unit: "cup", aisle: "Pantry & Grains" },
      { name: "Tzatziki sauce", amount: 4, unit: "tbsp", aisle: "Dairy & Eggs" },
      { name: "Extra virgin olive oil", amount: 1.5, unit: "tbsp", aisle: "Pantry & Grains" },
      { name: "Fresh lemon juice", amount: 2, unit: "tbsp", aisle: "Produce" }
    ],
    instructions: [
      "Rinse quinoa under cold water. Cook in 2 cups of salted water over medium-low heat for 15 minutes until fluffy.",
      "Season chicken breasts with olive oil, lemon juice, garlic powder, oregano, salt, and pepper.",
      "Grill or pan-sear the chicken over medium-high heat for 6-7 minutes per side until cooked through. Let rest 5 minutes, then slice.",
      "Divide cooked quinoa between two bowls. Arrange sliced chicken, cucumber, cherry tomatoes, and olives on top.",
      "Finish each bowl with 2 tablespoons of cool tzatziki and a squeeze of fresh lemon."
    ]
  },
  {
    id: "rec-turkey-avocado-wrap",
    title: "Chipotle Turkey & Crispy Bacon Club Wrap",
    category: "Lunch",
    store: "Tesco",
    availableAt: ["Dunnes Stores", "Tesco", "Aldi", "Lidl"],
    prepTime: 10,
    cookTime: 5,
    servings: 1,
    calories: 480,
    protein: 36,
    carbs: 38,
    fat: 20,
    tags: ["Quick", "High Protein", "Portable"],
    emoji: "🌯",
    description: "Whole wheat tortilla loaded with carved Irish turkey breast, bacon medallions, avocado, romaine, and smoky yogurt spread.",
    ingredients: [
      { name: "Whole wheat large tortilla (Fitzgerald's / Old El Paso)", amount: 1, unit: "whole", aisle: "Bakery" },
      { name: "Sliced carved Irish turkey breast", amount: 120, unit: "g", aisle: "Meat & Seafood" },
      { name: "Lean bacon medallions", amount: 2, unit: "strips", aisle: "Meat & Seafood" },
      { name: "Ripe avocado, sliced", amount: 0.5, unit: "whole", aisle: "Produce" },
      { name: "Romaine lettuce leaves", amount: 2, unit: "leaves", aisle: "Produce" },
      { name: "Sliced tomato", amount: 3, unit: "slices", aisle: "Produce" },
      { name: "Greek yogurt chipotle spread", amount: 1.5, unit: "tbsp", aisle: "Dairy & Eggs" }
    ],
    instructions: [
      "Crisp the bacon medallions in a skillet over medium heat for 2-3 minutes per side.",
      "Warm the whole wheat tortilla briefly in the dry pan for 15 seconds so it folds easily.",
      "Spread the chipotle Greek yogurt down the center of the tortilla.",
      "Layer the sliced turkey breast, crispy bacon, avocado slices, tomato, and shredded romaine lettuce.",
      "Fold in the sides and roll tightly like a burrito. Slice diagonally in half to serve."
    ]
  },

  // ==========================================================================
  // DINNER
  // ==========================================================================
  {
    id: "rec-irish-spice-bag",
    title: "Irish Friday-Night Chicken Spice Bag (Air-Fryer Fakeaway)",
    category: "Dinner",
    store: "Aldi",
    availableAt: ["Dunnes Stores", "Tesco", "Aldi", "Lidl"],
    prepTime: 15,
    cookTime: 22,
    servings: 2,
    calories: 565,
    protein: 46,
    carbs: 62,
    fat: 12,
    tags: ["Irish Classic", "Fakeaway", "High Protein"],
    emoji: "🍟",
    description: "All the flavour of your local takeaway Spice Bag for half the calories! Crispy Rooster potato chips, spiced chicken strips, peppers, onions, and curry sauce.",
    ingredients: [
      { name: "Irish chicken breast fillets, cut into strips", amount: 380, unit: "g", aisle: "Meat & Seafood" },
      { name: "Irish Rooster potatoes, cut into chips", amount: 450, unit: "g", aisle: "Produce" },
      { name: "Red & green bell peppers, sliced", amount: 2, unit: "whole", aisle: "Produce" },
      { name: "White onion, sliced", amount: 1, unit: "whole", aisle: "Produce" },
      { name: "Chinese 5-spice powder", amount: 2, unit: "tsp", aisle: "Spices & Condiments" },
      { name: "Garlic powder & chilli flakes", amount: 1.5, unit: "tsp", aisle: "Spices & Condiments" },
      { name: "McDonnell's Curry Sauce (made up)", amount: 100, unit: "ml", aisle: "Pantry & Grains" }
    ],
    instructions: [
      "Soak the chipped Rooster potatoes in cold water for 10 minutes, pat thoroughly dry, spray with 1-cal oil, and air-fry at 200°C for 18-20 minutes until crispy.",
      "Toss the chicken strips in 1 tsp cornflour, 1 tsp Chinese 5-spice, garlic powder, and salt. Air-fry or pan-sear for 10-12 minutes until golden and crisp.",
      "Stir-fry the sliced peppers, onions, and fresh chilli in a hot wok for 3 minutes until charred.",
      "Toss the crispy Rooster chips and chicken into the wok with the remaining Chinese 5-spice, shake well, and serve with warm McDonnell's curry sauce for dipping!"
    ]
  },
  {
    id: "rec-irish-beef-guinness-stew",
    title: "Traditional Irish Beef, Carrot & Baby Rooster Stew",
    category: "Dinner",
    store: "Dunnes Stores",
    availableAt: ["Dunnes Stores", "Tesco", "Aldi", "Lidl"],
    prepTime: 15,
    cookTime: 90,
    servings: 4,
    calories: 510,
    protein: 44,
    carbs: 46,
    fat: 14,
    tags: ["Irish Classic", "Batch Cook", "High Protein"],
    emoji: "🥘",
    description: "Tender Bord Bia lean diced Irish beef slow-simmered with carrots, celery, baby Rooster potatoes, thyme, and rich beef stock.",
    ingredients: [
      { name: "Bord Bia lean diced Irish braising steak", amount: 700, unit: "g", aisle: "Meat & Seafood" },
      { name: "Baby Rooster potatoes, halved", amount: 600, unit: "g", aisle: "Produce" },
      { name: "Carrots, thickly sliced", amount: 3, unit: "whole", aisle: "Produce" },
      { name: "Celery stalks, chopped", amount: 2, unit: "stalks", aisle: "Produce" },
      { name: "Onions, diced", amount: 2, unit: "whole", aisle: "Produce" },
      { name: "Knorr Rich Beef Stock Pot", amount: 1, unit: "pot", aisle: "Pantry & Grains" },
      { name: "Guinness stout (or extra beef stock)", amount: 150, unit: "ml", aisle: "Pantry & Grains" },
      { name: "Tomato purée & fresh thyme", amount: 1, unit: "tbsp", aisle: "Pantry & Grains" }
    ],
    instructions: [
      "Brown the diced Irish beef in batches in a heavy casserole pot over high heat, then set aside.",
      "Sauté the onions, carrots, and celery in the same pot for 5 minutes until softened.",
      "Return the beef to the pot, stir in 1 tbsp flour and tomato purée, then pour in the Guinness and 500ml hot beef stock.",
      "Add the halved baby Rooster potatoes and fresh thyme. Cover and simmer gently for 1 hour 20 minutes (or 4 hours in a slow cooker) until beef melts in the mouth."
    ]
  },
  {
    id: "rec-kerrs-pink-shepherds-pie",
    title: "Cottage Pie with 5% Irish Steak Mince & Kerr's Pink Mash",
    category: "Dinner",
    store: "Tesco",
    availableAt: ["Dunnes Stores", "Tesco", "Aldi", "Lidl"],
    prepTime: 20,
    cookTime: 30,
    servings: 4,
    calories: 535,
    protein: 41,
    carbs: 54,
    fat: 15,
    tags: ["Irish Classic", "Family Favourite", "Batch Cook"],
    emoji: "🥧",
    description: "Savory 5% fat Bord Bia Irish steak mince with garden peas and carrots, topped with fluffy Kerr's Pink potato mash and Dubliner cheddar crust.",
    ingredients: [
      { name: "Bord Bia 5% fat Irish steak mince", amount: 600, unit: "g", aisle: "Meat & Seafood" },
      { name: "Irish Kerr's Pink or Rooster potatoes, peeled", amount: 800, unit: "g", aisle: "Produce" },
      { name: "Carrots & onion, finely diced", amount: 2, unit: "cups", aisle: "Produce" },
      { name: "Frozen garden peas", amount: 1, unit: "cup", aisle: "Produce" },
      { name: "Worcestershire sauce", amount: 1, unit: "tbsp", aisle: "Spices & Condiments" },
      { name: "Dubliner Lighter cheddar, grated", amount: 50, unit: "g", aisle: "Dairy & Eggs" },
      { name: "Beef stock", amount: 300, unit: "ml", aisle: "Pantry & Grains" }
    ],
    instructions: [
      "Boil the peeled Kerr's Pink potatoes in salted water for 18 minutes until tender, then mash with a splash of milk and black pepper.",
      "Meanwhile, brown the 5% steak mince in a large pan with the diced onion and carrots for 8 minutes.",
      "Stir in Worcestershire sauce, beef stock, and frozen peas, simmering for 10 minutes until rich and thick.",
      "Spoon the mince into an ovenproof dish, fork the fluffy mash over the top, scatter with Dubliner cheddar, and bake at 200°C for 15-20 minutes until golden."
    ]
  },
  {
    id: "rec-lidl-steak-burger-fries",
    title: "Lidl Deluxe / Aldi Specially Selected Irish Steak Burger & Wedges",
    category: "Dinner",
    store: "Lidl",
    availableAt: ["Dunnes Stores", "Tesco", "Aldi", "Lidl"],
    prepTime: 10,
    cookTime: 20,
    servings: 2,
    calories: 590,
    protein: 43,
    carbs: 56,
    fat: 20,
    tags: ["Fakeaway", "High Protein", "Aldi / Lidl"],
    emoji: "🍔",
    description: "Juicy 5% lean Irish Angus steak burger on a toasted brioche bun with Dubliner cheese, Ballymaloe relish, and sweet potato wedges.",
    ingredients: [
      { name: "Lean Irish Angus Steak Burgers (Aldi / Lidl / Dunnes)", amount: 2, unit: "burgers", aisle: "Meat & Seafood" },
      { name: "Brioche burger buns", amount: 2, unit: "buns", aisle: "Bakery" },
      { name: "Sweet potatoes, cut into wedges", amount: 400, unit: "g", aisle: "Produce" },
      { name: "Dubliner cheddar slices", amount: 2, unit: "slices", aisle: "Dairy & Eggs" },
      { name: "Ballymaloe Original Relish", amount: 2, unit: "tbsp", aisle: "Spices & Condiments" },
      { name: "Crisp lettuce & sliced tomato", amount: 1, unit: "cup", aisle: "Produce" }
    ],
    instructions: [
      "Toss sweet potato wedges with paprika, salt, and a spray of oil; roast or air-fry at 200°C for 20 minutes.",
      "Grill or pan-sear the Irish steak burgers for 5-6 minutes per side until cooked through, topping each with a slice of Dubliner cheddar for the last minute.",
      "Toast the brioche buns, spread with Ballymaloe Relish, and stack with lettuce, tomato, and the cheesy burger alongside the sweet potato wedges."
    ]
  },
  {
    id: "rec-honey-garlic-salmon",
    title: "Pan-Seared Honey Garlic Glazed Irish Atlantic Salmon",
    category: "Dinner",
    store: "Dunnes Stores",
    availableAt: ["Dunnes Stores", "Tesco", "Aldi", "Lidl"],
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    calories: 610,
    protein: 42,
    carbs: 48,
    fat: 26,
    tags: ["Omega-3", "High Protein", "30-Min Meal"],
    emoji: "🍣",
    description: "Crispy-skinned Irish Atlantic salmon glazed in sweet soy-garlic sauce, served with jasmine rice and tender broccolini.",
    ingredients: [
      { name: "Irish Atlantic salmon darne fillets", amount: 2, unit: "fillets", aisle: "Meat & Seafood" },
      { name: "Jasmine rice, uncooked", amount: 0.75, unit: "cup", aisle: "Pantry & Grains" },
      { name: "Tenderstem broccoli", amount: 250, unit: "g", aisle: "Produce" },
      { name: "Honey", amount: 2, unit: "tbsp", aisle: "Pantry & Grains" },
      { name: "Low-sodium soy sauce", amount: 2, unit: "tbsp", aisle: "Pantry & Grains" },
      { name: "Garlic cloves, minced", amount: 3, unit: "cloves", aisle: "Produce" },
      { name: "Sesame oil", amount: 1, unit: "tsp", aisle: "Pantry & Grains" }
    ],
    instructions: [
      "Cook jasmine rice according to package instructions. Steam or roast the Tenderstem broccoli for 6-8 minutes until tender-crisp.",
      "Pat salmon fillets dry with paper towels and season lightly with salt and black pepper.",
      "Whisk honey, soy sauce, minced garlic, and 1 tbsp water in a small bowl.",
      "Heat sesame oil in a skillet over medium-high heat. Sear salmon skin-side up for 4 minutes until golden, then flip.",
      "Pour the honey-garlic sauce into the pan and simmer for 3-4 minutes, spooning the glossy glaze over the salmon until cooked through.",
      "Serve over warm jasmine rice alongside the broccoli."
    ]
  },
  {
    id: "rec-tuscan-chicken-pasta",
    title: "Creamy Sun-Dried Tomato Tuscan Chicken Pasta",
    category: "Dinner",
    store: "Tesco",
    availableAt: ["Dunnes Stores", "Tesco", "Aldi", "Lidl"],
    prepTime: 10,
    cookTime: 20,
    servings: 2,
    calories: 630,
    protein: 48,
    carbs: 54,
    fat: 23,
    tags: ["Comfort Food", "High Protein", "Crowd Pleaser"],
    emoji: "🍝",
    description: "Golden pan-seared Irish chicken strips tossed with penne pasta in a light garlic-Parmesan cream sauce with baby spinach.",
    ingredients: [
      { name: "Wholewheat penne pasta", amount: 160, unit: "g", aisle: "Pantry & Grains" },
      { name: "Irish chicken breast, cut into strips", amount: 320, unit: "g", aisle: "Meat & Seafood" },
      { name: "Sun-dried tomatoes, chopped", amount: 0.35, unit: "cup", aisle: "Pantry & Grains" },
      { name: "Baby spinach", amount: 2, unit: "cups", aisle: "Produce" },
      { name: "Avonmore Light Cooking Cream or Philadelphia Light", amount: 0.5, unit: "cup", aisle: "Dairy & Eggs" },
      { name: "Grated Parmesan cheese", amount: 0.25, unit: "cup", aisle: "Dairy & Eggs" },
      { name: "Italian herbs", amount: 1, unit: "tsp", aisle: "Spices & Condiments" }
    ],
    instructions: [
      "Boil penne pasta in salted water until al dente. Reserve 1/2 cup pasta water before draining.",
      "Season chicken strips with Italian seasoning, salt, and pepper, and sear in a skillet for 5-6 minutes until golden.",
      "Add sun-dried tomatoes and garlic to the pan; sauté for 1 minute until fragrant.",
      "Stir in the light cooking cream, Parmesan, and a splash of pasta water. Add baby spinach until wilted.",
      "Toss the cooked penne into the skillet until coated in the creamy Tuscan sauce."
    ]
  },

  // ==========================================================================
  // SNACKS & HIGH-PROTEIN SUPERMARKET PICKS
  // ==========================================================================
  {
    id: "rec-aldi-lidl-protein-pot",
    title: "Aldi Brooklea / Lidl Milbona 20g Protein Pudding & Berries",
    category: "Snacks",
    store: "Aldi",
    availableAt: ["Aldi", "Lidl", "Dunnes Stores", "Tesco"],
    prepTime: 2,
    cookTime: 0,
    servings: 1,
    calories: 195,
    protein: 21,
    carbs: 18,
    fat: 3,
    tags: ["High Protein", "Aldi / Lidl", "No Cook"],
    emoji: "🍮",
    description: "Chilled chocolate or salted caramel high-protein pudding pot from Aldi or Lidl topped with fresh strawberries.",
    ingredients: [
      { name: "Aldi Brooklea or Lidl Milbona 20g Protein Pudding Pot", amount: 1, unit: "pot", aisle: "Dairy & Eggs" },
      { name: "Fresh strawberries, sliced", amount: 60, unit: "g", aisle: "Produce" }
    ],
    instructions: [
      "Pop open the chilled protein pudding pot and top with sliced fresh strawberries for an instant 21g protein snack."
    ]
  },
  {
    id: "rec-fulfil-bar-apple",
    title: "Irish Fulfil Vitamin & Protein Bar + Pink Lady Apple",
    category: "Snacks",
    store: "Tesco",
    availableAt: ["Dunnes Stores", "Tesco", "Aldi", "Lidl"],
    prepTime: 1,
    cookTime: 0,
    servings: 1,
    calories: 285,
    protein: 20,
    carbs: 32,
    fat: 8,
    tags: ["On The Go", "High Protein", "Irish Brand"],
    emoji: "🍫",
    description: "A 20g protein Fulfil bar paired with a crisp Pink Lady apple for sustained afternoon energy.",
    ingredients: [
      { name: "Fulfil Vitamin & Protein Bar (55g)", amount: 1, unit: "bar", aisle: "Pantry & Grains" },
      { name: "Pink Lady apple", amount: 1, unit: "whole", aisle: "Produce" }
    ],
    instructions: [
      "Slice the crisp Pink Lady apple and enjoy alongside your favourite Fulfil protein bar."
    ]
  },
  {
    id: "rec-dubliner-crackers-grapes",
    title: "Dubliner Lighter Cheese, Ryvita Crackers & Red Grapes",
    category: "Snacks",
    store: "Dunnes Stores",
    availableAt: ["Dunnes Stores", "Tesco", "Aldi", "Lidl"],
    prepTime: 4,
    cookTime: 0,
    servings: 1,
    calories: 245,
    protein: 15,
    carbs: 26,
    fat: 9,
    tags: ["Irish Classic", "Quick", "Vegetarian"],
    emoji: "🧀",
    description: "Sharp, nutty Dubliner Lighter cheese sliced over crunchy wholegrain Ryvita crackers with sweet seedless grapes.",
    ingredients: [
      { name: "Dubliner Lighter White or Red Cheese", amount: 40, unit: "g", aisle: "Dairy & Eggs" },
      { name: "Wholegrain Ryvita or Carr's crackers", amount: 3, unit: "crackers", aisle: "Pantry & Grains" },
      { name: "Seedless red grapes", amount: 80, unit: "g", aisle: "Produce" }
    ],
    instructions: [
      "Slice the Dubliner cheese and arrange on the wholegrain crackers alongside washed seedless red grapes."
    ]
  },
  {
    id: "rec-greek-yogurt-parfait",
    title: "Glenisk Honey Walnut Greek Yogurt Parfait",
    category: "Snacks",
    store: "Dunnes Stores",
    availableAt: ["Dunnes Stores", "Tesco", "Aldi", "Lidl"],
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    calories: 230,
    protein: 18,
    carbs: 21,
    fat: 9,
    tags: ["Quick", "High Protein", "Vegetarian"],
    emoji: "🍯",
    description: "Thick strained Glenisk Irish Greek yogurt layered with crunchy walnuts, cinnamon, and a drizzle of honey.",
    ingredients: [
      { name: "Glenisk Irish Strained Greek Yogurt", amount: 0.75, unit: "cup", aisle: "Dairy & Eggs" },
      { name: "Walnut halves, chopped", amount: 15, unit: "g", aisle: "Pantry & Grains" },
      { name: "Boyne Valley Honey", amount: 1, unit: "tsp", aisle: "Pantry & Grains" },
      { name: "Ground cinnamon", amount: 0.25, unit: "tsp", aisle: "Spices & Condiments" }
    ],
    instructions: [
      "Spoon the Glenisk Greek yogurt into a chilled bowl or glass.",
      "Top with chopped walnuts, a dusting of ground cinnamon, and a drizzle of honey."
    ]
  }
];

export const DAYS_OF_WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

export const MEAL_SLOTS = ["Breakfast", "Lunch", "Dinner", "Snacks"];

export const DEFAULT_WEEKLY_PLAN = {
  Monday: {
    Breakfast: "rec-flahavans-gold-porridge",
    Lunch: "rec-irish-chicken-fillet-roll",
    Dinner: "rec-kerrs-pink-shepherds-pie",
    Snacks: "rec-aldi-lidl-protein-pot"
  },
  Tuesday: {
    Breakfast: "rec-aldi-lidl-protein-pancakes",
    Lunch: "rec-dubliner-tuna-melt",
    Dinner: "rec-honey-garlic-salmon",
    Snacks: "rec-fulfil-bar-apple"
  },
  Wednesday: {
    Breakfast: "rec-smoked-salmon-mccambridge",
    Lunch: "rec-dunnes-veg-soup-soda-bread",
    Dinner: "rec-tuscan-chicken-pasta",
    Snacks: "rec-dubliner-crackers-grapes"
  },
  Thursday: {
    Breakfast: "rec-flahavans-gold-porridge",
    Lunch: "rec-piri-chicken-rice-bowl",
    Dinner: "rec-irish-beef-guinness-stew",
    Snacks: "rec-greek-yogurt-parfait"
  },
  Friday: {
    Breakfast: "rec-avocado-poached-eggs",
    Lunch: "rec-turkey-avocado-wrap",
    Dinner: "rec-irish-spice-bag",
    Snacks: "rec-aldi-lidl-protein-pot"
  },
  Saturday: {
    Breakfast: "rec-healthy-full-irish",
    Lunch: "rec-dunnes-veg-soup-soda-bread",
    Dinner: "rec-lidl-steak-burger-fries",
    Snacks: "rec-fulfil-bar-apple"
  },
  Sunday: {
    Breakfast: "rec-smoked-salmon-mccambridge",
    Lunch: "rec-mediterranean-chicken-bowl",
    Dinner: "rec-irish-beef-guinness-stew",
    Snacks: "rec-dubliner-crackers-grapes"
  }
};
