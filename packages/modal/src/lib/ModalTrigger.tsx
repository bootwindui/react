import { ReactNode } from "react"
import { useModalContext } from "./ModalProvider"

interface ModalTriggerProps {
    children: ReactNode | string
}

export const ModalTrigger = (props: ModalTriggerProps) => {
    const context = useModalContext()

    return (
        <div className="modal-trigger" onClick={() => context.openModal()}>
            { props.children }
        </div>
    )
}