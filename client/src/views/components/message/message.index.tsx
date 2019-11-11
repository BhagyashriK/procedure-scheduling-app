import React from "react";

import { Wrapper } from "./message.style";

/** Message component
 * type: message type, can be info, error
 */

const Message: React.FC<{ message?: string; type?: string }> = ({
  message,
  type = "info"
}) => {
  return <Wrapper type={type}>{message}</Wrapper>;
};

export default Message;
