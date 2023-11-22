import { useToastContext } from "./ToastProvider"

export const useToast = () => {
    const ctx = useToastContext()
    const toast = ctx.add
    const closeToast = ctx.close
    return {
        toast,
        closeToast
    }
}