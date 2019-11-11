import React, { Component, ReactNode } from "react";
import ReactDOM from "react-dom";

import {
  StyledModal,
  Backdrop,
  ModalHeader,
  Title,
  ModalFooter,
  Close
} from "./modal.style";

/**
 * Modal component is Portal
 * title: modal title
 * closeHandler: callback on click of close button
 * footer: modal footer content
 * children: modal content
 */

const modalRoot: HTMLElement = document.getElementById("modal-root")!;

type Props = {
  title: string;
  closeHandler: any;
  footer: ReactNode;
  children: ReactNode;
};

class Modal extends Component<Props> {
  el = document.createElement("div");
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(
      <Backdrop>
        <StyledModal>
          <ModalHeader>
            <Title>{this.props.title}</Title>
            <Close onClick={this.props.closeHandler}>&times;</Close>
          </ModalHeader>
          {this.props.children}
          <ModalFooter>{this.props.footer}</ModalFooter>
        </StyledModal>
      </Backdrop>,
      this.el
    );
  }
}

export default Modal;
