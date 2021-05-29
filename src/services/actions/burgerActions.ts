import { apiUrl, apiPost } from "../../const/burgerData";

export const GET_DATA_INGREDIENTS = "GET_DATA_INGREDIENTS";
export const GET_DATA_REQUEST_INGREDIENTS = "GET_DATA_REQUEST_INGREDIENTS";
export const GET_DATA_FAILED_INGREDIENTS = "GET_DATA_FAILED_INGREDIENTS";
export const GET_DATA_CURRENT_INGREDIENTS = "GET_DATA_CURRENT_INGREDIENTS";
export const CLEAR_INGREDIENT_DATA = "CLEAR_INGREDIENT_DATA";

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
