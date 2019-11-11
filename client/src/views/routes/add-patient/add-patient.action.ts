import { createApiAction } from "../../../utilities/action";
import { ADD_PATIENTS } from "./add-patient.types";
import { createPatient } from "./add-patient.api";

export const addPatient = createApiAction(ADD_PATIENTS, createPatient);
