import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://api.tabadule.com";







export const addProduct = createAsyncThunk(
  "main/productcreate/post",
  async (data, {getState, rejectWithValue }) => {
    const postForm = new FormData();
    data?.title && postForm.append("title", data?.title);
    data?.description && postForm.append("description", data?.description);
    data?.category && postForm.append("category", data?.category);
    data?.subcategory && postForm.append("subcategory", data?.subcategory);
    data?.tags && postForm.append("tags", data?.tags);
    data?.sell_price && postForm.append("sell_price", data?.sell_price);
    data?.rent_price && postForm.append("rent_price", data?.rent_price);
    data?.rent_duration && postForm.append("rent_duration", data?.rent_duration);
    data?.private && postForm.append("private", data?.private);
    if (data?.image1 instanceof File) postForm.append("image1", data.image1);
    if (data?.image2 instanceof File) postForm.append("image2", data.image2);
    if (data?.image3 instanceof File) postForm.append("image3", data.image3);
    if (data?.image4 instanceof File) postForm.append("image4", data.image4);

    try {
      const response = await axios.post(`${BASE_URL}/api/products/create/`, postForm, {
        headers: {
          Authorization: `Bearer ${getState()?.auth?.token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const editProduct = createAsyncThunk(
  "main/productedit/patch",
  async (data, {getState, rejectWithValue }) => {
    const postForm = new FormData();
    data?.title && postForm.append("title", data?.title);
    data?.description && postForm.append("description", data?.description);
    data?.category && postForm.append("category", data?.category);
    data?.subcategory && postForm.append("subcategory", data?.subcategory);
    data?.tags && postForm.append("tags", data?.tags);
    data?.sell_price && postForm.append("sell_price", data?.sell_price);
    data?.rent_price && postForm.append("rent_price", data?.rent_price);
    if (data?.image1 instanceof File) postForm.append("image1", data.image1);
    else if (data?.image1 === '') postForm.append("image1", '');
    if (data?.image2 instanceof File) postForm.append("image2", data.image2);
    else if (data?.image2 === '') postForm.append("image2", '');
    if (data?.image3 instanceof File) postForm.append("image3", data.image3);
    else if (data?.image3 === '') postForm.append("image3", '');
    if (data?.image4 instanceof File) postForm.append("image4", data.image4);
    else if (data?.image4 === '') postForm.append("image4", '');
 
    try {
      const response = await axios.patch(`${BASE_URL}/api/products/update/${data?.id}/`, postForm, {
        headers: {
          Authorization: `Bearer ${getState()?.auth?.token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "main/productdelete/delete",
  async (id, {getState, rejectWithValue }) => {
    try {
      const response = await axios.delete(`${BASE_URL}/api/products/delete/${id}/`, {
        headers: {
          Authorization: `Bearer ${getState()?.auth?.token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);





  
  export const mainSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('token') || null,
        isAuth: localStorage.getItem('token') ? true : false,
        products:[],
        productsLoading:false,
        productsError:false,
        addProductLoading:false,
        addProductError:false,
        deleteProductLoading:false,
        deleteProductError:false,
        editProductLoading:false,
        editProductError:false,
    },
    reducers: {},
    extraReducers: (builder) => {
        
          builder.addCase(addProduct.pending, (state) => {
            state.addProductLoading = true;
            state.addProductError = false;
          });
          builder.addCase(addProduct.fulfilled, (state, action) => {
            state.addProductLoading = false;
            state.addProductError = false;
          });
          builder.addCase(addProduct.rejected, (state, action) => {
            state.addProductLoading = false;
            state.addProductError = {
              status: true,
              data: action.payload,
            };
          });
          builder.addCase(editProduct.pending, (state) => {
            state.editProductLoading = true;
            state.editProductError = false;
          });
          builder.addCase(editProduct.fulfilled, (state, action) => {
            state.editProductLoading = false;
            state.editProductError = false;
          });
          builder.addCase(editProduct.rejected, (state, action) => {
            state.editProductLoading = false;
            state.editProductError = {
              status: true,
              data: action.payload,
            };
          });
          builder.addCase(deleteProduct.pending, (state) => {
            state.deleteProductLoading = true;
            state.deleteProductError = false;
          });
          builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.deleteProductLoading = false;
            state.deleteProductError = false;
          });
          builder.addCase(deleteProduct.rejected, (state, action) => {
            state.deleteProductLoading = false;
            state.deleteProductError = {
              status: true,
              data: action.payload,
            };
          });
        
      
  
      },
})

export const mainReducer = mainSlice.reducer;