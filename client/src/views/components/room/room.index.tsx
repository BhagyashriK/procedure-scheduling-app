import React from "react";

import { FormGroup, Label, Select, Mandatory } from "../../../styles/form";

const Room: React.FC<{ name: any; changeCallback: any }> = ({
  name,
  changeCallback
}) => {
  return (
    <FormGroup>
      <Label>
        Room
        <Mandatory />
      </Label>
      <Select value={name} onChange={changeCallback}>
        <option value="" disabled>
          None
        </option>
        <option value="1001">1001</option>
        <option value="1002">1002</option>
      </Select>
    </FormGroup>
  );
};

export default Room;
