/**
 * import all reducers here and passed to combineReducers for store configuration
 */
import { combineReducers } from "redux";
import { patientsReducer } from "../views/routes/patient-list/patient-list.reducer";

export default combineReducers({
  patients: patientsReducer
});
