import Axios from "axios";
import qs from "querystring";

import { API_ENDPOINT } from "../../../constants/constants";

export const getPatientList = (filter?: any) => {
  return Axios.get(`${API_ENDPOINT}/patients?${qs.stringify(filter)}`).catch(
    error => Promise.reject(error.message)
  );
};
