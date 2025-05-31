import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authAPI from "../../services/api/authAPI";

const initialState = {
  userInfo: null,
  isLoadingPrivatePage: true,
};

export const getAdminInfo = createAsyncThunk(
  "auth/getAdminInfo",
  async (payload, thunkAPI) => {
    const res = await authAPI.getAdminInfo();

    return res;
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // clickAllCheckBox: (state) => {
    //     state.productTableData.isAllCheckBoxClicked = !state.productTableData.isAllCheckBoxClicked;
    //     if(state.productTableData.isAllCheckBoxClicked){
    //         state.productTableData.selectedIds = state.productTableData.data.map(p => p.id);
    //         state.isDisabledDeleteButton = false;
    //     }else{
    //         state.productTableData.selectedIds = [];
    //         state.isDisabledDeleteButton = true;
    //     }
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(getAdminInfo.fulfilled, (state, action) => {
      state.userInfo = action.payload;
      state.isLoadingPrivatePage = false;
    });
  },
});

// export const {

// } = authSlice.actions;

export default authSlice.reducer;
