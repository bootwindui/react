import React from "react";
import { cn } from "@bootwind/common"

export const TableHeader = React.forwardRef<
    HTMLTableSectionElement,
    React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <>
        <thead
            ref={ref}
            className={cn(className, "bg-gray-50 text-slate-400")}
            {...props}
        />
    </>
))