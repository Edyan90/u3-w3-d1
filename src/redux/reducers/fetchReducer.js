import { GET_JOB_ERROR_OFF, GET_JOB_ERROR_ON, GET_JOB_ON } from "../../actions/action";

const initialState = {
  content: [],
  hasError: false,
  errorMessage: "",
};
const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOB_ON:
      return { ...state, content: action.payload };
    case GET_JOB_ERROR_ON:
      return {
        ...state,
        hasError: true,
        errorMessage: action.payload,
      };

    case GET_JOB_ERROR_OFF:
      return {
        ...state,
        hasError: false,
        errorMessage: "",
      };

    default:
      return state;
  }
};
export default fetchReducer;
