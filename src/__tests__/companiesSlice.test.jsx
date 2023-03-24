import companiesReducer, {
  resetFilter,
  searchByName,
  searchBySymbol,
} from '../redux/companies/companiesSlice';

describe('companies reducer', () => {
  const initialState = {
    companies: [
      { companyName: 'Apple Inc.', symbol: 'AAPL' },
      { companyName: 'Microsoft Corporation', symbol: 'MSFT' },
    ],
    filteredCompanies: [
      { companyName: 'Apple Inc.', symbol: 'AAPL' },
      { companyName: 'Microsoft Corporation', symbol: 'MSFT' },
    ],
    isLoading: false,
  };

  it('should handle resetFilter', () => {
    const state = companiesReducer(initialState, resetFilter());
    expect(state.filteredCompanies).toEqual(state.companies);
  });

  it('should handle searchByName', () => {
    const state = companiesReducer(initialState, searchByName('apple'));
    expect(state.filteredCompanies).toEqual([
      { companyName: 'Apple Inc.', symbol: 'AAPL' },
    ]);
  });

  it('should handle searchBySymbol', () => {
    const state = companiesReducer(initialState, searchBySymbol('AAP'));
    expect(state.filteredCompanies).toEqual([
      { companyName: 'Apple Inc.', symbol: 'AAPL' },
    ]);
  });
});
