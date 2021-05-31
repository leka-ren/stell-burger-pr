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
  POST_ORDER_DETAILS_REQUEST,
  POST_ORDER_DETAILS_FAILD,
  POST_ORDER_DETAILS_SUCCESS,
  UPDATE_CONSTRUCTOR
} from "../actions/burgerActions";

const initialState = {
  ingredients: [],
  request: false,
  failed: false,
  postRequest: false,
  postFailed: false,
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
        request: false,
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
      return {
        ...state,
        // @ts-ignore
        bun: action.item,
      };
    }
    case DELETE_ITEM_CONSTRUCTOR: {
      let count = 0;
      return {
        ...state,
        ingredientsConstructor: state.ingredientsConstructor.filter((el:any) => {
          if( el._id === action.id && !count){
            count++;
            return el._id !== action.id
          }
          return el;
        }),
      }
    }
    case POST_ORDER_DETAILS_REQUEST: {
      return {
        ...state,
        postRequest: true,
      }
    }
    case POST_ORDER_DETAILS_FAILD: {
      return {
        ...state,
        postRequest: true,
        postFailed: true,
      }
    }
    case POST_ORDER_DETAILS_SUCCESS: {
      return {
        ...state,
        postRequest: true,
        postFailed: true,
        lastOrder: action.order,
      }
    }
    case UPDATE_CONSTRUCTOR: {
      const currentItems = state.ingredientsConstructor;
      currentItems.splice(action.itemsUpdate.dragIndex, 0, currentItems.splice(action.itemsUpdate.hoverIndex, 1)[0]);
      return {
        ...state,
        ingredientsConstructor: currentItems
      }
    }
    default:
      return state;
  }
};
