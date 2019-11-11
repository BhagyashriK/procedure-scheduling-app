import React from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Wrapper } from "./datepicker.style";

const Datepicker: React.FC<{
  selected: any;
  onChange: any;
  placeholder?: string;
  showTimeSelect?: boolean;
  dateFormat?: string;
}> = ({ selected, onChange, placeholder, showTimeSelect, dateFormat }) => {
  return (
    <Wrapper>
      <DatePicker
        selected={selected}
        onChange={onChange}
        showTimeSelect={showTimeSelect}
        placeholderText={placeholder}
        dateFormat={dateFormat}
      />
    </Wrapper>
  );
};

export default Datepicker;
