import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import Profile from '../pages/Profile';

const mockStore = configureMockStore([]);

describe('Profile component', () => {
  it('should match snapshot', () => {
    const store = mockStore({
      profile: {
        details: [
          {
            companyName: 'Apple Inc.',
            symbol: 'AAPL',
            image: 'https://example.com/apple.png',
            price: '124.97',
            currency: 'USD',
            ceo: 'Tim Cook',
            industry: 'Technology',
            website: 'https://www.apple.com/',
          },
        ],
        isLoading: false,
      },
    });

    const { container } = render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
