import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authAPI from "../../services/api/authAPI";

const initialState = {
  userInfo: {
    fullname: "",
  },
  isLoggedIn: false,
};

export const getCustomerInfo = createAsyncThunk(
  "auth/getCustomerInfo",
  async (payload, thunkAPI) => {
    debugger;
    const res = await authAPI.getCustomerInfo();

    return res;
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCustomerInfo.fulfilled, (state, action) => {
      state.userInfo = action.payload;
      state.isLoggedIn = true;
    });
  },
});

export default authSlice.reducer;
