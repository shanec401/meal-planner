// ============================================================================
// STARTER RECIPE LIBRARY
// ============================================================================
// Each recipe includes full macro breakdown, categorized ingredients for automatic
// grocery list generation, and step-by-step cooking instructions.

export const STARTER_RECIPES = [
  {
    id: "rec-avocado-poached-eggs",
    title: "Sourdough Avocado Toast & Poached Eggs",
    category: "Breakfast",
    prepTime: 10,
    cookTime: 5,
    servings: 1,
    calories: 420,
    protein: 19,
    carbs: 34,
    fat: 24,
    tags: ["High Protein", "Vegetarian", "Quick"],
    emoji: "🥑",
    description: "Crispy artisanal sourdough topped with lemon-herb smashed avocado and two runny poached eggs.",
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
    prepTime: 8,
    cookTime: 0,
    servings: 1,
    calories: 390,
    protein: 24,
    carbs: 48,
    fat: 11,
    tags: ["Meal Prep", "High Fiber", "No Cook"],
    emoji: "🥣",
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
  {
    id: "rec-spinach-feta-omelet",
    title: "Mediterranean Spinach & Feta Omelet",
    category: "Breakfast",
    prepTime: 5,
    cookTime: 7,
    servings: 1,
    calories: 340,
    protein: 26,
    carbs: 5,
    fat: 24,
    tags: ["Low Carb", "Keto Friendly", "Quick"],
    emoji: "🍳",
    description: "Fluffy three-egg omelet stuffed with wilted baby spinach, sun-dried tomatoes, and tangy crumbled feta.",
    ingredients: [
      { name: "Large eggs", amount: 3, unit: "whole", aisle: "Dairy & Eggs" },
      { name: "Baby spinach", amount: 1, unit: "cup", aisle: "Produce" },
      { name: "Feta cheese, crumbled", amount: 30, unit: "g", aisle: "Dairy & Eggs" },
      { name: "Cherry tomatoes, halved", amount: 0.5, unit: "cup", aisle: "Produce" },
      { name: "Extra virgin olive oil", amount: 1, unit: "tsp", aisle: "Pantry & Grains" },
      { name: "Dried oregano", amount: 0.5, unit: "tsp", aisle: "Spices & Condiments" }
    ],
    instructions: [
      "Whisk the 3 eggs with oregano, a pinch of salt, and black pepper until frothy.",
      "Heat olive oil in a non-stick skillet over medium heat. Add baby spinach and cherry tomatoes, sautéing for 1-2 minutes until spinach wilts.",
      "Transfer vegetables to a plate. Pour the whisked eggs into the warm skillet and tilt to spread evenly.",
      "As the edges set, gently push cooked egg toward the center. When mostly set, scatter spinach, tomatoes, and feta over one half.",
      "Fold the omelet in half, cook for another 30 seconds, and slide onto a warm plate."
    ]
  },
  {
    id: "rec-mediterranean-chicken-bowl",
    title: "Grilled Lemon Herb Chicken Quinoa Bowl",
    category: "Lunch",
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
      "Grill or pan-sear the chicken over medium-high heat for 6-7 minutes per side until internal temperature reaches 165°F (74°C). Let rest 5 minutes, then slice.",
      "Divide cooked quinoa between two bowls. Arrange sliced chicken, cucumber, cherry tomatoes, and olives on top.",
      "Finish each bowl with 2 tablespoons of cool tzatziki and a squeeze of fresh lemon."
    ]
  },
  {
    id: "rec-turkey-avocado-wrap",
    title: "Chipotle Turkey & Crispy Bacon Club Wrap",
    category: "Lunch",
    prepTime: 10,
    cookTime: 5,
    servings: 1,
    calories: 480,
    protein: 36,
    carbs: 38,
    fat: 20,
    tags: ["Quick", "High Protein", "Portable"],
    emoji: "🌯",
    description: "Whole wheat tortilla loaded with roasted turkey breast, turkey bacon, avocado, romaine, and smoky Greek yogurt spread.",
    ingredients: [
      { name: "Whole wheat large tortilla", amount: 1, unit: "whole", aisle: "Bakery" },
      { name: "Sliced roasted turkey breast", amount: 120, unit: "g", aisle: "Meat & Seafood" },
      { name: "Turkey bacon", amount: 2, unit: "strips", aisle: "Meat & Seafood" },
      { name: "Ripe avocado, sliced", amount: 0.5, unit: "whole", aisle: "Produce" },
      { name: "Romaine lettuce leaves", amount: 2, unit: "leaves", aisle: "Produce" },
      { name: "Sliced tomato", amount: 3, unit: "slices", aisle: "Produce" },
      { name: "Greek yogurt chipotle spread", amount: 1.5, unit: "tbsp", aisle: "Dairy & Eggs" }
    ],
    instructions: [
      "Crisp the turkey bacon strips in a skillet over medium heat for 2-3 minutes per side.",
      "Warm the whole wheat tortilla briefly in the dry pan for 15 seconds so it folds easily.",
      "Spread the chipotle Greek yogurt down the center of the tortilla.",
      "Layer the sliced turkey breast, crispy bacon, avocado slices, tomato, and shredded romaine lettuce.",
      "Fold in the sides and roll tightly like a burrito. Slice diagonally in half to serve."
    ]
  },
  {
    id: "rec-chickpea-tahini-salad",
    title: "Roasted Chickpea & Kale Caesar Salad",
    category: "Lunch",
    prepTime: 12,
    cookTime: 20,
    servings: 2,
    calories: 410,
    protein: 16,
    carbs: 44,
    fat: 20,
    tags: ["Vegetarian", "High Fiber", "Meal Prep"],
    emoji: "🥬",
    description: "Massaged Tuscan kale tossed in creamy lemon-tahini dressing and topped with smoky oven-roasted chickpeas.",
    ingredients: [
      { name: "Canned chickpeas, drained", amount: 1, unit: "can", aisle: "Pantry & Grains" },
      { name: "Lacinato (Tuscan) kale, chopped", amount: 4, unit: "cups", aisle: "Produce" },
      { name: "Tahini paste", amount: 3, unit: "tbsp", aisle: "Pantry & Grains" },
      { name: "Parmesan cheese, shaved", amount: 30, unit: "g", aisle: "Dairy & Eggs" },
      { name: "Fresh lemon juice", amount: 2, unit: "tbsp", aisle: "Produce" },
      { name: "Smoked paprika", amount: 1, unit: "tsp", aisle: "Spices & Condiments" },
      { name: "Garlic clove, minced", amount: 1, unit: "clove", aisle: "Produce" }
    ],
    instructions: [
      "Preheat oven to 400°F (200°C). Pat chickpeas dry with a paper towel, toss with olive oil, smoked paprika, and salt, and roast for 20 minutes until crunchy.",
      "Whisk together tahini, lemon juice, minced garlic, 2 tbsp warm water, and a pinch of salt until creamy.",
      "Place chopped kale in a large bowl, drizzle with half the dressing, and massage with clean hands for 1 minute to soften the leaves.",
      "Top the dressed kale with crispy roasted chickpeas, shaved Parmesan, and remaining dressing."
    ]
  },
  {
    id: "rec-honey-garlic-salmon",
    title: "Pan-Seared Honey Garlic Glazed Salmon",
    category: "Dinner",
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    calories: 610,
    protein: 42,
    carbs: 48,
    fat: 26,
    tags: ["Omega-3", "High Protein", "30-Min Meal"],
    emoji: "🍣",
    description: "Crispy-skinned Atlantic salmon glazed in sweet soy-garlic sauce, served with jasmine rice and tender broccolini.",
    ingredients: [
      { name: "Salmon fillets", amount: 2, unit: "fillets", aisle: "Meat & Seafood" },
      { name: "Jasmine rice, uncooked", amount: 0.75, unit: "cup", aisle: "Pantry & Grains" },
      { name: "Broccolini or broccoli florets", amount: 250, unit: "g", aisle: "Produce" },
      { name: "Honey", amount: 2, unit: "tbsp", aisle: "Pantry & Grains" },
      { name: "Low-sodium soy sauce", amount: 2, unit: "tbsp", aisle: "Pantry & Grains" },
      { name: "Garlic cloves, minced", amount: 3, unit: "cloves", aisle: "Produce" },
      { name: "Sesame oil", amount: 1, unit: "tsp", aisle: "Pantry & Grains" }
    ],
    instructions: [
      "Cook jasmine rice according to package instructions. Steam or roast the broccolini for 6-8 minutes until tender-crisp.",
      "Pat salmon fillets dry with paper towels and season lightly with salt and black pepper.",
      "Whisk honey, soy sauce, minced garlic, and 1 tbsp water in a small bowl.",
      "Heat sesame oil in a skillet over medium-high heat. Sear salmon skin-side up for 4 minutes until golden, then flip.",
      "Pour the honey-garlic sauce into the pan and simmer for 3-4 minutes, spooning the glossy glaze over the salmon until cooked through.",
      "Serve over warm jasmine rice alongside the broccolini."
    ]
  },
  {
    id: "rec-beef-broccoli-stirfry",
    title: "Ginger Flank Steak & Broccoli Stir-Fry",
    category: "Dinner",
    prepTime: 15,
    cookTime: 12,
    servings: 2,
    calories: 560,
    protein: 45,
    carbs: 49,
    fat: 20,
    tags: ["High Protein", "Quick", "Dairy-Free"],
    emoji: "🥩",
    description: "Thinly sliced tender flank steak and crisp broccoli florets tossed in a savory ginger-garlic brown sauce over brown rice.",
    ingredients: [
      { name: "Flank steak, thinly sliced", amount: 350, unit: "g", aisle: "Meat & Seafood" },
      { name: "Broccoli florets", amount: 3, unit: "cups", aisle: "Produce" },
      { name: "Cooked brown rice", amount: 2, unit: "cups", aisle: "Pantry & Grains" },
      { name: "Low-sodium soy sauce", amount: 3, unit: "tbsp", aisle: "Pantry & Grains" },
      { name: "Fresh ginger, grated", amount: 1, unit: "tbsp", aisle: "Produce" },
      { name: "Cornstarch", amount: 1, unit: "tbsp", aisle: "Pantry & Grains" },
      { name: "Sesame seeds", amount: 1, unit: "tsp", aisle: "Spices & Condiments" }
    ],
    instructions: [
      "Slice the flank steak thinly against the grain and toss with 1 tsp cornstarch and 1 tbsp soy sauce.",
      "Whisk remaining soy sauce, grated ginger, 1/3 cup water, and remaining cornstarch in a small bowl.",
      "Heat a wok or large skillet over high heat. Sear beef for 2 minutes until browned on edges, then remove to a plate.",
      "Add broccoli florets with 2 tbsp water, cover for 2 minutes until bright green and tender-crisp.",
      "Return beef to the pan, pour in the ginger sauce, and toss for 1-2 minutes until thickened and glossy. Serve over brown rice."
    ]
  },
  {
    id: "rec-tuscan-chicken-pasta",
    title: "Creamy Sun-Dried Tomato Tuscan Chicken Pasta",
    category: "Dinner",
    prepTime: 10,
    cookTime: 20,
    servings: 2,
    calories: 630,
    protein: 48,
    carbs: 54,
    fat: 23,
    tags: ["Comfort Food", "High Protein", "Crowd Pleaser"],
    emoji: "🍝",
    description: "Golden pan-seared chicken strips tossed with penne pasta in a light garlic-Parmesan cream sauce with spinach.",
    ingredients: [
      { name: "Whole wheat or chickpea penne", amount: 160, unit: "g", aisle: "Pantry & Grains" },
      { name: "Chicken breast, cut into strips", amount: 320, unit: "g", aisle: "Meat & Seafood" },
      { name: "Sun-dried tomatoes, chopped", amount: 0.35, unit: "cup", aisle: "Pantry & Grains" },
      { name: "Baby spinach", amount: 2, unit: "cups", aisle: "Produce" },
      { name: "Light cream or half-and-half", amount: 0.5, unit: "cup", aisle: "Dairy & Eggs" },
      { name: "Grated Parmesan cheese", amount: 0.25, unit: "cup", aisle: "Dairy & Eggs" },
      { name: "Italian seasoning", amount: 1, unit: "tsp", aisle: "Spices & Condiments" }
    ],
    instructions: [
      "Boil penne pasta in salted water until al dente. Reserve 1/2 cup pasta water before draining.",
      "Season chicken strips with Italian seasoning, salt, and pepper, and sear in a skillet for 5-6 minutes until golden.",
      "Add sun-dried tomatoes and garlic to the pan; sauté for 1 minute until fragrant.",
      "Pour in the light cream, Parmesan, and a splash of pasta water. Stir in the baby spinach until wilted.",
      "Toss the cooked penne into the skillet until coated in the creamy Tuscan sauce."
    ]
  },
  {
    id: "rec-greek-yogurt-parfait",
    title: "Honey Walnut Greek Yogurt Parfait",
    category: "Snacks",
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    calories: 230,
    protein: 18,
    carbs: 21,
    fat: 9,
    tags: ["Quick", "High Protein", "Vegetarian"],
    emoji: "🍯",
    description: "Thick strained Greek yogurt layered with crunchy walnuts, cinnamon, and a drizzle of raw wildflower honey.",
    ingredients: [
      { name: "Greek yogurt (2% or 0%)", amount: 0.75, unit: "cup", aisle: "Dairy & Eggs" },
      { name: "Walnut halves, chopped", amount: 15, unit: "g", aisle: "Pantry & Grains" },
      { name: "Raw honey", amount: 1, unit: "tsp", aisle: "Pantry & Grains" },
      { name: "Ground cinnamon", amount: 0.25, unit: "tsp", aisle: "Spices & Condiments" }
    ],
    instructions: [
      "Spoon the Greek yogurt into a chilled bowl or glass.",
      "Top with chopped walnuts, a dusting of ground cinnamon, and a warm drizzle of raw honey."
    ]
  },
  {
    id: "rec-apple-pb-bites",
    title: "Crisp Honeycrisp Apple & Peanut Butter Slices",
    category: "Snacks",
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    calories: 260,
    protein: 8,
    carbs: 29,
    fat: 14,
    tags: ["Vegan", "Gluten-Free", "5-Min"],
    emoji: "🍎",
    description: "Sweet Honeycrisp apple wedges topped with natural creamy peanut butter and hemp seeds.",
    ingredients: [
      { name: "Honeycrisp apple", amount: 1, unit: "whole", aisle: "Produce" },
      { name: "Natural peanut butter", amount: 1.5, unit: "tbsp", aisle: "Pantry & Grains" },
      { name: "Hemp seeds or chia seeds", amount: 1, unit: "tsp", aisle: "Pantry & Grains" }
    ],
    instructions: [
      "Core and slice the Honeycrisp apple into 8 even wedges.",
      "Arrange on a plate, drizzle or spread with natural peanut butter, and sprinkle with hemp seeds."
    ]
  },
  {
    id: "rec-hummus-veggie-box",
    title: "Roasted Red Pepper Hummus & Veggie Box",
    category: "Snacks",
    prepTime: 6,
    cookTime: 0,
    servings: 1,
    calories: 210,
    protein: 7,
    carbs: 24,
    fat: 10,
    tags: ["Vegan", "Fiber Rich", "No Cook"],
    emoji: "🥕",
    description: "Crunchy rainbow bell peppers, baby carrots, and cucumber spears paired with creamy red pepper hummus.",
    ingredients: [
      { name: "Roasted red pepper hummus", amount: 0.35, unit: "cup", aisle: "Dairy & Eggs" },
      { name: "Baby carrots", amount: 1, unit: "cup", aisle: "Produce" },
      { name: "Red bell pepper, sliced", amount: 0.5, unit: "whole", aisle: "Produce" },
      { name: "Cucumber spears", amount: 0.5, unit: "cup", aisle: "Produce" }
    ],
    instructions: [
      "Wash and slice the bell pepper and cucumber into dippable spears.",
      "Portion the hummus into a dipping cup and arrange the fresh vegetables around it."
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
    Breakfast: "rec-avocado-poached-eggs",
    Lunch: "rec-mediterranean-chicken-bowl",
    Dinner: "rec-honey-garlic-salmon",
    Snacks: "rec-greek-yogurt-parfait"
  },
  Tuesday: {
    Breakfast: "rec-berry-protein-oats",
    Lunch: "rec-turkey-avocado-wrap",
    Dinner: "rec-beef-broccoli-stirfry",
    Snacks: "rec-apple-pb-bites"
  },
  Wednesday: {
    Breakfast: "rec-spinach-feta-omelet",
    Lunch: "rec-chickpea-tahini-salad",
    Dinner: "rec-tuscan-chicken-pasta",
    Snacks: "rec-hummus-veggie-box"
  },
  Thursday: {
    Breakfast: "rec-avocado-poached-eggs",
    Lunch: "rec-mediterranean-chicken-bowl",
    Dinner: "rec-honey-garlic-salmon",
    Snacks: "rec-greek-yogurt-parfait"
  },
  Friday: {
    Breakfast: "rec-berry-protein-oats",
    Lunch: "rec-turkey-avocado-wrap",
    Dinner: "rec-tuscan-chicken-pasta",
    Snacks: "rec-apple-pb-bites"
  },
  Saturday: {
    Breakfast: "rec-spinach-feta-omelet",
    Lunch: "rec-chickpea-tahini-salad",
    Dinner: "rec-beef-broccoli-stirfry",
    Snacks: "rec-hummus-veggie-box"
  },
  Sunday: {
    Breakfast: "rec-avocado-poached-eggs",
    Lunch: "rec-mediterranean-chicken-bowl",
    Dinner: "rec-honey-garlic-salmon",
    Snacks: "rec-greek-yogurt-parfait"
  }
};
