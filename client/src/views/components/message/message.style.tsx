import styled from "../../../utilities/styled";

interface Message {
  type?: string;
}

export const Wrapper = styled.div<Message>`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 30px 15px;
  margin-bottom: 15px;
  text-align: center;
  font-size: 1.2rem;
  color: ${props =>
    props.type === "info"
      ? props.theme.MESSAGE_TEXT_COLOR
      : props.theme.MESSAGE_TEXT_COLOR_ERROR};
`;
