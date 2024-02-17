import { ReactNode } from "react"

export interface TooltipTriggerProps {
    children: string | ReactNode
}

export const TooltipTrigger = ({ children }: TooltipTriggerProps) => (
    <div className="tooltip-trigger inline-flex">{children}</div>
)