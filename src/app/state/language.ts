import { create } from "zustand";

interface LanguageState {
  language: "en" | "ja";
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: "en",
  toggleLanguage: () => set((state) => ({ language: state.language === "en" ? "ja" : "en" })),
}));
