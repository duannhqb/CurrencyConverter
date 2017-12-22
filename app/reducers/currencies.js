import { CHANGE_CURRENCY_AMOUNT, SWAP_CURRENCY } from '../actions/currencies';

const initialState = {
  baseCurrnecy: 'USD',
  quoteCurrency: 'GBP',
  amount: 100,
  conversions: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY_AMOUNT:
      return {
        ...state, // PURE WAY
        amount: action.amount || 0,
      };
    case SWAP_CURRENCY:
      return {
        ...state, // PURE WAY
        baseCurrnecy: state.quoteCurrency,
        quoteCurrency: state.baseCurrnecy,
      };
    default:
      return state;
  }
};

export default reducer;
