import React from "react";
import { StyledTable } from "./table.style";

const Header: React.FC<{
  values?: Array<any>;
}> = ({ values = [] }) => {
  return (
    <thead>
      <tr>
        {values.map(({ label, value }) => (
          <th key={value}>{label}</th>
        ))}
      </tr>
    </thead>
  );
};

const Content: React.FC<{
  header?: Array<any>;
  values?: Array<any>;
  testId?: string;
}> = ({ header = [], values = [], testId }) => {
  return (
    <tbody data-testid={testId}>
      {values.map(cell => (
        <tr key={cell.id}>
          {header.map(({ value }) => (
            <td key={cell.id + value}>{cell[value]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

/**
 *Table accepts header, content data and returns genetated table
 */

const Table: React.FC<{
  header?: Array<any>;
  content?: Array<any>;
  children?: JSX.Element;
  testId?: string;
}> = ({ header, content, testId }) => {
  return (
    <StyledTable>
      <Header values={header}></Header>
      <Content header={header} values={content} testId={testId}></Content>
    </StyledTable>
  );
};

export default Table;
