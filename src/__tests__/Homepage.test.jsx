import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Homepage from '../pages/Homepage';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Homepage component', () => {
  let initialState;
  let store;
  beforeEach(() => {
    initialState = {
      modal: { isOpen: false },
      companies: {
        companies: [
          {
            symbol: 'AAPL',
            companyName: 'Apple Inc.',
            marketCap: 2000000000000,
          },
          {
            symbol: 'MSFT',
            companyName: 'Microsoft Corporation',
            marketCap: 1500000000000,
          },
        ],
        filteredCompanies: [
          {
            symbol: 'AAPL',
            companyName: 'Apple Inc.',
            marketCap: 2000000000000,
          },
          {
            symbol: 'MSFT',
            companyName: 'Microsoft Corporation',
            marketCap: 1500000000000,
          },
        ],
        isLoading: false,
      },
    };
    store = mockStore(initialState);
  });
  it('should match the snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Homepage />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render the component with mock data', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <Homepage />
        </Router>
      </Provider>,
    );

    expect(
      getByText('Publicly Traded Companies based in US'),
    ).toBeInTheDocument();
    expect(getByText('AAPL')).toBeInTheDocument();
    expect(getByText('MSFT')).toBeInTheDocument();
  });
});
