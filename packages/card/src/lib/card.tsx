import { ReactNode } from "react";

/* eslint-disable-next-line */
export interface CardProps {
  title?: string | ReactNode
  options?: string | ReactNode 
  children?: string | ReactNode
  noPadding?: boolean
  cardHeaderBorder?: boolean
  className?: string
  subtitle?: string
}
import { cn } from '@bootwind/common'
export function Card({
  options,
  title,
  children,
  noPadding = false,
  className,
  cardHeaderBorder = false,
  subtitle
}: CardProps) {
  return (
    <div className={cn("shadow-xl rounded-[10px] bg-white", className)}>
      <div className={cn("card-header p-5 flex justify-between", cardHeaderBorder ? 'border-b border-gray-200' : '')}>
        <div className="card-header-left">
          <h4 className="card-title font-normal text-gray-900 leading-normal">{ title }</h4>
          {subtitle && (
            <p className="card-subtitle text-sm font-normal text-gray-500 leading-normal">{ subtitle }</p>
          )}
        </div>
        <div className="card-options">
          { options }
        </div>
      </div>
      <div className={cn(`card-body pt-0`, noPadding ? 'p-0' : 'p-5')}>
        { children }
      </div>
    </div>
  );
}

export default Card;
