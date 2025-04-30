import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProductsAPI } from "../../services/api/api.services";

const initialState = {
    productTableData: {
        data: [],
        pageIndex: 1,
        pageSize: 10,
        totalCount: 0,
        selectedIds: [],
        isAllCheckBoxClicked: false,
    },
    isOpenedProductCreateForm: false,
    isOpenedProductUpdateForm: false,
    isDisabledEditButton: true,
    isDisabledDeleteButton: true
}

export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async (payload, thunkAPI) => {
    const res =  await fetchAllProductsAPI(payload.pageIndex, payload.pageSize)
    // if(data && data.id)
    // {
    //     thunkAPI.dispatch(fetchListUsers());
    // }
      return res
    },
)

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        clickAllCheckBox: (state) => {
            state.productTableData.isAllCheckBoxClicked = !state.productTableData.isAllCheckBoxClicked;
            if(state.productTableData.isAllCheckBoxClicked){
                state.productTableData.selectedIds = state.productTableData.data.map(p => p.id);
            }else{
                state.productTableData.selectedIds = [];
            }
        },
        clickSingleCheckBox: (state, action) => {
            state.productTableData.isAllCheckBoxClicked = false;
            if(!state.productTableData.selectedIds.includes(action.payload)){
                state.productTableData.selectedIds
                = [...state.productTableData.selectedIds, action.payload];
            }else{
                state.productTableData.selectedIds =
                state.productTableData.selectedIds.filter(id => id !== action.payload);
            }
        },
        toggleProductCreateForm: (state, action) => {
            state.isOpenedProductCreateForm = !state.isOpenedProductCreateForm
        },
        toggleProductUpdateForm: (state, action) => {
            state.isOpenedProductUpdateForm = !state.isOpenedProductUpdateForm
        },
        resetCheckBoxes: (state, action) => {
            state.productTableData.isAllCheckBoxClicked = false;
            state.productTableData.selectedIds = []
        },
        setPageIndex: (state, action) => {
            state.productTableData.pageIndex = action.payload
        },
        setPageSize: (state, action) => {
            state.productTableData.pageSize = action.payload
        },
        toggleEditButtonStatus: (state, action) => {
            debugger
            if(state.productTableData.selectedIds.length !== 1){
                state.isDisabledEditButton = true;
            }else{
                state.isDisabledEditButton = false;
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.productTableData = action.payload;
            state.productTableData.selectedIds = [];
            state.productTableData.isAllCheckBoxClicked = false;
        })
    }
})

export const { 
    clickAllCheckBox,
    clickSingleCheckBox,
    toggleProductCreateForm,
    toggleProductUpdateForm,
    resetCheckBoxes,
    setPageIndex,
    setPageSize,
    toggleEditButtonStatus
} = productSlice.actions;

export default productSlice.reducer;