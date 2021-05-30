import { apiUrl, apiPost } from "../../const/burgerData";

export const GET_DATA_INGREDIENTS = "GET_DATA_INGREDIENTS";
export const GET_DATA_REQUEST_INGREDIENTS = "GET_DATA_REQUEST_INGREDIENTS";
export const GET_DATA_FAILED_INGREDIENTS = "GET_DATA_FAILED_INGREDIENTS";
export const GET_DATA_CURRENT_INGREDIENTS = "GET_DATA_CURRENT_INGREDIENTS";
export const CLEAR_INGREDIENT_DATA = "CLEAR_INGREDIENT_DATA";
export const GET_ORDER = "GET_ORDER";
export const ADD_ITEM_TO_CONSTRUCTOR = "ADD_ITEM_TO_CONSTRUCTOR";
export const SET_BUN = "SET_BUN";

export function getIngredientsData() {
  return function (dispatch: any) {
    fetch(apiUrl)
      .then((res) => {
        dispatch({
          type: GET_DATA_REQUEST_INGREDIENTS,
        });
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
      });
  };
}

export function postOrder(ingredientsData: any) {
  return function (dispatch: any) {
    fetch(apiPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredients: ingredientsData,
      }),
    })
      .then((res) => res.json())
      .then((res) =>
        dispatch({
          type: GET_ORDER,
          order: res,
        })
      );
  };
}
