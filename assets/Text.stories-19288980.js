import{j as n,a as t}from"./jsx-runtime-de33e161.js";import{T as i}from"./typography-6bbf62f7.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";const _={title:"❖ • Core/Typography",component:i,tags:["autodocs"],args:{children:"Hello World!",size:1,type:"headline",weight:"font-light"},argTypes:{type:{description:"Size of the text",control:{type:"select"},options:["short-desc","paragraph","headline","display"],name:"Size"},children:{name:"Content",control:{type:"text"}},size:{name:"Size",control:{type:"number"}},weight:{name:"Font Weight",control:{type:"select"},options:["font-thin","font-extralight","font-light","font-normal","font-medium","font-semibold","font-bold","font-extrabold","font-black"]},color:{name:"Color",description:"Using Tailwind colors",control:{type:"text"}}}},a={args:{children:"A brown fox jumps over the lazy dog",size:3,weight:"font-black",italic:!1}},r=l=>n("div",{children:[...Array(6)].map((p,e)=>t("div",{className:"mb-12",children:[t(i,{type:"paragraph",size:e+1,weight:"font-bold",children:["Paragraph: ",e+1," / Bold"]}),t(i,{type:"paragraph",size:e+1,weight:"font-semibold",children:["Paragraph: ",e+1," / SemiBold"]}),t(i,{type:"paragraph",size:e+1,weight:"font-medium",children:["Paragraph: ",e+1," / Medium"]}),t(i,{type:"paragraph",size:e+1,weight:"font-normal",children:["Paragraph: ",e+1," / Normal"]})]}))}),o=l=>n("div",{children:[...Array(4)].map((p,e)=>t("div",{className:"mb-12",children:[t(i,{type:"short-desc",size:e+1,weight:"font-bold",children:["Short Desc: ",e+1," / Bold"]}),t(i,{type:"short-desc",size:e+1,weight:"font-semibold",children:["Short Desc: ",e+1," / SemiBold"]}),t(i,{type:"short-desc",size:e+1,weight:"font-medium",children:["Short Desc: ",e+1," / Medium"]}),t(i,{type:"short-desc",size:e+1,weight:"font-normal",children:["Short Desc: ",e+1," / Normal"]})]}))}),s=l=>n("div",{children:[...Array(6)].map((p,e)=>t("div",{className:"mb-12",children:[t(i,{type:"headline",size:e+1,weight:"font-bold",children:["Headline: ",e+1," / Bold"]}),t(i,{type:"headline",size:e+1,weight:"font-semibold",children:["Headline: ",e+1," / SemiBold"]}),t(i,{type:"headline",size:e+1,weight:"font-medium",children:["Headline: ",e+1," / Medium"]}),t(i,{type:"headline",size:e+1,weight:"font-normal",children:["Headline: ",e+1," / Normal"]})]}))}),d=l=>n("div",{children:[...Array(3)].map((p,e)=>t("div",{className:"mb-24",children:[t(i,{type:"display",size:e+1,weight:"font-bold",children:["Display:",e+1," / Bold"]}),t(i,{type:"display",size:e+1,weight:"font-semibold",children:["Display: ",e+1," / Semibold"]}),t(i,{type:"display",size:e+1,weight:"font-medium",children:["Display: ",e+1," / Medium"]})]}))});var h,m,c;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: "A brown fox jumps over the lazy dog",
    size: 3,
    weight: 'font-black',
    italic: false
  }
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var g,y,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`(args: TextProps) => <div>
    {[...Array(6)].map((_, i) => <div className='mb-12'>
        <Text type='paragraph' size={i + 1} weight='font-bold'>Paragraph: {i + 1} / Bold</Text>
        <Text type='paragraph' size={i + 1} weight='font-semibold'>Paragraph: {i + 1} / SemiBold</Text>
        <Text type='paragraph' size={i + 1} weight='font-medium'>Paragraph: {i + 1} / Medium</Text>
        <Text type='paragraph' size={i + 1} weight='font-normal'>Paragraph: {i + 1} / Normal</Text>
      </div>)}
  </div>`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var T,x,z;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`(args: TextProps) => <div>
    {[...Array(4)].map((_, i) => <div className='mb-12'>
        <Text type='short-desc' size={i + 1} weight='font-bold'>Short Desc: {i + 1} / Bold</Text>
        <Text type='short-desc' size={i + 1} weight='font-semibold'>Short Desc: {i + 1} / SemiBold</Text>
        <Text type='short-desc' size={i + 1} weight='font-medium'>Short Desc: {i + 1} / Medium</Text>
        <Text type='short-desc' size={i + 1} weight='font-normal'>Short Desc: {i + 1} / Normal</Text>
      </div>)}
  </div>`,...(z=(x=o.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var u,w,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`(args: TextProps) => <div>
    {[...Array(6)].map((_, i) => <div className='mb-12'>
        <Text type='headline' size={i + 1} weight='font-bold'>Headline: {i + 1} / Bold</Text>
        <Text type='headline' size={i + 1} weight='font-semibold'>Headline: {i + 1} / SemiBold</Text>
        <Text type='headline' size={i + 1} weight='font-medium'>Headline: {i + 1} / Medium</Text>
        <Text type='headline' size={i + 1} weight='font-normal'>Headline: {i + 1} / Normal</Text>
      </div>)}
  </div>`,...(b=(w=s.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var v,S,D;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`(args: TextProps) => <div>
    {[...Array(3)].map((_, i) => <div className='mb-24'>
        <Text type='display' size={i + 1} weight='font-bold'>Display:{i + 1} / Bold</Text>
        <Text type='display' size={i + 1} weight='font-semibold'>Display: {i + 1} / Semibold</Text>
        <Text type='display' size={i + 1} weight='font-medium'>Display: {i + 1} / Medium</Text>
      </div>)}
  </div>`,...(D=(S=d.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const A=["Basic","TypeParagraph","TypeShortDesc","TypeHeadline","TypeDisplay"];export{a as Basic,d as TypeDisplay,s as TypeHeadline,r as TypeParagraph,o as TypeShortDesc,A as __namedExportsOrder,_ as default};
//# sourceMappingURL=Text.stories-19288980.js.map
