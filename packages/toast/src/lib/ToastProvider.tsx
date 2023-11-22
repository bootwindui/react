import { ReactNode, createContext, useContext, useId, useState } from "react";
import { Toast, ToastProps } from "..";

interface IToastProvider {
    toasts: ToastProps[]
    add: (props: ToastProps) => void 
    close: (toastId: string) => void 
}
interface ToastProviderInterface {
    children?: any
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
}

const positionClasses = {
    "top-left": "top-4 left-4",
    "bottom-left": "bottom-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-right": "bottom-4 right-4",
}
const ToastContext = createContext<IToastProvider>({} as IToastProvider)
export function ToastProvider({ children, position = "bottom-right" }: ToastProviderInterface) {
    let count = 0

    function genId() {
        count = (count + 1) % Number.MAX_SAFE_INTEGER
        return count.toString()
    }

    const [toasts, setToasts] = useState<ToastProps[]>([]);

    const add = (newToast: ToastProps) => {
        newToast.id = genId()
        setToasts([newToast, ...toasts])
        newToast.id
    }

    const close = (toastId: string) => {
        setToasts(toasts.filter(t => t.id !== toastId))
    }
    
    return (
        <ToastContext.Provider value={{add, close, toasts}}>
            {children}
            {/* Print the toasts */}
            <div className={`toasts absolute flex gap-3 flex-col min-w-[250px] ${positionClasses[position]}`}>
                {toasts.map(toast => (
                    <Toast {...toast} key={toast.id}></Toast>
                ))}
            </div>
        </ToastContext.Provider>
    )
}
export const useToastContext = () => useContext(ToastContext)