// ============================================================================
// FIREBASE CONFIGURATION & CLOUD SYNC SERVICE
// ============================================================================
// Configured for Firebase project: plateplan-meals

export const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyApUZs8ipw7PXAMLNRS17xbMkSkZpG2jRY",
  authDomain: "plateplan-meals.firebaseapp.com",
  projectId: "plateplan-meals",
  storageBucket: "plateplan-meals.firebasestorage.app",
  messagingSenderId: "787550911928",
  appId: "1:787550911928:web:a7225fff3a32222c37e34d",
  measurementId: "G-T9PGN2PQQX"
};

// Load saved config from localStorage if user entered a custom override via the UI modal
export function getActiveFirebaseConfig() {
  try {
    const saved = localStorage.getItem("plateplan_firebase_config");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.apiKey && parsed.apiKey !== "YOUR_API_KEY") {
        return parsed;
      }
    }
  } catch (e) {
    console.warn("Could not read saved Firebase config:", e);
  }
  return DEFAULT_FIREBASE_CONFIG;
}

export function isFirebaseConfigured(config = getActiveFirebaseConfig()) {
  return Boolean(
    config &&
    config.apiKey &&
    config.apiKey !== "YOUR_API_KEY" &&
    config.projectId &&
    config.projectId !== "YOUR_PROJECT_ID"
  );
}
