import React, { ReactNode } from 'react';

type TextType = "display" | "headline" | "short-desc" | "paragraph"
type TextFontWeight = "font-thin" | "font-extralight" | "font-light" | "font-normal" | "font-medium" | "font-semibold" | "font-bold" | "font-extrabold" | "font-black"
type TextStyle = Record<TextType, {
  defaults: {
    fontWeight: TextFontWeight,
    size: number,
    color: string
  },
  styles: {
    fontSize: string
    lineHeight: string
    letterSpacing: string
    mb?: string
  }[]
}>
const styleMap: TextStyle = {
  "display": {
    defaults: {
      fontWeight: "font-bold",
      color: "text-[#3D4A5C]",
      size: 1
    },
    styles: [
      { fontSize: "text-[11.6rem]", lineHeight: "leading-[13.2rem]", letterSpacing: "tracking-[-3.5px]", mb: 'mb-5' },
      { fontSize: "text-[9rem]", lineHeight: "leading-[10.62rem]", letterSpacing: "tracking-[-3.5px]", mb: 'mb-5' },
      { fontSize: "text-[7.5rem]", lineHeight: "leading-[8.37rem]", letterSpacing: "tracking-[-3.5px]", mb: 'mb-5' },
      { fontSize: "text-[6rem]", lineHeight: "leading-[6.87rem]", letterSpacing: "tracking-[2.5px]", mb: 'mb-5' },
    ]
  },
  "headline": {
    defaults: {
      fontWeight: "font-bold",
      color: "text-[#3D4A5C]",
      size: 1
    },
    styles: [
      { fontSize: "text-[4.5rem]", lineHeight: "leading-[5.62rem]", letterSpacing: "tracking-[-2.3px]", mb: 'mb-4' },
      { fontSize: "text-[4rem]", lineHeight: "leading-[5rem]", letterSpacing: "tracking-[-2.3px]", mb: 'mb-4' },
      { fontSize: "text-[3rem]", lineHeight: "leading-[3.75rem]", letterSpacing: "tracking-[-2.3px]", mb: 'mb-4' },
      { fontSize: "text-[2.25rem]", lineHeight: "leading-[3.12rem]", letterSpacing: "tracking-[-1px]", mb: 'mb-3' },
      { fontSize: "text-[2rem]", lineHeight: "leading-[2.75rem]", letterSpacing: "tracking-[-0.5px]", mb: 'mb-3' },
      { fontSize: "text-[1.5rem]", lineHeight: "leading-[2.25rem]", letterSpacing: "tracking-[-0.4px]", mb: 'mb-3' },
    ]
  },
  "short-desc": {
    defaults: {
      fontWeight: "font-medium",
      color: "text-black",
      size: 1
    },
    styles: [
      { fontSize: "text-[1.875rem]", lineHeight: "leading-[2.687rem]", letterSpacing: "tracking-[-0.5px]" },
      { fontSize: "text-[1.75rem]", lineHeight: "leading-[2.687rem]", letterSpacing: "tracking-[-0.5px]" },
      { fontSize: "text-[1.625rem]", lineHeight: "leading-[2.5rem]", letterSpacing: "tracking-[-0.5px]" },
      { fontSize: "text-[1.5rem]", lineHeight: "leading-[2.25rem]", letterSpacing: "tracking-[-0.5px]" },
    ]
  },
  "paragraph": {
    defaults: {
      fontWeight: "font-normal",
      color: "text-black",
      size: 1
    },
    styles: [
      { fontSize: "text-[1.375rem]", lineHeight: "leading-[2.187rem]", letterSpacing: "tracking-[-0.3px]", mb: 'mb-2' },
      { fontSize: "text-[1.25rem]", lineHeight: "leading-[2rem]", letterSpacing: "tracking-[-0.3px]", mb: 'mb-2' },
      { fontSize: "text-[1.125rem]", lineHeight: "leading-[1.87rem]", letterSpacing: "tracking-[-0.3px]", mb: 'mb-2' },
      { fontSize: "text-[1rem]", lineHeight: "leading-[1.75rem]", letterSpacing: "tracking-[-0.3px]", mb: 'mb-2' },
      { fontSize: "text-[0.87rem]", lineHeight: "leading-[1.5rem]", letterSpacing: "tracking-[-0.2px]", mb: 'mb-2' },
      { fontSize: "text-[0.75rem]", lineHeight: "leading-[1.25rem]", letterSpacing: "tracking-[-0.2px]", mb: 'mb-2' },
    ]
  },
}

export interface TextProps {
  type?: TextType
  size?: number
  italic?: boolean
  color?: string
  weight?: TextFontWeight
  children?: ReactNode
  className?: string
}

export const Text: React.FC<TextProps> = ({
  type = "paragraph",
  size = styleMap[type].defaults.size,
  weight = styleMap[type].defaults.fontWeight,
  color = styleMap[type].defaults.color,
  italic = false,
  children
}: TextProps) => {
  const styles = Object.values(styleMap[type].styles[size - 1]).join(' ')
  const additionalClasses = [
    `bootwind-text bootwind-text-${type}`,
    italic ? 'italic' : '',
    weight,
    color
  ].join(' ')

  const classes = `${additionalClasses} ${styles}`

  return (
    <p className={classes}>{children}</p>
  )
};

export default Text;
