/* eslint-disable-next-line */
import Alert, { AlertProps } from "@bootwind/alert"

export interface ToastProps extends AlertProps {
  id?: string
  position?: "top-left" | "bottom-left" | "bottom-right" | "top-right"

  // Duration in milliseconds of how long the toast will show
  duration?: number
}
export function Toast(props: ToastProps) {
  return (
    <div className={`toast`}>
      <Alert {...props}></Alert>
    </div>
  );
}

export default Toast;
