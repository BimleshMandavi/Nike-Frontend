import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
// import { persistStore } from "redux-persist";

const store = configureStore({
  reducer: rootReducer,
});

export default store;

// export let persistor = persistStore(store);
