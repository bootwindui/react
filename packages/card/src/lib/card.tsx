import { ReactNode } from "react";

/* eslint-disable-next-line */
export interface CardProps {
  cardTitle?: string | ReactNode
  cardOptions?: string | ReactNode 
  children?: string | ReactNode
  className?: string
}
import { cn } from '@bootwind/common'
export function Card({
  cardOptions,
  cardTitle,
  children,
  className
}: CardProps) {
  return (
    <div className={cn("shadow-xl rounded-[20px]", className)}>
      <div className="card-header  p-5 flex justify-between">
        <h4 className="card-title font-normal text-slate-500 leading-normal">{ cardTitle }</h4>
        <div className="card-options">
          { cardOptions }
        </div>
      </div>
      <div className="card-body p-5 pt-0">
        { children }
      </div>
    </div>
  );
}

export default Card;
