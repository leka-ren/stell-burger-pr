import {
  GET_DATA_INGREDIENTS,
  GET_DATA_REQUEST_INGREDIENTS,
  GET_DATA_FAILED_INGREDIENTS,
  GET_DATA_CURRENT_INGREDIENTS,
  CLEAR_INGREDIENT_DATA,
  GET_ORDER,
  ADD_ITEM_TO_CONSTRUCTOR,
  SET_BUN,
  DELETE_ITEM_CONSTRUCTOR,
} from "../actions/burgerActions";

const initialState = {
  ingredients: [],
  request: false,
  failed: false,
  ingredientsConstructor: [],
  currentIngredientsInfo: {},
  bun: {},
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
    case GET_DATA_REQUEST_INGREDIENTS: {
      return {
        ...state,
        request: true,
      };
    }
    case GET_DATA_FAILED_INGREDIENTS: {
      return {
        ...state,
        failed: true,
      };
    }
    case GET_DATA_CURRENT_INGREDIENTS: {
      return {
        ...state,
        currentIngredientsInfo: action.currentIngredient,
      };
    }
    case CLEAR_INGREDIENT_DATA: {
      return {
        ...state,
        currentIngredientsInfo: {},
      };
    }
    case GET_ORDER: {
      return {
        ...state,
        lastOrder: action.order,
      };
    }
    case ADD_ITEM_TO_CONSTRUCTOR: {
      return {
        ...state,
        // @ts-ignore
        ingredientsConstructor: state.ingredientsConstructor.concat([action.item,]),
      };
    }
    case SET_BUN: {
      console.log(state.ingredientsConstructor);
      return {
        ...state,
        // @ts-ignore
        bun: action.item,
      };
    }
    case DELETE_ITEM_CONSTRUCTOR: {
      return {
        ...state,
        ingredientsConstructor: state.ingredientsConstructor.filter((el:any) => el._id !== action.id),
      }
    }
    default:
      return state;
  }
};
