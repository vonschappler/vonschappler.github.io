import { configureStore } from "@reduxjs/toolkit";
import viewFeaturesReducer from "./features/view/viewFeatures.slice";
import emailsFeaturesReducer from "./features/emails/emails.slice";
import displayTabsReducer from "./features/displayTabs/displayTabs.slice";

const store = configureStore({
  reducer: {
    viewSettings: viewFeaturesReducer,
    emails: emailsFeaturesReducer,
    currentTab: displayTabsReducer,
  },
});

export default store;
