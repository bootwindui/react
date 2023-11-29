import { cn } from "@bootwind/common"
import { ReactNode } from "react"
import { Text } from "@bootwind/typography"

interface ModalTitleProps {
    children?: ReactNode | string
    className?: string
}

export const ModalTitle = (props: ModalTitleProps) => (
    <Text className={cn("modal-title", props.className)}>{ props.children }</Text>
)