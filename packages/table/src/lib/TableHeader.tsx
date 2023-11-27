import React from "react";
import { cn } from "@bootwind/common"

export const TableHeader = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <>
        <thead
            ref={ref}
            className={cn("[&_tr:last-child]:border-0", "bg-gray-50 text-slate-400")}
            {...props}
        />
    </>
))