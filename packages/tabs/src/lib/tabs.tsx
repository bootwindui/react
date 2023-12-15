import { Children, ReactElement, ReactNode, useId, useRef, useState } from "react";
import { cn } from '@bootwind/common'

/* eslint-disable-next-line */
export interface TabsProps {
  id?: string 
  children: ReactNode
}
/* eslint-disable-next-line */
export interface TabItemProps {
  title: ReactNode | string 
  children: ReactNode | string
}

function convertToSlug(text:string) {
  return text.toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

export function Tabs(props: TabsProps) {
  const [activeTab, setActiveTab] = useState(0)
  const children = Children.map(props.children as ReactElement<TabItemProps>, (child: ReactElement<TabItemProps>) => {
    /** @ts-ignore */
    if (child.type.displayName == 'TabItem') {
        return {
          ...child.props,
          id: useId()
        }
    }
  })
  const changeActiveTab = (index: number) => {
    console.log('chnage', index)
    setActiveTab(index)
  }
  return (
    <div className="tabs">
      <ul className="tabs-header flex gap-5 border-b" role="tablist">
        {
          children.map((child, i) => (
            <li 
              key={child.id}
              className={cn("tab-title", activeTab == i ? 'active text-primary border-b-2 border-b-primary' : 'text-gray-500')}
            >
              <button 
                type="button"
                className="p-2"
                aria-selected={activeTab == i}
                role="presentation"
                id={`${child.id}-control`}
                aria-controls={`${child.id}-pane`}
                onClick={() => changeActiveTab(i)}
                >
                { child.title }
              </button>
            </li>
          ))
        }
      </ul>
      <div className="tabs-content">
        {
          children.map((child, i) => i == activeTab && (
            <div 
              id={`${child.id}-pane`}
              key={child.id}
              aria-labelledby={`${child.id}-control`}
              className={cn("tab-content p-2")} role="tabpanel">
                { child.children }
            </div>
          ))
        }
      </div>
    </div>
  );
}

export function TabItem(props: TabItemProps) {
  return (
    <>
    </>
  )
}

export default Tabs;
