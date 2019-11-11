import * as types from "./patient-list.types";

export const initialState = {
  list: [],
  isLoading: true,
  errorMessage: null
};

interface action {
  type: string;
  payload?: object;
}

export function patientsReducer(state: object = initialState, action: action) {
  switch (action.type) {
    case types.PATIENTS.REQUEST:
      return Object.assign({}, state, { isLoading: true });
    case types.PATIENTS.SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        list: action.payload,
        errorMessage: null
      });
    case types.PATIENTS.FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        errorMessage: action.payload
      });
    default:
      return state;
  }
}
