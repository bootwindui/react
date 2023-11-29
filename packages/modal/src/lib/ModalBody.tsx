import { cn } from "@bootwind/common"
import { ReactNode } from "react"

interface ModalBodyProps {
    children?: ReactNode | string
    className?: string
}

export const ModalBody = (props: ModalBodyProps) => (
    <div className="modal-body p-5 pt-0">
        { props.children }
    </div>
)