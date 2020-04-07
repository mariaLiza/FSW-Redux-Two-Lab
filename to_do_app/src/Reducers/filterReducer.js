import { SET_VISIBILITY_FILTER } from "../Actions/actionTypes";

import { setVisibilityFilter } from "../Actions/actions";

const initialState = {};

const visibilityFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
};

export default visibilityFilterReducer;
