import { ReactNode } from "react";
import { ModalProvider } from "./ModalProvider";

/* eslint-disable-next-line */
export interface ModalProps {
  children: ReactNode | string
}

export function Modal(props: ModalProps) {
  return (
    <ModalProvider>
      {props.children}
    </ModalProvider>
  );
}

export default Modal;