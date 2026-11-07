// ============================================================================
// PLATEPLAN — MAIN APPLICATION CONTROLLER
// ============================================================================

import {
  getActiveFirebaseConfig,
  isFirebaseConfigured
} from "./firebase-config.js";

import {
  STARTER_RECIPES,
  DAYS_OF_WEEK,
  MEAL_SLOTS,
  DEFAULT_WEEKLY_PLAN
} from "./recipes-data.js";

// Application State
const state = {
  planTitle: "My Balanced Weekly Plan",
  calorieGoal: 2000,
  weeklyPlan: structuredClone(DEFAULT_WEEKLY_PLAN),
  customRecipes: [],
  checkedGroceries: {},
  extraGroceries: [],
  activeCategory: "All",
  searchQuery: "",
  activeSlotContext: null, // { day, slot }
  activeRecipeDetailId: null,
  authMode: "login", // "login" | "register"
  user: null, // { uid, displayName, email, isCloud }
  firebaseReady: false,
  fbAuth: null,
  fbDb: null,
  fbModules: null
};

// ============================================================================
// INITIALIZATION
// ============================================================================

document.addEventListener("DOMContentLoaded", async () => {
  loadFromLocalStorage();
  bindUIEvents();
  renderAll();
  await initFirebaseIfConfigured();
});

function getAllRecipes() {
  return [...state.customRecipes, ...STARTER_RECIPES];
}

function getRecipeById(id) {
  if (!id) return null;
  return getAllRecipes().find((r) => r.id === id) || null;
}

// ============================================================================
// LOCAL STORAGE & FIREBASE CLOUD SYNC
// ============================================================================

function loadFromLocalStorage() {
  try {
    const raw = localStorage.getItem("plateplan_app_state_v1");
    if (raw) {
      const saved = JSON.parse(raw);
      if (saved.planTitle) state.planTitle = saved.planTitle;
      if (saved.calorieGoal) state.calorieGoal = Number(saved.calorieGoal) || 2000;
      if (saved.weeklyPlan) state.weeklyPlan = saved.weeklyPlan;
      if (Array.isArray(saved.customRecipes)) state.customRecipes = saved.customRecipes;
      if (saved.checkedGroceries) state.checkedGroceries = saved.checkedGroceries;
      if (Array.isArray(saved.extraGroceries)) state.extraGroceries = saved.extraGroceries;
    }
    const localUser = localStorage.getItem("plateplan_local_user");
    if (localUser && !isFirebaseConfigured()) {
      state.user = JSON.parse(localUser);
    }
  } catch (err) {
    console.warn("Failed to load local state:", err);
  }

  document.getElementById("planTitleInput").value = state.planTitle;
  document.getElementById("calorieGoalInput").value = state.calorieGoal;
}

function saveToLocalStorage() {
  const payload = {
    planTitle: state.planTitle,
    calorieGoal: state.calorieGoal,
    weeklyPlan: state.weeklyPlan,
    customRecipes: state.customRecipes,
    checkedGroceries: state.checkedGroceries,
    extraGroceries: state.extraGroceries,
    updatedAt: new Date().toISOString()
  };
  localStorage.setItem("plateplan_app_state_v1", JSON.stringify(payload));
}

async function persistState(showToastMsg = false) {
  saveToLocalStorage();

  if (state.firebaseReady && state.user && state.user.isCloud && state.fbDb) {
    try {
      const { doc, setDoc } = state.fbModules;
      const userDocRef = doc(state.fbDb, "users", state.user.uid);
      await setDoc(
        userDocRef,
        {
          planTitle: state.planTitle,
          calorieGoal: state.calorieGoal,
          weeklyPlan: state.weeklyPlan,
          customRecipes: state.customRecipes,
          checkedGroceries: state.checkedGroceries,
          extraGroceries: state.extraGroceries,
          updatedAt: new Date().toISOString()
        },
        { merge: true }
      );
      if (showToastMsg) {
        showToast("☁️ Saved meal plan to Firebase Firestore!");
      }
    } catch (err) {
      console.error("Firestore save error:", err);
      if (showToastMsg) {
        showToast("⚠️ Saved locally (Firestore sync failed: " + err.message + ")");
      }
    }
  } else if (showToastMsg) {
    showToast("💾 Meal plan saved to browser storage!");
  }
}

async function initFirebaseIfConfigured() {
  const config = getActiveFirebaseConfig();
  updateCloudBadge(false);

  if (!isFirebaseConfigured(config)) {
    renderAuthUI();
    return;
  }

  try {
    const [appMod, authMod, firestoreMod] = await Promise.all([
      import("https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"),
      import("https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"),
      import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js")
    ]);

    const app = appMod.initializeApp(config);
    const auth = authMod.getAuth(app);
    const db = firestoreMod.getFirestore(app);

    state.fbAuth = auth;
    state.fbDb = db;
    state.firebaseReady = true;
    state.fbModules = { ...authMod, ...firestoreMod };

    updateCloudBadge(true);

    authMod.onAuthStateChanged(auth, async (fbUser) => {
      if (fbUser) {
        state.user = {
          uid: fbUser.uid,
          displayName: fbUser.displayName || fbUser.email.replace("@plateplan.user", ""),
          email: fbUser.email,
          isCloud: true
        };
        renderAuthUI();
        await loadUserPlanFromFirestore(fbUser.uid);
      } else {
        state.user = null;
        renderAuthUI();
      }
    });
  } catch (err) {
    console.error("Firebase initialization failed:", err);
    showToast("⚠️ Could not connect to Firebase. Running in Local Mode.");
    updateCloudBadge(false);
  }
}

async function loadUserPlanFromFirestore(uid) {
  if (!state.firebaseReady || !state.fbDb) return;
  try {
    const { doc, getDoc } = state.fbModules;
    const snap = await getDoc(doc(state.fbDb, "users", uid));
    if (snap.exists()) {
      const data = snap.data();
      if (data.planTitle) state.planTitle = data.planTitle;
      if (data.calorieGoal) state.calorieGoal = Number(data.calorieGoal) || 2000;
      if (data.weeklyPlan) state.weeklyPlan = data.weeklyPlan;
      if (Array.isArray(data.customRecipes)) state.customRecipes = data.customRecipes;
      if (data.checkedGroceries) state.checkedGroceries = data.checkedGroceries;
      if (Array.isArray(data.extraGroceries)) state.extraGroceries = data.extraGroceries;

      document.getElementById("planTitleInput").value = state.planTitle;
      document.getElementById("calorieGoalInput").value = state.calorieGoal;
      saveToLocalStorage();
      renderAll();
      showToast("☁️ Synced your meal plan from Firebase!");
    } else {
      // Save current plan to initialize their Firestore document
      await persistState(false);
    }
  } catch (err) {
    console.warn("Could not read Firestore document:", err);
  }
}

function updateCloudBadge(isOnline) {
  const dot = document.getElementById("cloudStatusDot");
  const text = document.getElementById("cloudStatusText");
  if (isOnline) {
    dot.className = "status-dot online";
    text.textContent = "Firebase Connected";
  } else {
    dot.className = "status-dot offline";
    text.textContent = "Local / Setup DB";
  }
}

// ============================================================================
// RENDERING
// ============================================================================

function renderAll() {
  renderSummaryBanner();
  renderWeeklyGrid();
  renderRecipesGrid();
  renderGroceryList();
  renderAuthUI();
}

function renderSummaryBanner() {
  let totalCal = 0;
  let totalProtein = 0;
  let totalCarbs = 0;
  let totalFat = 0;

  DAYS_OF_WEEK.forEach((day) => {
    MEAL_SLOTS.forEach((slot) => {
      const rec = getRecipeById(state.weeklyPlan[day]?.[slot]);
      if (rec) {
        totalCal += Number(rec.calories) || 0;
        totalProtein += Number(rec.protein) || 0;
        totalCarbs += Number(rec.carbs) || 0;
        totalFat += Number(rec.fat) || 0;
      }
    });
  });

  const avgCal = Math.round(totalCal / 7);
  const avgProtein = Math.round(totalProtein / 7);
  const avgCarbs = Math.round(totalCarbs / 7);
  const avgFat = Math.round(totalFat / 7);

  document.getElementById("avgCaloriesStat").textContent = `${avgCal} kcal`;
  document.getElementById("avgProteinStat").textContent = `${avgProtein}g`;
  document.getElementById("avgCarbsStat").textContent = `${avgCarbs}g`;
  document.getElementById("avgFatStat").textContent = `${avgFat}g`;
}

function renderWeeklyGrid() {
  const grid = document.getElementById("weeklyGrid");
  grid.innerHTML = "";

  DAYS_OF_WEEK.forEach((day) => {
    let dayCal = 0;
    let dayPro = 0;
    let dayCarb = 0;
    let dayFat = 0;

    MEAL_SLOTS.forEach((slot) => {
      const r = getRecipeById(state.weeklyPlan[day]?.[slot]);
      if (r) {
        dayCal += Number(r.calories) || 0;
        dayPro += Number(r.protein) || 0;
        dayCarb += Number(r.carbs) || 0;
        dayFat += Number(r.fat) || 0;
      }
    });

    const pct = Math.min(100, Math.round((dayCal / state.calorieGoal) * 100));
    const overGoal = dayCal > state.calorieGoal * 1.08;

    const col = document.createElement("div");
    col.className = "day-column";

    col.innerHTML = `
      <div class="day-header">
        <div class="day-name">
          <span>${day}</span>
          <span class="day-cal-badge">${dayCal} kcal</span>
        </div>
        <div class="day-progress" title="${dayCal} / ${state.calorieGoal} kcal">
          <div class="day-progress-fill ${overGoal ? "over-goal" : ""}" style="width: ${pct}%"></div>
        </div>
        <div class="day-macros-mini">
          <span>P: ${dayPro}g</span>
          <span>C: ${dayCarb}g</span>
          <span>F: ${dayFat}g</span>
        </div>
      </div>
      <div class="day-slots"></div>
    `;

    const slotsWrap = col.querySelector(".day-slots");

    MEAL_SLOTS.forEach((slot) => {
      const recId = state.weeklyPlan[day]?.[slot];
      const recipe = getRecipeById(recId);

      const slotCard = document.createElement("div");
      slotCard.className = "meal-slot-card";

      if (recipe) {
        slotCard.innerHTML = `
          <div class="slot-label-row">
            <span class="slot-type-label">${slot}</span>
            <div class="slot-actions-mini">
              <button class="slot-btn-icon" data-action="swap" title="Change recipe">⇄</button>
              <button class="slot-btn-icon" data-action="clear" title="Remove from slot">&times;</button>
            </div>
          </div>
          <div class="slot-recipe-body" title="Click for ingredients & how to cook">
            <span class="slot-emoji">${recipe.emoji || "🍽️"}</span>
            <div>
              <div class="slot-recipe-title">${escapeHtml(recipe.title)}</div>
              <div class="slot-recipe-meta">${recipe.calories} kcal • ${recipe.prepTime + recipe.cookTime}m</div>
            </div>
          </div>
        `;

        slotCard.querySelector(".slot-recipe-body").addEventListener("click", () => {
          openRecipeDetailModal(recipe.id);
        });
        slotCard.querySelector('[data-action="swap"]').addEventListener("click", (e) => {
          e.stopPropagation();
          openSlotPickerModal(day, slot);
        });
        slotCard.querySelector('[data-action="clear"]').addEventListener("click", (e) => {
          e.stopPropagation();
          state.weeklyPlan[day][slot] = null;
          persistState();
          renderAll();
        });
      } else {
        slotCard.innerHTML = `
          <div class="slot-label-row">
            <span class="slot-type-label">${slot}</span>
          </div>
          <button class="slot-empty-btn">+ Add ${slot}</button>
        `;
        slotCard.querySelector(".slot-empty-btn").addEventListener("click", () => {
          openSlotPickerModal(day, slot);
        });
      }

      slotsWrap.appendChild(slotCard);
    });

    grid.appendChild(col);
  });
}

function renderRecipesGrid() {
  const container = document.getElementById("recipesGrid");
  container.innerHTML = "";

  const query = state.searchQuery.trim().toLowerCase();
  const filtered = getAllRecipes().filter((rec) => {
    const matchesCategory =
      state.activeCategory === "All" || rec.category === state.activeCategory;
    if (!matchesCategory) return false;
    if (!query) return true;

    const inTitle = rec.title.toLowerCase().includes(query);
    const inDesc = (rec.description || "").toLowerCase().includes(query);
    const inTags = (rec.tags || []).some((t) => t.toLowerCase().includes(query));
    const inIng = (rec.ingredients || []).some((i) =>
      i.name.toLowerCase().includes(query)
    );
    return inTitle || inDesc || inTags || inIng;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align:center; padding: 48px; background:#fff; border-radius:14px;">
        <h3>No matching recipes found</h3>
        <p class="muted">Try clearing your search filter or click "Add Custom Recipe" to create your own!</p>
      </div>
    `;
    return;
  }

  filtered.forEach((rec) => {
    const card = document.createElement("article");
    card.className = "recipe-card";
    card.innerHTML = `
      <div>
        <div class="recipe-card-top">
          <div>
            <span class="category-badge">${escapeHtml(rec.category)}</span>
            <h3>${escapeHtml(rec.title)}</h3>
          </div>
          <div class="recipe-emoji-badge">${rec.emoji || "🍲"}</div>
        </div>
        <p class="recipe-card-desc">${escapeHtml(rec.description || "")}</p>
      </div>

      <div>
        <div class="recipe-macros-row">
          <div class="macro-cell"><span>Calories</span><strong>${rec.calories}</strong></div>
          <div class="macro-cell"><span>Protein</span><strong>${rec.protein}g</strong></div>
          <div class="macro-cell"><span>Carbs</span><strong>${rec.carbs}g</strong></div>
          <div class="macro-cell"><span>Fat</span><strong>${rec.fat}g</strong></div>
        </div>

        <div class="recipe-card-footer" style="margin-top: 12px;">
          <span>⏱️ ${rec.prepTime + rec.cookTime} mins • 🍽️ ${rec.servings} serv</span>
          <button class="btn btn-outline btn-sm" data-open-recipe="${rec.id}">
            👩‍🍳 View &amp; Cook
          </button>
        </div>
      </div>
    `;

    card.querySelector(`[data-open-recipe="${rec.id}"]`).addEventListener("click", () => {
      openRecipeDetailModal(rec.id);
    });

    container.appendChild(card);
  });
}

// ============================================================================
// AUTOMATIC GROCERY LIST AGGREGATOR
// ============================================================================

function computeAggregatedGroceries() {
  const map = new Map();

  DAYS_OF_WEEK.forEach((day) => {
    MEAL_SLOTS.forEach((slot) => {
      const rec = getRecipeById(state.weeklyPlan[day]?.[slot]);
      if (!rec || !Array.isArray(rec.ingredients)) return;

      rec.ingredients.forEach((ing) => {
        const key = `${ing.name.toLowerCase().trim()}__${(ing.unit || "").toLowerCase().trim()}`;
        if (!map.has(key)) {
          map.set(key, {
            key,
            name: ing.name,
            amount: Number(ing.amount) || 0,
            unit: ing.unit || "",
            aisle: ing.aisle || "Pantry & Grains",
            isCustom: false
          });
        } else {
          const existing = map.get(key);
          existing.amount = Math.round((existing.amount + (Number(ing.amount) || 0)) * 100) / 100;
        }
      });
    });
  });

  state.extraGroceries.forEach((extra, idx) => {
    const key = `custom_${idx}_${extra.name.toLowerCase()}`;
    map.set(key, {
      key,
      name: extra.name,
      amount: 1,
      unit: "item",
      aisle: extra.aisle || "Household & Other",
      isCustom: true,
      customIndex: idx
    });
  });

  return Array.from(map.values());
}

function renderGroceryList() {
  const items = computeAggregatedGroceries();
  document.getElementById("groceryCountBadge").textContent = items.length;

  const byAisle = {};
  items.forEach((item) => {
    if (!byAisle[item.aisle]) byAisle[item.aisle] = [];
    byAisle[item.aisle].push(item);
  });

  const container = document.getElementById("groceryAislesContainer");
  container.innerHTML = "";

  const aisles = Object.keys(byAisle).sort();
  if (aisles.length === 0) {
    container.innerHTML = `<p class="muted">Your weekly plan is currently empty. Add meals to generate your shopping list!</p>`;
    return;
  }

  aisles.forEach((aisle) => {
    const card = document.createElement("div");
    card.className = "aisle-card";

    const aisleItems = byAisle[aisle];
    card.innerHTML = `
      <div class="aisle-header">
        <h3>${escapeHtml(aisle)}</h3>
        <span class="badge-pill">${aisleItems.length}</span>
      </div>
      <ul class="aisle-list"></ul>
    `;

    const ul = card.querySelector(".aisle-list");
    aisleItems.forEach((item) => {
      const isChecked = Boolean(state.checkedGroceries[item.key]);
      const li = document.createElement("li");
      li.className = `grocery-item ${isChecked ? "checked" : ""}`;

      li.innerHTML = `
        <label>
          <input type="checkbox" ${isChecked ? "checked" : ""} />
          <span>${escapeHtml(item.name)}</span>
        </label>
        <div style="display:flex; align-items:center; gap:6px;">
          <span class="grocery-qty">${item.amount} ${escapeHtml(item.unit)}</span>
          ${
            item.isCustom
              ? `<button class="slot-btn-icon" title="Remove item">&times;</button>`
              : ""
          }
        </div>
      `;

      li.querySelector('input[type="checkbox"]').addEventListener("change", (e) => {
        state.checkedGroceries[item.key] = e.target.checked;
        persistState();
        renderGroceryList();
      });

      if (item.isCustom) {
        li.querySelector(".slot-btn-icon").addEventListener("click", () => {
          state.extraGroceries.splice(item.customIndex, 1);
          persistState();
          renderGroceryList();
        });
      }

      ul.appendChild(li);
    });

    container.appendChild(card);
  });
}

// ============================================================================
// MODALS: RECIPE DETAILS, SLOT PICKER, CUSTOM RECIPE
// ============================================================================

function openRecipeDetailModal(recipeId) {
  const rec = getRecipeById(recipeId);
  if (!rec) return;

  state.activeRecipeDetailId = recipeId;
  document.getElementById("detailEmoji").textContent = rec.emoji || "🍲";
  document.getElementById("detailCategoryBadge").textContent = rec.category;
  document.getElementById("detailTitle").textContent = rec.title;
  document.getElementById("detailDescription").textContent = rec.description || "";
  document.getElementById("detailPrep").textContent = `${rec.prepTime} mins`;
  document.getElementById("detailCook").textContent = `${rec.cookTime} mins`;
  document.getElementById("detailServings").textContent = rec.servings;
  document.getElementById("detailCalories").textContent = `${rec.calories} kcal`;
  document.getElementById("detailProtein").textContent = `${rec.protein}g`;
  document.getElementById("detailCarbs").textContent = `${rec.carbs}g`;
  document.getElementById("detailFat").textContent = `${rec.fat}g`;

  const ingList = document.getElementById("detailIngredientsList");
  ingList.innerHTML = "";
  (rec.ingredients || []).forEach((ing) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${escapeHtml(ing.name)}</span>
      <strong>${ing.amount} ${escapeHtml(ing.unit)}</strong>
    `;
    ingList.appendChild(li);
  });

  const stepList = document.getElementById("detailInstructionsList");
  stepList.innerHTML = "";
  (rec.instructions || []).forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    stepList.appendChild(li);
  });

  // Pre-select matching slot category if applicable
  if (MEAL_SLOTS.includes(rec.category)) {
    document.getElementById("assignSlotSelect").value = rec.category;
  }

  document.getElementById("recipeDetailModal").classList.remove("hidden");
}

function openSlotPickerModal(day, slot) {
  state.activeSlotContext = { day, slot };
  document.getElementById("slotPickerHeading").textContent = `Select Meal for ${day} — ${slot}`;
  const searchInput = document.getElementById("slotPickerSearch");
  searchInput.value = "";
  renderSlotPickerItems("");
  document.getElementById("slotPickerModal").classList.remove("hidden");
  searchInput.focus();
}

function renderSlotPickerItems(filterText) {
  const list = document.getElementById("slotPickerList");
  list.innerHTML = "";
  const q = filterText.trim().toLowerCase();

  // Sort recipes so matching slot category appears first
  const targetSlot = state.activeSlotContext?.slot;
  const sorted = [...getAllRecipes()].sort((a, b) => {
    if (a.category === targetSlot && b.category !== targetSlot) return -1;
    if (b.category === targetSlot && a.category !== targetSlot) return 1;
    return a.title.localeCompare(b.title);
  });

  sorted
    .filter((r) => !q || r.title.toLowerCase().includes(q) || r.category.toLowerCase().includes(q))
    .forEach((rec) => {
      const row = document.createElement("div");
      row.className = "slot-picker-item";
      row.innerHTML = `
        <div style="display:flex; align-items:center; gap:10px;">
          <span style="font-size:1.5rem;">${rec.emoji || "🍲"}</span>
          <div>
            <strong>${escapeHtml(rec.title)}</strong>
            <div class="muted" style="font-size:0.78rem;">
              ${rec.category} • ${rec.calories} kcal • P:${rec.protein}g C:${rec.carbs}g F:${rec.fat}g
            </div>
          </div>
        </div>
        <span class="btn btn-outline btn-sm">Select</span>
      `;
      row.addEventListener("click", () => {
        const { day, slot } = state.activeSlotContext;
        state.weeklyPlan[day][slot] = rec.id;
        document.getElementById("slotPickerModal").classList.add("hidden");
        persistState();
        renderAll();
        showToast(`✅ Added "${rec.title}" to ${day} ${slot}`);
      });
      list.appendChild(row);
    });
}

// ============================================================================
// AUTHENTICATION HANDLERS (GOOGLE & USERNAME/PASSWORD)
// ============================================================================

function renderAuthUI() {
  const authArea = document.getElementById("authArea");
  if (state.user) {
    authArea.innerHTML = `
      <div class="user-chip">
        <span>👤 ${escapeHtml(state.user.displayName)}</span>
        <button id="btnSignOut" class="btn btn-ghost btn-sm" style="padding:3px 8px;">Sign Out</button>
      </div>
    `;
    document.getElementById("btnSignOut").addEventListener("click", handleSignOut);
  } else {
    authArea.innerHTML = `
      <button id="btnOpenAuth" class="btn btn-primary btn-sm">🔐 Sign In</button>
    `;
    document.getElementById("btnOpenAuth").addEventListener("click", () => {
      document.getElementById("authModal").classList.remove("hidden");
    });
  }
}

function formatIdentifierAsEmail(identifier) {
  const clean = identifier.trim();
  if (clean.includes("@")) return clean;
  return `${clean.toLowerCase().replace(/[^a-z0-9._-]/g, "")}@plateplan.user`;
}

async function handleGoogleSignIn() {
  const errEl = document.getElementById("authErrorMsg");
  errEl.classList.add("hidden");

  if (state.firebaseReady && state.fbAuth) {
    try {
      const { GoogleAuthProvider, signInWithPopup } = state.fbModules;
      const provider = new GoogleAuthProvider();
      await signInWithPopup(state.fbAuth, provider);
      document.getElementById("authModal").classList.add("hidden");
      showToast("🎉 Signed in with Google!");
    } catch (err) {
      errEl.textContent = err.message;
      errEl.classList.remove("hidden");
    }
  } else {
    // Local Demo Google login when Firebase is not yet configured
    state.user = {
      uid: "local-google-user",
      displayName: "Google Chef (Local Mode)",
      email: "chef@gmail.com",
      isCloud: false
    };
    localStorage.setItem("plateplan_local_user", JSON.stringify(state.user));
    document.getElementById("authModal").classList.add("hidden");
    renderAuthUI();
    showToast("👋 Signed in (Local Mode). Configure Firebase for cloud sync!");
  }
}

async function handleCredentialsSubmit(e) {
  e.preventDefault();
  const identifier = document.getElementById("authIdentifier").value.trim();
  const password = document.getElementById("authPassword").value;
  const errEl = document.getElementById("authErrorMsg");
  errEl.classList.add("hidden");

  const email = formatIdentifierAsEmail(identifier);
  const displayUsername = identifier.includes("@") ? identifier.split("@")[0] : identifier;

  if (state.firebaseReady && state.fbAuth) {
    try {
      const {
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        updateProfile
      } = state.fbModules;

      if (state.authMode === "register") {
        const cred = await createUserWithEmailAndPassword(state.fbAuth, email, password);
        await updateProfile(cred.user, { displayName: displayUsername });
        showToast(`🎉 Account "${displayUsername}" created & synced!`);
      } else {
        await signInWithEmailAndPassword(state.fbAuth, email, password);
        showToast(`👋 Welcome back, ${displayUsername}!`);
      }
      document.getElementById("authModal").classList.add("hidden");
    } catch (err) {
      errEl.textContent = err.message;
      errEl.classList.remove("hidden");
    }
  } else {
    // Local credential login fallback
    state.user = {
      uid: `local-${displayUsername}`,
      displayName: displayUsername,
      email,
      isCloud: false
    };
    localStorage.setItem("plateplan_local_user", JSON.stringify(state.user));
    document.getElementById("authModal").classList.add("hidden");
    renderAuthUI();
    showToast(`👋 Signed in as ${displayUsername} (Local Mode)`);
  }
}

async function handleSignOut() {
  if (state.firebaseReady && state.fbAuth) {
    const { signOut } = state.fbModules;
    await signOut(state.fbAuth);
  }
  localStorage.removeItem("plateplan_local_user");
  state.user = null;
  renderAuthUI();
  showToast("Signed out.");
}

// ============================================================================
// PDF EXPORT & PRINT GENERATOR
// ============================================================================

function buildPrintableSheetHTML() {
  const groceries = computeAggregatedGroceries();
  const byAisle = {};
  groceries.forEach((g) => {
    if (!byAisle[g.aisle]) byAisle[g.aisle] = [];
    byAisle[g.aisle].push(g);
  });

  // Collect unique recipes used in the weekly plan
  const usedRecipeIds = new Set();
  DAYS_OF_WEEK.forEach((day) => {
    MEAL_SLOTS.forEach((slot) => {
      const id = state.weeklyPlan[day]?.[slot];
      if (id) usedRecipeIds.add(id);
    });
  });

  const usedRecipes = Array.from(usedRecipeIds)
    .map((id) => getRecipeById(id))
    .filter(Boolean);

  const rowsHtml = DAYS_OF_WEEK.map((day) => {
    let dayCal = 0;
    const cells = MEAL_SLOTS.map((slot) => {
      const r = getRecipeById(state.weeklyPlan[day]?.[slot]);
      if (!r) return `<td><em>—</em></td>`;
      dayCal += Number(r.calories) || 0;
      return `<td><strong>${escapeHtml(r.title)}</strong><br/><small>${r.calories} kcal • P:${r.protein}g</small></td>`;
    }).join("");
    return `<tr><td><strong>${day}</strong><br/><small>${dayCal} kcal</small></td>${cells}</tr>`;
  }).join("");

  const groceryBoxesHtml = Object.keys(byAisle)
    .sort()
    .map((aisle) => {
      const list = byAisle[aisle]
        .map((item) => `<li>☐ ${escapeHtml(item.name)} (${item.amount} ${escapeHtml(item.unit)})</li>`)
        .join("");
      return `
        <div class="pdf-grocery-box">
          <strong>${escapeHtml(aisle)}</strong>
          <ul style="margin:6px 0 0; padding-left:16px;">${list}</ul>
        </div>
      `;
    })
    .join("");

  const recipesHtml = usedRecipes
    .map((rec) => {
      const ings = (rec.ingredients || [])
        .map((i) => `${i.amount} ${escapeHtml(i.unit)} ${escapeHtml(i.name)}`)
        .join(", ");
      const steps = (rec.instructions || [])
        .map((s, i) => `${i + 1}. ${escapeHtml(s)}`)
        .join("<br/>");
      return `
        <div class="pdf-recipe-card">
          <strong>${rec.emoji || "🍲"} ${escapeHtml(rec.title)} (${rec.calories} kcal)</strong>
          <div style="margin:4px 0; color:#4f6254;">
            Prep: ${rec.prepTime}m | Cook: ${rec.cookTime}m | Servings: ${rec.servings}
          </div>
          <div style="margin-bottom:6px;"><strong>Ingredients:</strong> ${ings}</div>
          <div><strong>How to Cook:</strong><br/>${steps}</div>
        </div>
      `;
    })
    .join("");

  return `
    <div class="pdf-header">
      <div>
        <h1 style="font-size:1.5rem; color:#1f7a4c;">🥗 ${escapeHtml(state.planTitle)}</h1>
        <small>Generated by PlatePlan • Daily Target: ${state.calorieGoal} kcal</small>
      </div>
      <div><small>${new Date().toLocaleDateString()}</small></div>
    </div>

    <h3 style="margin-bottom:8px;">📅 7-Day Meal Schedule</h3>
    <table class="pdf-table">
      <thead>
        <tr>
          <th>Day</th>
          <th>Breakfast</th>
          <th>Lunch</th>
          <th>Dinner</th>
          <th>Snacks</th>
        </tr>
      </thead>
      <tbody>${rowsHtml}</tbody>
    </table>

    <h3 style="margin-bottom:8px;">🛒 Complete Shopping List</h3>
    <div class="pdf-grocery-columns">${groceryBoxesHtml}</div>

    <h3 style="margin-bottom:8px;">👩‍🍳 Recipes &amp; Cooking Instructions</h3>
    <div class="pdf-recipes-section">${recipesHtml}</div>
  `;
}

async function downloadPlanAsPdf() {
  const sheet = document.getElementById("pdfExportContainer");
  sheet.innerHTML = buildPrintableSheetHTML();
  sheet.classList.add("generating-pdf");

  showToast("📄 Generating your PDF meal plan & recipes...");

  if (window.html2pdf) {
    const filename = `${state.planTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "meal-plan"}.pdf`;
    const opt = {
      margin: 8,
      filename,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    };
    try {
      await window.html2pdf().set(opt).from(sheet).save();
      showToast("✅ PDF downloaded!");
    } catch (err) {
      console.error("PDF generation fallback to print:", err);
      window.print();
    } finally {
      sheet.classList.remove("generating-pdf");
    }
  } else {
    window.print();
    sheet.classList.remove("generating-pdf");
  }
}

// ============================================================================
// UI EVENT BINDINGS
// ============================================================================

function bindUIEvents() {
  // Navigation Tabs
  document.querySelectorAll(".nav-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".nav-tab").forEach((b) => b.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(`tab-${btn.dataset.tab}`).classList.add("active");
    });
  });

  // Plan Title & Calorie Goal
  document.getElementById("planTitleInput").addEventListener("change", (e) => {
    state.planTitle = e.target.value.trim() || "My Weekly Meal Plan";
    persistState();
  });

  document.getElementById("calorieGoalInput").addEventListener("change", (e) => {
    state.calorieGoal = Math.max(800, Number(e.target.value) || 2000);
    persistState();
    renderWeeklyGrid();
  });

  // Auto-Generate Balanced Week
  document.getElementById("btnAutoGenerate").addEventListener("click", () => {
    const all = getAllRecipes();
    DAYS_OF_WEEK.forEach((day) => {
      MEAL_SLOTS.forEach((slot) => {
        const pool = all.filter((r) => r.category === slot);
        const list = pool.length > 0 ? pool : all;
        const pick = list[Math.floor(Math.random() * list.length)];
        state.weeklyPlan[day][slot] = pick.id;
      });
    });
    persistState();
    renderAll();
    showToast("✨ Auto-generated a fresh 7-day meal plan!");
  });

  // Explicit Save Button
  document.getElementById("btnSaveCloud").addEventListener("click", () => {
    persistState(true);
  });

  // Clear Week
  document.getElementById("btnClearWeek").addEventListener("click", () => {
    DAYS_OF_WEEK.forEach((day) => {
      MEAL_SLOTS.forEach((slot) => {
        state.weeklyPlan[day][slot] = null;
      });
    });
    persistState();
    renderAll();
    showToast("🗑️ Cleared weekly meal slots.");
  });

  // Print & PDF Download
  document.getElementById("btnDownloadPdf").addEventListener("click", downloadPlanAsPdf);
  document.getElementById("btnDownloadGroceryPdf").addEventListener("click", downloadPlanAsPdf);
  document.getElementById("btnPrintView").addEventListener("click", () => {
    const sheet = document.getElementById("pdfExportContainer");
    sheet.innerHTML = buildPrintableSheetHTML();
    window.print();
  });

  // Recipe Search & Category Filter
  document.getElementById("recipeSearchInput").addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    renderRecipesGrid();
  });

  document.querySelectorAll("#categoryFilterBar .filter-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      document
        .querySelectorAll("#categoryFilterBar .filter-chip")
        .forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      state.activeCategory = chip.dataset.category;
      renderRecipesGrid();
    });
  });

  // Assign Recipe from Detail Modal
  document.getElementById("btnAssignRecipeToSlot").addEventListener("click", () => {
    const day = document.getElementById("assignDaySelect").value;
    const slot = document.getElementById("assignSlotSelect").value;
    if (state.activeRecipeDetailId) {
      state.weeklyPlan[day][slot] = state.activeRecipeDetailId;
      persistState();
      renderAll();
      document.getElementById("recipeDetailModal").classList.add("hidden");
      showToast(`📅 Assigned recipe to ${day} — ${slot}!`);
    }
  });

  // Slot Picker Search
  document.getElementById("slotPickerSearch").addEventListener("input", (e) => {
    renderSlotPickerItems(e.target.value);
  });

  // Create Custom Recipe Modal
  document.getElementById("btnNewRecipe").addEventListener("click", () => {
    document.getElementById("newRecipeModal").classList.remove("hidden");
  });

  document.getElementById("newRecipeForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const ingredientsRaw = document
      .getElementById("recIngredientsText")
      .value.split("\n")
      .map((l) => l.trim())
      .filter(Boolean);

    const ingredients = ingredientsRaw.map((line) => {
      const parts = line.split("|").map((p) => p.trim());
      if (parts.length >= 3) {
        return {
          amount: Number(parts[0]) || 1,
          unit: parts[1] || "unit",
          name: parts[2],
          aisle: parts[3] || "Pantry & Grains"
        };
      }
      return { amount: 1, unit: "serving", name: line, aisle: "Pantry & Grains" };
    });

    const instructions = document
      .getElementById("recInstructionsText")
      .value.split("\n")
      .map((l) => l.trim())
      .filter(Boolean);

    const newRec = {
      id: "custom-" + Date.now(),
      title: document.getElementById("recTitle").value.trim(),
      category: document.getElementById("recCategory").value,
      description: document.getElementById("recDesc").value.trim(),
      prepTime: Number(document.getElementById("recPrep").value) || 10,
      cookTime: Number(document.getElementById("recCook").value) || 15,
      servings: Number(document.getElementById("recServings").value) || 2,
      emoji: document.getElementById("recEmoji").value.trim() || "🍲",
      calories: Number(document.getElementById("recCalories").value) || 400,
      protein: Number(document.getElementById("recProtein").value) || 25,
      carbs: Number(document.getElementById("recCarbs").value) || 35,
      fat: Number(document.getElementById("recFat").value) || 15,
      tags: ["Custom"],
      ingredients,
      instructions
    };

    state.customRecipes.unshift(newRec);
    persistState();
    renderAll();
    e.target.reset();
    document.getElementById("newRecipeModal").classList.add("hidden");
    showToast(`👩‍🍳 Created recipe "${newRec.title}"!`);
  });

  // Grocery Form & Actions
  document.getElementById("customGroceryForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("customGroceryName");
    const aisleSelect = document.getElementById("customGroceryAisle");
    const name = nameInput.value.trim();
    if (!name) return;

    state.extraGroceries.push({ name, aisle: aisleSelect.value });
    nameInput.value = "";
    persistState();
    renderGroceryList();
    showToast(`🛒 Added "${name}" to grocery list`);
  });

  document.getElementById("btnUncheckAllGrocery").addEventListener("click", () => {
    state.checkedGroceries = {};
    persistState();
    renderGroceryList();
  });

  // Auth Modal Mode Switching
  document.querySelectorAll(".auth-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".auth-tab").forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      state.authMode = tab.dataset.authMode;
      const isReg = state.authMode === "register";
      document.getElementById("authModalTitle").textContent = isReg
        ? "Create PlatePlan Account"
        : "Sign In to PlatePlan";
      document.getElementById("btnSubmitCredentials").textContent = isReg
        ? "Create Account"
        : "Sign In";
    });
  });

  document.getElementById("btnGoogleSignIn").addEventListener("click", handleGoogleSignIn);
  document
    .getElementById("credentialsAuthForm")
    .addEventListener("submit", handleCredentialsSubmit);

  // Firebase Config Modal
  document.getElementById("btnFirebaseSetup").addEventListener("click", () => {
    const cfg = getActiveFirebaseConfig();
    if (isFirebaseConfigured(cfg)) {
      document.getElementById("fbApiKey").value = cfg.apiKey || "";
      document.getElementById("fbAuthDomain").value = cfg.authDomain || "";
      document.getElementById("fbProjectId").value = cfg.projectId || "";
      document.getElementById("fbAppId").value = cfg.appId || "";
    }
    document.getElementById("firebaseSetupModal").classList.remove("hidden");
  });

  document.getElementById("firebaseConfigForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const newConfig = {
      apiKey: document.getElementById("fbApiKey").value.trim(),
      authDomain: document.getElementById("fbAuthDomain").value.trim(),
      projectId: document.getElementById("fbProjectId").value.trim(),
      appId: document.getElementById("fbAppId").value.trim()
    };
    localStorage.setItem("plateplan_firebase_config", JSON.stringify(newConfig));
    document.getElementById("firebaseSetupModal").classList.add("hidden");
    showToast("🔥 Firebase configuration saved! Connecting...");
    await initFirebaseIfConfigured();
  });

  document.getElementById("btnResetFirebaseConfig").addEventListener("click", () => {
    localStorage.removeItem("plateplan_firebase_config");
    state.firebaseReady = false;
    updateCloudBadge(false);
    document.getElementById("firebaseSetupModal").classList.add("hidden");
    showToast("Switched to Local Demo Mode.");
  });

  // Close Modals
  document.querySelectorAll("[data-close-modal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.closeModal;
      document.getElementById(targetId).classList.add("hidden");
    });
  });

  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        backdrop.classList.add("hidden");
      }
    });
  });
}

// ============================================================================
// UTILITIES
// ============================================================================

function showToast(message) {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3400);
}

function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
