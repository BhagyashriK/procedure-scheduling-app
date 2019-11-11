import Axios from "axios";
import { API_ENDPOINT } from "../../../constants/constants";

// get patient details api call
export const getPatient = (id: any) =>
  Axios.get(`${API_ENDPOINT}/patients/${id}`);

// update patient details api call
export const updatePatient = ({ id, ...data }: any) =>
  Axios.patch(`${API_ENDPOINT}/patients/${id}`, data);
