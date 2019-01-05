import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  activeFilters: {},
  quickAddToCartQty: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.QUICK_ADD_TO_CART_QTY:
      return updateObject(state, {
        quickAddToCartQty: action.input
      });
    case actionTypes.TOGGLE_FILTER:
      return updateObject(state, {
        activeFilters: action.input
      });
    case actionTypes.CLEAR_FILTERS:
      return updateObject(state, {
        activeFilters: {}
      });
    default:
      return state;
  }
};
