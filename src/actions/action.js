export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_JOB_ON = "GET_JOB_ON";
export const GET_JOB_ERROR_ON = "GET_JOB_ERROR_ON";
export const GET_JOB_ERROR_OFF = "GET_JOB_ERROR_OFF";
export const removeFromFavourite = (fav) => ({ type: REMOVE_FROM_FAVOURITE, payload: fav });
export const addToFavourite = (fav) => ({ type: ADD_TO_FAVOURITE, payload: fav });

export const getJobAction = (query) => {
  return async (dispatch, getState) => {
    console.log(getState);
    dispatch({ type: GET_JOB_ON });
    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: GET_JOB_ON, payload: data });
        dispatch({ type: GET_JOB_ERROR_OFF });
      } else {
        throw new Error("Errore nel erperimento dei dati 😥");
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_JOB_ERROR_ON, payload: error.message });
    }
  };
};
