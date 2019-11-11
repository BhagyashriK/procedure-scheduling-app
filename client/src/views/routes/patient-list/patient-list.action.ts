import { createApiAction } from "../../../utilities/action";
import { PATIENTS } from "./patient-list.types";
import { getPatientList } from "./patient-list.api";

export const getPatients = createApiAction(PATIENTS, getPatientList);
