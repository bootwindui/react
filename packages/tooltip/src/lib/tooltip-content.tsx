import { cn } from "@bootwind/common"
import { ReactNode } from "react"

export interface TooltipContentProps {
    children: string | ReactNode
    className?: string
    variant?: "dark" | "light",
    position?: "top" | "bottom" | "right" | "left";

}

export const TooltipContent = ({ children, className, variant, position = "top" }: TooltipContentProps) => {
    const positionClasses = {
        right: 'left-full top-1/2 z-20 ml-3 -translate-y-1/2',
        top: 'bottom-full left-1/2 z-20 mb-3 -translate-x-1/2',
        left: 'right-full top-1/2 z-20 mr-3 -translate-y-1/2',
        bottom: 'left-1/2 top-full z-20 mt-3 -translate-x-1/2',
    }
    const classes = cn(
        'tooltip-content hidden absolute rounded whitespace-nowrap w-auto px-4 py-[6px] text-center text-sm font-semibold shadow-slate-300',
        variant === 'dark' ? 'bg-[#2D3643] text-white' : 'bg-[#E9EFF6] text-slate-600',
        positionClasses[position]
    )
    return (
        <div className={classes}>
            {children}
        </div>
    )
}