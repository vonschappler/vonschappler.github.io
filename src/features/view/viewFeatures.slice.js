import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isDarkMode:
    JSON.parse(localStorage.getItem("darkmode")) ??
    window.matchMedia("(prefers-color-scheme: dark)").matches,
  isEnglish: JSON.parse(localStorage.getItem("language")) ?? true,
  headerHeight: 0,
  navBarHeight: 0,
};

const root = document.getElementsByTagName("html")[0];

const viewFeaturesSlice = createSlice({
  name: "viewFeatures",
  initialState,
  reducers: {
    setViewMode() {
      const isDarkMode =
        JSON.parse(localStorage.getItem("darkmode")) ??
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      localStorage.setItem("darkmode", JSON.stringify(isDarkMode));
      isDarkMode && root.classList.add("dark");
    },
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("darkmode", JSON.stringify(state.isDarkMode));
      root.classList.toggle("dark");
    },
    setLanguage(state) {
      state.isEnglish = !state.isEnglish;
      localStorage.setItem("language", JSON.stringify(state.isEnglish));
      state.isEnglish ? (root.lang = "en-US") : (root.lang = "pt-BR");
    },
    getNavHeight(state, action) {
      state.navBarHeight = action.payload;
    },
    getHeaderHeight(state, action) {
      state.headerHeight = action.payload;
    },
  },
});

export default viewFeaturesSlice.reducer;

export const {
  setViewMode,
  toggleDarkMode,
  setHeroContent,
  setLanguage,
  getNavHeight,
  getHeaderHeight,
} = viewFeaturesSlice.actions;
