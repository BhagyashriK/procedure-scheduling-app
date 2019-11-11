import styled from "../../../utilities/styled";

export const StyledModal = styled.div`
  width: 60%;
  top: 50%;
  left: 50%;
  position: fixed;
  z-index: 2;
  /* overflow: hidden; */
  padding: 54px 15px 77px 15px;
  transform: translateX(-50%) translateY(-50%);
  background: ${props => props.theme.MODAL_BG};
  border-radius: ${props => props.theme.BASE_BORDER_RADIUS};
`;

export const ModalHeader = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  display: inline-flex;
  position: absolute;
  overflow: hidden;
  justify-content: space-between;
  padding: 10px 15px;
  border-bottom: 1px solid ${props => props.theme.MODAL_BORDER};
`;

export const ModalFooter = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
  display: inline-flex;
  justify-content: flex-end;
  padding: 10px;
  border-top: 1px solid ${props => props.theme.MODAL_BORDER};
  > button {
    justify-content: flex-end;
  }
`;

export const Title = styled.h3`
  margin: 0;
  text-transform: capitalize;
`;

export const Backdrop = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: ${prop => prop.theme.BACKDROP_BG};
  z-index: 3;
`;

export const Close = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  background: none;
  border: none;
  padding: 0;
  line-height: 0;
  cursor: pointer;
  &:focus,
  &:active {
    outline: none;
  }
`;
