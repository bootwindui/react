import React from "react";
import { cn } from "@bootwind/common"

interface TableProps extends React.ComponentPropsWithoutRef<'table'> {
  variant?: 'striped' | 'normal'
  borders?: 'all' | 'bottom'
}

export const Table = React.forwardRef<
    HTMLTableElement,
    TableProps
>(({ className, ...props }, ref) => (
    <>
    <div className="relative w-full overflow-auto">
        <table
            ref={ref}
            className={cn("w-full caption-bottom text-sm ", className, props.variant == "striped" ? '[&_tr:nth-child(even)]:bg-[#f9fafb]' : '')}
            {...props}
        />
    </div>
    </>
))