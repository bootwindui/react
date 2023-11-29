import { cn } from "@bootwind/common"
import { ReactNode } from "react"

interface ModalFooterProps {
    children?: ReactNode | string
    className?: string
}

export const ModalFooter = (props: ModalFooterProps) => (
    <div className={cn("modal-footer p-5 pt-0", props.className)}>
        {props.children}
    </div>
)