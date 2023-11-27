import React from "react";
import { cn } from "@bootwind/common"

export const TableBody = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <>
        <tbody
            ref={ref}
            className={cn("[&_tr:last-child]:border-0", className)}
            {...props}
        />
    </>
))