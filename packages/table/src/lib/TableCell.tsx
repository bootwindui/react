import React from "react";
import { cn } from "@bootwind/common"

export const TableCell = React.forwardRef<
    HTMLTableCellElement,
    React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className,  ...props }, ref) => (
    <td
        ref={ref}
        className={cn("px-5 py-3.5 text-slate-500", className)}
        {...props}
    >
    </td>
))