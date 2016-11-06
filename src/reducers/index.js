import { combineReducers } from 'redux';
import CurrencyReducer from './CurrencyReducer';

const rootReducer = combineReducers({
  currency: CurrencyReducer,
});

export default rootReducer;
