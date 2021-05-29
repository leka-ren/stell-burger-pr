import {
  GET_DATA_INGREDIENTS,
  GET_DATA_REQUEST,
  GET_DATA_FAILED,
} from "../actions/burgerActions";

const initialState = {
  ingredients: [],
  request: false,
  failed: false,
  ingredientsConstructor: [],
  currentIngredientsInfo: {},
  lastOrder: {},
};

export const burgerReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_DATA_INGREDIENTS: {
      return {
        ...state,
        request: false,
        failed: false,
        ingredients: action.items,
      };
    }
    case GET_DATA_REQUEST: {
      return {
        ...state,
        request: true,
      };
    }
    case GET_DATA_FAILED: {
      return {
        ...state,
        failed: true,
      };
    }
    default:
      return state;
  }
};
