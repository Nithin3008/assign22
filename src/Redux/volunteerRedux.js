import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  volunteers: [],
  status: "idle",
  error: null,
};

export const fetchVolunteers = createAsyncThunk(
  "volunteers/fetchVolunteers",
  async () => {
    const response = await axios.get(
      "https://assign22.nithinrocky30.repl.co/volunteers"
    );
    return response.data.volunteers;
  }
);

export const addVolunteer = createAsyncThunk(
  "volunteers/addVolunteer",
  async (newVolunteerData) => {
    const response = await axios.post(
      "https://assign22.nithinrocky30.repl.co/volunteers",
      newVolunteerData
    );
    return response.data.addedVolunteer;
  }
);

export const updateVolunteer = createAsyncThunk(
  "volunteers/updateVolunteer",
  async (updatedVolunteerData) => {
    console.log(updatedVolunteerData._id);
    const response = await axios.post(
      `https://assign22.nithinrocky30.repl.co/volunteers/${updatedVolunteerData._id}`,
      updatedVolunteerData
    );
    return response.data.updatedVolunteer;
  }
);

export const deleteVolunteer = createAsyncThunk(
  "volunteers/deleteVolunteer",
  async (volunteerId) => {
    const response = await axios.delete(
      `https://assign22.nithinrocky30.repl.co/volunteers/${volunteerId}`
    );
    return response.data.deletedVolunteer;
  }
);

export const volunteersSlice = createSlice({
  name: "volunteers",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchVolunteers.pending]: (state) => {
      state.status = "loading";
    },
    [fetchVolunteers.fulfilled]: (state, action) => {
      state.status = "success";
      state.volunteers = action.payload;
    },
    [fetchVolunteers.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [addVolunteer.pending]: (state) => {
      state.status = "loading";
    },
    [addVolunteer.fulfilled]: (state, action) => {
      state.status = "success";
      state.volunteers.push(action.payload);
    },
    [addVolunteer.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [updateVolunteer.pending]: (state) => {
      state.status = "loading";
    },
    [updateVolunteer.fulfilled]: (state, action) => {
      state.status = "success";
      const updatedVolunteer = action.payload;
      const index = state.volunteers.findIndex(
        (volunteer) => volunteer._id === updatedVolunteer._id
      );
      if (index !== -1) {
        state.volunteers[index] = updatedVolunteer;
      }
    },
    [updateVolunteer.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [deleteVolunteer.pending]: (state) => {
      state.status = "loading";
    },
    [deleteVolunteer.fulfilled]: (state, action) => {
      state.status = "success";
      state.volunteers = state.volunteers.filter(
        (volunteer) => volunteer._id !== action.payload._id
      );
    },
    [deleteVolunteer.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
  },
});

export default volunteersSlice.reducer;
