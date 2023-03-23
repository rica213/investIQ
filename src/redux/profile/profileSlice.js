import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseUrl, apikey, profileEndpoint } from '../../utils/urls';

const initialState = {
  details: [],
  currentCompany: '',
  isLoading: false,
};

// fetch profile of a given company

export const getProfile = createAsyncThunk(
  'api/queryProfile',
  async (companySymbol, thunkAPI) => {
    try {
      const response = await fetch(
        `${baseUrl}${profileEndpoint}${companySymbol}?apikey=${apikey}`,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.data?.message || 'We have a problem fetching data...',
      );
    }
  },
);

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    // use symbol instead of company name to reference
    updateCurrentCompany: (state, action) => ({
      ...state, currentCompany: action.payload,
    }
    ),
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.pending, (state) => ({
      ...state,
      isLoading: true,
    }));

    builder.addCase(getProfile.fulfilled, (state, action) => ({
      ...state,
      details: action.payload,
      isLoading: false,
    }));

    builder.addCase(getProfile.rejected, (state) => ({
      ...state,
      isLoading: false,
    }));
  },
});

export const { updateCurrentCompany } = profileSlice.actions;

export default profileSlice.reducer;
