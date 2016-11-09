import {
  FETCH_CURRENCY_M0,
  FETCH_CURRENCY_M1,
  FETCH_CURRENCY_M2,
  FETCH_CURRENCY_M3,
  FETCH_CURRENCY_M4,
  FETCH_CURRENCY_M5,
  FETCH_CURRENCY_M6,
  CURRENCY_ITEMS
} from '../actions';

const INITIAL_STATE = {
  items: [],
  m0: {},
  m1: {},
  m2: {},
  m3: {},
  m4: {},
  m5: {},
  m6: {}
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
      case CURRENCY_ITEMS:
      console.log(action)
        return { ...state, items: [...action.payload] };

      case FETCH_CURRENCY_M0:
        return { ...state, m0: action.payload.data };

      case FETCH_CURRENCY_M1:
        return { ...state, m1: action.payload.data };

      case FETCH_CURRENCY_M2:
        return { ...state, m2: action.payload.data };

      case FETCH_CURRENCY_M3:
        return { ...state, m3: action.payload.data };

      case FETCH_CURRENCY_M4:
        return { ...state, m4: action.payload.data };

      case FETCH_CURRENCY_M5:
        return { ...state, m5: action.payload.data };

      case FETCH_CURRENCY_M6:
        return { ...state, m6: action.payload.data };

      default:
        return state;
    }
}