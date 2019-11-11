import styled from "../utilities/styled";

export const LinkButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.LINK_BTN_TEXT_COLOR};
  font-size: 0.9rem;
  text-decoration: underline;
  &.active,
  &:focus,
  &:hover,
  &:active {
    color: ${props => props.theme.LINK_BTN_TEXT_ACTIVE_COLOR};
    outline: none;
    border-style: none;
  }
  &:disabled {
    cursor: not-allowed;
    color: ${props => props.theme.LINK_BTN_TEXT_DISABLED_COLOR};
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 5px 15px;
  background: ${props => props.theme.BTN_BG_COLOR};
  border: 1px solid ${props => props.theme.BTN_BORDER_COLOR};
  border-radius: ${props => props.theme.BASE_BORDER_RADIUS};
  cursor: pointer;
  color: ${props => props.theme.BTN_TEXT_COLOR};
  font-size: 1rem;
  &.active,
  &:focus,
  &:hover,
  &:active {
    background: ${props => props.theme.BTN_ACTIVE_BG_COLOR};
    outline: none;
  }
  &:disabled {
    background: ${props => props.theme.BTN_DISABLED_BG_COLOR};
    border: ${props => props.theme.BTN_DISABLED_BORDER_COLOR};
    color: ${props => props.theme.BTN_DISABLED_TEXT_COLOR};
    cursor: not-allowed;
  }
`;

interface IconButton {
  sm?: boolean;
  primary?: boolean;
}

export const IconButton = styled.button<IconButton>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => (props.sm ? "30px" : "40px")};
  height: ${props => (props.sm ? "30px" : "40px")};
  cursor: pointer;
  border-radius: ${props => props.theme.ICON_BUTTON_BORDER_RADIUS};
  background: ${props =>
    props.primary
      ? props.theme.ICON_BUTTON_PRIMARY_BG
      : props.theme.ICON_BUTTON_BG};
  border: 1px solid
    ${props =>
      props.primary
        ? props.theme.ICON_BUTTON_PRIMARY_BORDER_COLOR
        : props.theme.ICON_BUTTON_BORDER_COLOR};
  color: ${props =>
    props.primary
      ? props.theme.ICON_BUTTON_PRIMARY_TEXT_COLOR
      : props.theme.ICON_BUTTON_TEXT_COLOR};
  font-size: ${props => (props.sm ? "1.2rem" : "1.5rem")};
  &:hover {
    background: ${props =>
      props.primary
        ? props.theme.ICON_BUTTON_PRIMARY_BG_HOVER
        : props.theme.ICON_BUTTON_BG_HOVER};
    border: 1px solid
      ${props =>
        props.primary
          ? props.theme.ICON_BUTTON_PRIMARY_BORDER_COLOR_HOVER
          : props.theme.ICON_BUTTON_BORDER_COLOR_HOVER};
  }

  &:focus {
    outline: 0;
  }
`;
