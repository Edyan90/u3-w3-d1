import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../../actions/action";

const initialState = {
  list: [],
};

const addRemFav = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        list: state.list.filter((fav) => fav !== action.payload),
      };

    default:
      return state;
  }
};

export default addRemFav;
