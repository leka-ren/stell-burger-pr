import { apiUrl, apiPost } from "../../const/burgerData";

export const GET_DATA_INGREDIENTS = "GET_DATA_INGREDIENTS";
export const GET_DATA_REQUEST_INGREDIENTS = "GET_DATA_REQUEST_INGREDIENTS";
export const GET_DATA_FAILED_INGREDIENTS = "GET_DATA_FAILED_INGREDIENTS";
export const GET_DATA_CURRENT_INGREDIENTS = "GET_DATA_CURRENT_INGREDIENTS";
export const CLEAR_INGREDIENT_DATA = "CLEAR_INGREDIENT_DATA";
export const GET_ORDER = "GET_ORDER";
export const ADD_ITEM_TO_CONSTRUCTOR = "ADD_ITEM_TO_CONSTRUCTOR";
export const SET_BUN = "SET_BUN";
export const DELETE_ITEM_CONSTRUCTOR = "DELETE_ITEM_CONSTRUCTOR";
export const POST_ORDER_DETAILS_REQUEST = "POST_ORDER_DETAILS_REQUEST";
export const POST_ORDER_DETAILS_FAILD = "POST_ORDER_DETAILS_FAILD";
export const POST_ORDER_DETAILS_SUCCESS = "POST_ORDER_DETAILS_SUCCESS";
export const UPDATE_CONSTRUCTOR = "UPDATE_CONSTRUCTOR";

export function getIngredientsData() {
  return function (dispatch: any) {
    dispatch({ type: GET_DATA_REQUEST_INGREDIENTS });
    fetch(apiUrl)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_DATA_INGREDIENTS,
            items: res.data,
          });
        } else {
          dispatch({ type: GET_DATA_FAILED_INGREDIENTS });
        }
      })
      .catch(() => dispatch({ type: GET_DATA_FAILED_INGREDIENTS }))
  };
}

export function postOrder(ingredientsData: any, bun:any) {
  return function (dispatch: any) {
    dispatch({ type: POST_ORDER_DETAILS_REQUEST });

    fetch(apiPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredients: [bun._id].concat(ingredientsData.map((el:any) => el._id)),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res && res.success) {
          dispatch({ 
            type: POST_ORDER_DETAILS_SUCCESS, 
            order: res.order
          });
        } else {
          dispatch({ type: POST_ORDER_DETAILS_FAILD });
        }
      })
      .catch(() => dispatch({ type: POST_ORDER_DETAILS_FAILD }))
  };
}
