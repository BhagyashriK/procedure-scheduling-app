import styled from "styled-components";

export const StyledTable = styled.table`
  display: block;
  width: 100%;
  border-collapse: collapse;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  color: ${props => props.theme.TABLE_TEXT_COLOR};
  background-color: ${props => props.theme.TABLE_BG_COLOR};
  font-size: 0.9rem;

  th,
  td {
    padding: 0.75rem;
    border-bottom: 1px solid ${props => props.theme.TABLE_BORDER_COLOR};
    text-align: left;
  }

  tbody {
    vertical-align: inherit;
  }

  thead th {
    vertical-align: bottom;
    border-bottom-color: ${props => props.theme.TABLE_BORDER_COLOR};
    background-color: ${props => props.theme.TABLE_HEADER_BG_COLOR};
  }
  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 992px) {
    display: table;
  }
`;
