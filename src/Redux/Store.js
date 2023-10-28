import { configureStore } from "@reduxjs/toolkit";
import volunteersSlice from "./volunteerRedux";
import eventsSlice from "./eventsRedux";

const store = configureStore({
  reducer: {
    volunteers: volunteersSlice,
    events: eventsSlice,
  },
});

export default store;
