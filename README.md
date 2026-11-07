# 🥗 PlatePlan — Meal Planner, Recipes & Grocery Cloud (GitHub Pages + Firebase)

PlatePlan is a zero-build static web application designed for **GitHub Pages** with **Firebase Authentication** (Google Sign-In & Username/Email + Password) and **Cloud Firestore** database persistence, plus one-click **PDF Download** and **Print View**.

---

## ✨ Features

1. **7-Day Weekly Meal Calendar** (`Breakfast`, `Lunch`, `Dinner`, `Snacks`)
   - Live daily and weekly average **Calories, Protein, Carbs, and Fat** tracking
   - Customizable daily calorie target with visual progress bars
   - One-click **Auto-Fill Week** for instant balanced meal plans
2. **Recipes & Step-by-Step Cooking Instructions**
   - Built-in starter recipe catalog with prep/cook times, servings, macros, categorized ingredients, and step-by-step instructions
   - **Create Custom Recipes** with your own ingredients, macros, and cooking steps
3. **Automatic Grocery / Shopping List Generator**
   - Automatically aggregates and sums ingredient quantities across your entire 7-day plan
   - Groups items by supermarket aisle (`Produce`, `Meat & Seafood`, `Dairy & Eggs`, `Pantry & Grains`, `Bakery`, `Spices & Condiments`)
   - Interactive checkboxes + ability to add extra household items
4. **Firebase Auth & Firestore Database**
   - Sign in with **Google** or **Username/Email & Password**
   - Automatically syncs meal plans, custom recipes, and shopping lists to Cloud Firestore (`users/{uid}`)
   - Works out-of-the-box in **Local Mode** (`localStorage`) before Firebase keys are added
5. **PDF Export & Print Sheet**
   - Uses `html2pdf.js` and `@media print` CSS to export a clean multi-section PDF containing the 7-day meal schedule, categorized shopping list, and full recipe cards with cooking steps.

---

## 🚀 How to Host on GitHub Pages

1. Create a new repository on GitHub (e.g., `meal-planner`).
2. Push the files in this folder (`index.html`, `styles.css`, `app.js`, `recipes-data.js`, `firebase-config.js`, `README.md`) to the `main` branch.
3. On GitHub, go to **Settings &rarr; Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/ (root)`, and click **Save**.
5. Your site will be live at `https://<your-github-username>.github.io/<repo-name>/`.

---

## 🔥 How to Connect Firebase (Auth & Firestore)

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a project.
2. Click **Add app** (`</>`) to register a Web App and copy your `firebaseConfig` keys.
3. Open `firebase-config.js` and paste your `apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId`, and `appId` (or paste them directly in the UI by clicking **Local Mode / Setup DB** in the top bar).
4. In Firebase Console &rarr; **Authentication &rarr; Sign-in method**:
   - Enable **Google**
   - Enable **Email/Password** (PlatePlan automatically supports both full emails and plain usernames!)
5. In Firebase Console &rarr; **Authentication &rarr; Settings &rarr; Authorized domains**:
   - Add `<your-github-username>.github.io`
6. In Firebase Console &rarr; **Firestore Database**:
   - Create a database and publish these security rules so each signed-in user can read/write their own meal plan:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```
