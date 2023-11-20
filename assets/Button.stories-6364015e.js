import{j as e,F as W,a as J}from"./jsx-runtime-29545a09.js";import{G as K}from"./iconBase-1d38e9b4.js";import{b as a}from"./index.esm-fa70f5b4.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";function t(r){return K({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M14 5l7 7m0 0l-7 7m7-7H3"}}]})(r)}const p=({variant:r="primary",size:j="md",leftIcon:u,rightIcon:g,children:q,...L})=>{const P="inline-flex items-center rounded-lg border border-transparent font-semibold  disabled:text-[#CED2D6]",T={sm:"px-3 py-2 text-sm",md:"px-4 py-2 text-base",lg:"px-4 py-2 text-lg",xl:"px-6 py-3 text-xl"},$={primary:`bg-primary text-white shadow-sm hover:bg-[#525CD9] border border-gray-50
      enabled:hover:outline-none enabled:hover:ring-1 enabled:hover:ring-gray-200 
      focus:outline-none focus:ring-4 focus:ring-gray-200
      disabled:bg-[#F6F7F9] disabled:border-gray-300`,secondary:`border-slate-300 border text-black shadow-sm 
      enabled:hover:border-gray-500 enabled:hover:bg-[#F6F7F9]
      focus:outline-none focus:ring-2 focus:ring-gray-300`,"text-only":"text-black"},G=`${P} ${T[j]} ${$[r]}`;return e(W,{children:J("button",{type:"button",className:G,...L,children:[u&&e("span",{className:"mr-2",children:u}),q,g&&e("span",{className:"ml-2",children:g})]})})};try{p.displayName="Button",p.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"text-only"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},leftIcon:{defaultValue:null,description:"",name:"leftIcon",required:!1,type:{name:"ReactNode"}},rightIcon:{defaultValue:null,description:"",name:"rightIcon",required:!1,type:{name:"ReactNode"}}}}}catch{}const ee={title:"Components/Button",component:p,tags:["autodocs"],args:{children:"Button"},argTypes:{children:{type:"string",description:"Content of the button",control:{type:"text"}},variant:{control:{type:"radio",options:["primary","secondary","ghost"]}},size:{control:{type:"radio",options:["sm","md","lg","xl"]}},leftIcon:{control:{mapping:{empty:[]}}},rightIcon:{control:{mapping:{empty:[]}}}}},o={args:{rightIcon:e(t,{}),leftIcon:e(a,{}),size:"lg"}},n={args:{size:"sm",children:"Small"}},s={args:{size:"md",children:"Small"}},i={args:{size:"lg",children:"Small"}},l={args:{children:"Click Me",rightIcon:e(t,{}),leftIcon:e(a,{}),variant:"primary"}},c={args:{children:"Click Me",rightIcon:e(t,{}),leftIcon:e(a,{}),variant:"secondary"}},d={args:{children:"Click Me",rightIcon:e(t,{}),leftIcon:e(a,{}),variant:"text-only"}},m=r=>e(p,{...r,disabled:!0,rightIcon:e(t,{}),leftIcon:e(a,{})});var y,h,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    rightIcon: <HiOutlineArrowRight />,
    leftIcon: <FaRegEnvelope />,
    size: 'lg'
  }
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var b,v,x;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: "Small"
  }
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var S,I,z;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 'md',
    children: "Small"
  }
}`,...(z=(I=s.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var F,R,k;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    children: "Small"
  }
}`,...(k=(R=i.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var B,C,_;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: "Click Me",
    rightIcon: <HiOutlineArrowRight />,
    leftIcon: <FaRegEnvelope />,
    variant: 'primary'
  }
}`,...(_=(C=l.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var w,V,M;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: "Click Me",
    rightIcon: <HiOutlineArrowRight />,
    leftIcon: <FaRegEnvelope />,
    variant: 'secondary'
  }
}`,...(M=(V=c.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var O,E,H;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: "Click Me",
    rightIcon: <HiOutlineArrowRight />,
    leftIcon: <FaRegEnvelope />,
    variant: 'text-only'
  }
}`,...(H=(E=d.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var N,A,D;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:"(args: ButtonProps) => <Button {...args} disabled={true} rightIcon={<HiOutlineArrowRight />} leftIcon={<FaRegEnvelope />}></Button>",...(D=(A=m.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const re=["Basic","SizeSmall","SizeMedium","SizeLarge","VariantPrimary","VariantSecondary","VariantTextOnly","Disabled"];export{o as Basic,m as Disabled,i as SizeLarge,s as SizeMedium,n as SizeSmall,l as VariantPrimary,c as VariantSecondary,d as VariantTextOnly,re as __namedExportsOrder,ee as default};
//# sourceMappingURL=Button.stories-6364015e.js.map
