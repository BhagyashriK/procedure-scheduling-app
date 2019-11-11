import React, { ReactNode } from "react";
import { Wrapper } from "./header.style";

const Header: React.FC<{ children?: ReactNode }> = ({ children }) => {
  // Return header wrapped in style
  return (
    <Wrapper>
      <div>{children}</div>
    </Wrapper>
  );
};

export default Header;
