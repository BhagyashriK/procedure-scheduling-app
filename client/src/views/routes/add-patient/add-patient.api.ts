import Axios from "axios";
import { API_ENDPOINT } from "../../../constants/constants";

export const createPatient = (data: object) =>
  Axios.post(`${API_ENDPOINT}/patients`, data);
