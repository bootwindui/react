/* eslint-disable-next-line */
import Alert, { AlertProps } from "@bootwind/alert"
import { cn } from "@bootwind/common"
export interface ToastProps extends AlertProps {
  id?: string
  className?: string,
}
export function Toast(props: ToastProps) {
  return (
    <div className={cn('toast', props.className)}>
      <Alert {...props}></Alert>
    </div>
  );
}

export default Toast;
