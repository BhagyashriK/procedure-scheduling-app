import React, { ReactNode } from "react";
import { Wrapper } from "./header.style";

/**
 * Return header wrapped in style
 */

const Header: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <Wrapper>
      <div>{children}</div>
    </Wrapper>
  );
};

export default Header;
