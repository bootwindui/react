/* eslint-disable-next-line */
import Alert, { AlertProps } from "@bootwind/alert"

export interface ToastProps extends AlertProps {
  id?: string
}
export function Toast(props: ToastProps) {
  return (
    <div className={`toast`}>
      <Alert {...props}></Alert>
    </div>
  );
}

export default Toast;
