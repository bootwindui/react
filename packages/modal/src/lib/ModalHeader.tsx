import { cn } from "@bootwind/common"
import { ReactNode } from "react"

interface ModalHeaderProps {
    children?: ReactNode | string
    className?: string
}

export const ModalHeader = (props: ModalHeaderProps) => (
    <div className={cn("modal-header | p-5 pb-0", props.className)}>
        {props.children}
    </div>
)