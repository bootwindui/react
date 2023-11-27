import React from "react";
import { cn } from "@bootwind/common"

export const TableHead = React.forwardRef<
    HTMLTableCellElement,
    React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
    <>
        <th
            ref={ref}
            className={cn("px-5 py-3.5 font-normal text-left", className)}
            {...props}
        />
    </>
))