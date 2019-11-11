import React from "react";

import { FormGroup, Label, Select, Mandatory } from "../../../styles/form";

const Doctor: React.FC<{ name: string; changeCallback: any }> = ({
  name,
  changeCallback
}) => {
  return (
    <FormGroup>
      <Label>
        Doctor Name
        <Mandatory />
      </Label>
      <Select value={name} onChange={changeCallback}>
        <option value="" disabled>
          None
        </option>
        <option value="Jayant Indurkar">Jayant Indurkar</option>
        <option value="Kalyan Joshi">Kalyan Joshi</option>
      </Select>
    </FormGroup>
  );
};

export default Doctor;
