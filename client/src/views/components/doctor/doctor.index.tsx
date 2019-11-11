import React from "react";

import { FormGroup, Label, Select, Mandatory } from "../../../styles/form";

/**
 * Doctor component
 * name: selected dr name
 * changeCallback: callback for name change
 * We can integrate doctor list API, for now I have hard coded it
 */

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
        <option value="Sarita Sakhalkar">Sarita Sakhalkar</option>
        <option value="Aniket Shahapurkar">Aniket Shahapurkar</option>
      </Select>
    </FormGroup>
  );
};

export default Doctor;
