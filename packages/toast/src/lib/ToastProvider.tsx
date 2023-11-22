import { ReactNode, createContext, useContext, useId, useReducer, useRef, useState } from "react";
import { Toast, ToastProps } from "..";

interface IToastProvider {
    toasts: ToastProps[]
    add: (props: ToastProps) => void 
    close: (toastId: string) => void 
}
interface ToastProviderInterface {
    children?: any
    // Duration in milliseconds
    duration?: number
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
}

interface State {
    toasts: ToastProps[]
}

const positionClasses = {
    "top-left": "top-4 left-4",
    "bottom-left": "bottom-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-right": "bottom-4 right-4",
}
const ToastContext = createContext<IToastProvider>({} as IToastProvider)

type Action = 
    | {
        type: "push"
        toast: ToastProps
      }
    | {
        type: "remove"
        toastId?: string
    }

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'push':
            return { toasts: [action.toast, ...state.toasts] }
        case 'remove':
            if(action.toastId === undefined) {
                return {
                    toasts: []
                }
            } 
            return {
                toasts: state.toasts.filter(t => t.id !== action.toastId)
            }
    }
}
let count = 0
export function ToastProvider({ children, position = "bottom-right", duration = 2000 }: ToastProviderInterface) {
    function genId() {
        count = (count + 1) % Number.MAX_SAFE_INTEGER
        return count.toString()
    }
    const [state, dispatch] = useReducer(reducer, { toasts: [] })

    const add = (newToast: ToastProps) => {
        newToast.id = genId()
        dispatch({
            type: "push",
            toast: newToast
        })

        setTimeout(() => {
            close(newToast.id!)
        }, duration)
    }

    const close = (toastId: string) => {
        dispatch({
            toastId: toastId,
            type: "remove"
        })
    }
    
    return (
        <ToastContext.Provider value={{add, close, toasts: state.toasts}}>
            {children}
            {/* Render the toasts */}
            <div className={`toasts absolute flex gap-3 flex-col min-w-[300px] ${positionClasses[position]}`}>
                {state.toasts.map(toast => (
                    <Toast {...toast} key={toast.id}></Toast>
                ))}
            </div>
        </ToastContext.Provider>
    )
}
export const useToastContext = () => useContext(ToastContext)