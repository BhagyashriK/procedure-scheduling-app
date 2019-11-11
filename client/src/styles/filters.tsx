import styled from "../utilities/styled";
import { FormControl } from "./form";

export const FilterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  ${FormControl} {
    margin-right: 5px;
  }
`;
