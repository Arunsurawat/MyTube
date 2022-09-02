import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentVideo: "",
  loading: false,
  error: false,
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, actions) => {
      state.loading = false;
      state.currentUser = actions.payload;
    },
    fetchFailiure: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchStart, fetchSuccess, fetchFailiure } = videoSlice.actions;

export default videoSlice.reducer;
