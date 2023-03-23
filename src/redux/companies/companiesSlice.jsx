import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  apikey,
  baseUrl,
  greaterThanTenBillionEndPoint,
} from '../../utils/urls';

// initial state

const initialState = {
  companies: [],
  filteredCompanies: [],
  isLoading: true,
};

// fetch companies with capital greater than 10billion

export const getAllCompanies = createAsyncThunk(
  'api/queryCompanies',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
        `${baseUrl}${greaterThanTenBillionEndPoint}&apikey=${apikey}`,
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

// create company slice

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    searchByName: (state, action) => {
      const newState = { ...state };
      newState.filteredCompanies = newState.companies.filter((company) =>
       company.companyName.toLowerCase().includes(action.payload.toLowerCase()));
      return newState;
    },
    searchBySymbol: (state, action) => {
      const newState = { ...state };
      newState.filteredCompanies = newState.companies.filter((company) =>
       company.symbol.toLowerCase().includes(action.payload.toLowerCase()));
      return newState;
    },
    resetFilter: (state) => ({
      ...state,
      filteredCompanies: state.companies,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCompanies.pending, (state) => ({
      ...state,
      isLoading: true,
    }));

    builder.addCase(getAllCompanies.fulfilled, (state, action) => ({
      ...state,
      companies: action.payload,
      filteredCompanies: action.payload,
      isLoading: false,
    }));

    builder.addCase(getAllCompanies.rejected, (state) => ({
      ...state,
      isLoading: false,
    }));
  },
});

export const {
  toggleModal, searchByName, searchBySymbol, resetFilter,
} = companiesSlice.actions;

export default companiesSlice.reducer;
