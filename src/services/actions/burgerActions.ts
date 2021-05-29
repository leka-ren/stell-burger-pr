import { apiUrl, apiPost } from "../../const/burgerData";

export const GET_DATA_INGREDIENTS = "GET_DATA_INGREDIENTS";
export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_FAILED = "GET_DATA_FAILED";

export function getIngredientsData() {
  return function (dispatch: any) {
    fetch(apiUrl)
      .then((res) => {
        dispatch({
          type: GET_DATA_REQUEST,
        });
        return res.json();
      })
      .then((res) => {
        if (res && res.success) {
            console.log(res.data);
          dispatch({
            type: GET_DATA_INGREDIENTS,
            items: res.data,
          });
        } else {
          dispatch({ type: GET_DATA_FAILED });
        }
      });
  };
}
