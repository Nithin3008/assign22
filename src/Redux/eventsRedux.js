import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  events: [],
  status: "idle",
  error: null,
};

export const fetchEvents = createAsyncThunk("events/fetchEvents", async () => {
  const response = await axios.get(
    "https://assign22.nithinrocky30.repl.co/events"
  );
  return response.data.events;
});

export const addEvent = createAsyncThunk(
  "events/addEvent",
  async (newEventData) => {
    const response = await axios.post(
      "https://assign22.nithinrocky30.repl.co/events",
      newEventData
    );
    return response.data.addedEvent;
  }
);

export const updateEvent = createAsyncThunk(
  "events/updateEvent",
  async (updatedEventData) => {
    const response = await axios.post(
      `https://assign22.nithinrocky30.repl.co/events/${updatedEventData._id}`,
      updatedEventData
    );
    return response.data.updatedEvent;
  }
);

export const deleteEvent = createAsyncThunk(
  "events/deleteEvent",
  async (eventId) => {
    const response = await axios.delete(
      `https://assign22.nithinrocky30.repl.co/events/${eventId}`
    );
    return response.data.deletedEvent;
  }
);

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchEvents.pending]: (state) => {
      state.status = "loading";
    },
    [fetchEvents.fulfilled]: (state, action) => {
      state.status = "success";
      state.events = action.payload;
    },
    [fetchEvents.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [addEvent.pending]: (state) => {
      state.status = "loading";
    },
    [addEvent.fulfilled]: (state, action) => {
      state.status = "success";
      state.events.push(action.payload);
    },
    [addEvent.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [updateEvent.pending]: (state) => {
      state.status = "loading";
    },
    [updateEvent.fulfilled]: (state, action) => {
      state.status = "success";
      const updatedEvent = action.payload;
      const index = state.events.findIndex(
        (event) => event._id === updatedEvent._id
      );
      if (index !== -1) {
        state.events[index] = updatedEvent;
      }
    },
    [updateEvent.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [deleteEvent.pending]: (state) => {
      state.status = "loading";
    },
    [deleteEvent.fulfilled]: (state, action) => {
      state.status = "success";
      state.events = state.events.filter(
        (event) => event._id !== action.payload._id
      );
    },
    [deleteEvent.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
  },
});

export default eventsSlice.reducer;
