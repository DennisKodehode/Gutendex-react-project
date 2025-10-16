import { useCallback, useSyncExternalStore } from "react";

const KEY = "gutendex-favorites";

// Simple module-scoped store
const store = {
  set: new Set(),
  listeners: new Set(),
};

// Load once on module init
function loadFromStorage() {
  try {
    const arr = JSON.parse(localStorage.getItem(KEY) || "[]");
    store.set = new Set(arr.map(String));
  } catch {
    store.set = new Set();
  }
}
loadFromStorage();

function persist() {
  localStorage.setItem(KEY, JSON.stringify([...store.set]));
}

function emit() {
  for (const l of store.listeners) l();
}

// External-store API for React ----------------------------------------------
function subscribe(listener) {
  store.listeners.add(listener);

  // Cross-tab sync: storage event only fires in *other* tabs
  const onStorage = (e) => {
    if (e.key === KEY) {
      loadFromStorage();
      emit();
    }
  };
  window.addEventListener("storage", onStorage);

  return () => {
    store.listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot() {
  // IMPORTANT: return the SAME reference unless data actually changed.
  // We only replace store.set when we mutate, so this is stable.
  return store.set;
}

// Mutators -------------------------------------------------------------------
function add(id) {
  const key = String(id);
  if (!store.set.has(key)) {
    const next = new Set(store.set);
    next.add(key);
    store.set = next; // replace reference to signal change
    persist();
    emit();
  }
}

function remove(id) {
  const key = String(id);
  if (store.set.has(key)) {
    const next = new Set(store.set);
    next.delete(key);
    store.set = next; // replace reference to signal change
    persist();
    emit();
  }
}

function toggle(id) {
  const key = String(id);
  if (store.set.has(key)) remove(key);
  else add(key);
}

// Hook -----------------------------------------------------------------------
export function useFavorites() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  const isFavorite = useCallback((id) => snapshot.has(String(id)), [snapshot]);
  const toggleFavorite = useCallback((id) => toggle(id), []);
  const all = [...snapshot];

  return { isFavorite, toggleFavorite, all };
}
