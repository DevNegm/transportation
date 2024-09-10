import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://abdelrahman237.pythonanywhere.com";

export const postSignUp = createAsyncThunk(
    "main/signup/post",
    async (body,{rejectWithValue}) => {
      try {
        const response = await axios.post(`${BASE_URL}/auth/registration/`, body);
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

  export const postLogin = createAsyncThunk(
    "main/login/post",
    async (body, {rejectWithValue}) => {
      try {
        const response = await axios.post(`${BASE_URL}/auth/login/`, body);
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

  export const postLogout = createAsyncThunk(
    "main/logout/post",
    async (body,{rejectWithValue}) => {
      try {
        const response = await axios.post(`${BASE_URL}/auth/logout/`);
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

  export const postDeleteUser = createAsyncThunk(
    "main/deleteuser/post",
    async (id,{rejectWithValue,getState}) => {
      try {
        const response = await axios.delete(`${BASE_URL}/auth/user/${id}/delete/`, {
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

  export const resetPasswordSendCode = createAsyncThunk(
    "main/resetpasswordsendcode/post",
    async (data, { rejectWithValue }) => {
     
      try {
        const response = await axios.post(`${BASE_URL}/auth/reset-code-send/`, data);
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

  export const resetPasswordCodeConfirm = createAsyncThunk(
    "main/resetpasswordcodeconfirm/post",
    async (data, { rejectWithValue }) => {
   
      try {
        const response = await axios.post(`${BASE_URL}/auth/reset-code-confirm/`, data);
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
  export const resetPassword = createAsyncThunk(
    "main/resetpassword/post",
    async (data, { rejectWithValue }) => {
      try {
        const response = await axios.post(`${BASE_URL}/auth/reset-password/`, data);
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

  export const changePassword = createAsyncThunk(
    "main/changepassword/post",
    async (data, { getState, rejectWithValue }) => {
     
      try {
        const response = await axios.post(`${BASE_URL}/auth/password/change/`, data, {
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

  export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('token') || null,
        isAuth: localStorage.getItem('token') ? true : false,
        signUpLoading:false,
        signUpError:false,
        loginLoading:false,
        loginError:false,
        logoutLoading:false,
        logoutError:false,
        changePasswordLoading:false,
        changePasswordError:false,
        resetPasswordSendCodeLoading:false,
        resetPasswordSendCodeError:false,
        resetPasswordCodeConfirmLoading:false,
        resetPasswordCodeConfirmError:false,
        resetPasswordLoading:false,
        resetPasswordError:false,
        deleteUserLoading:false,
        deleteUserError:false,
    },
    reducers: {
        logout: (state) => {
            state.token = null;
            localStorage.clear()
        },
    },
    extraReducers: (builder) => {
        builder.addCase(postSignUp.pending, (state) => {
          state.signUpLoading = true;
          state.signUpError = false;
        });
        builder.addCase(postSignUp.fulfilled, (state, action) => {
          state.signUpLoading = false;
          state.signUpError = false;
          state.signUpData = action.payload;
          const data = action?.payload;
          state.token = data?.access;
          data?.access && localStorage.setItem("token", data?.access)
          data?.access && localStorage.setItem("refershToken", data?.refresh)
        });
        builder.addCase(postSignUp.rejected, (state, action) => {
          state.signUpLoading = false;
          state.signUpError = action.payload;
        });

          builder.addCase(postLogin.pending, (state) => {
              state.loginLoading = true;
              state.loginError = false;
          });
          builder.addCase(postLogin.fulfilled, (state, action) => {
            state.loginLoading = false;
            state.loginError = false;
            state.loginData = action?.payload;
            const data = action?.payload;
            state.token = data?.access;
            state.isAuth = true;
            data?.access && localStorage.setItem("token", data?.access)
            data?.access && localStorage.setItem("refershToken", data?.refresh)
          });
          builder.addCase(postLogin.rejected, (state, action) => {
            state.loginLoading = false;
            state.loginError = action.payload;
          });

          builder.addCase(postLogout.pending, (state) => {
            state.logoutLoading = true;
            state.logoutError = false;
          });
          builder.addCase(postLogout.fulfilled, (state, action) => {
            state.logoutLoading = false;
            state.logoutError = false;
            state.logoutData = action.payload;
            localStorage.clear();
            state.token = null;
            state.isAuth = false;
          });
          builder.addCase(postLogout.rejected, (state, action) => {
            state.logoutLoading = false;
            state.logoutError = action.payload;
          });
          builder.addCase(postDeleteUser.pending, (state) => {
            state.deleteUserLoading = true;
            state.deleteUserError = false;
          });
          builder.addCase(postDeleteUser.fulfilled, (state, action) => {
            state.deleteUserLoading = false;
            state.deleteUserError = false;
            localStorage.clear();
            state.token = null;
            state.isAuth = false;
          });
          builder.addCase(postDeleteUser.rejected, (state, action) => {
            state.deleteUserLoading = false;
            state.deleteUserError = {
              status: true,
              data: action.payload,
            };
          });

         

          builder.addCase(changePassword.pending, (state) => {
            state.changePasswordLoading = true;
            state.changePasswordError = false;
          });
          builder.addCase(changePassword.fulfilled, (state, action) => {
            state.changePasswordLoading = false;
            state.changePasswordError = false;
          });
          builder.addCase(changePassword.rejected, (state, action) => {
            state.changePasswordLoading = false;
            state.changePasswordError = {
              status: true,
              data: action.payload,
            };
          });

          builder.addCase(resetPasswordSendCode.pending, (state) => {
            state.resetPasswordSendCodeLoading = true;
            state.resetPasswordSendCodeError = false;
          });
          builder.addCase(resetPasswordSendCode.fulfilled, (state, action) => {
            state.resetPasswordSendCodeLoading = false;
            state.resetPasswordSendCodeError = false;
          });
          builder.addCase(resetPasswordSendCode.rejected, (state, action) => {
            state.resetPasswordSendCodeLoading = false;
            state.resetPasswordSendCodeError = {
              status: true,
              data: action.payload,
            };
          });

          builder.addCase(resetPasswordCodeConfirm.pending, (state) => {
            state.resetPasswordCodeConfirmLoading = true;
            state.resetPasswordCodeConfirmError = false;
          });
          builder.addCase(resetPasswordCodeConfirm.fulfilled, (state, action) => {
            state.resetPasswordCodeConfirmLoading = false;
            state.resetPasswordCodeConfirmError = false;
          });
          builder.addCase(resetPasswordCodeConfirm.rejected, (state, action) => {
            state.resetPasswordCodeConfirmLoading = false;
            state.resetPasswordCodeConfirmError = {
              status: true,
              data: action.payload,
            };
          });

          builder.addCase(resetPassword.pending, (state) => {
            state.resetPasswordLoading = true;
            state.resetPasswordError = false;
          });
          builder.addCase(resetPassword.fulfilled, (state, action) => {
            state.resetPasswordLoading = false;
            state.resetPasswordError = false;
          });
          builder.addCase(resetPassword.rejected, (state, action) => {
            state.resetPasswordLoading = false;
            state.resetPasswordError = {
              status: true,
              data: action.payload,
            };
          });
  
      },
})

export const authReducer = authSlice.reducer;
export const { logout, saveToken  } = authSlice.actions;