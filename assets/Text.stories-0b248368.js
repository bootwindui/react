import{j as a,a as i}from"./jsx-runtime-29545a09.js";import{T as t}from"./typography-80cc7c27.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const _={title:"Components/Typography",component:t,tags:["autodocs"],args:{children:"Hello World!",size:1,type:"headline",weight:"font-light"},argTypes:{type:{description:"Size of the text",control:{type:"select"},options:["short-desc","paragraph","headline","display"],name:"Size"},children:{name:"Content",control:{type:"text"}},size:{name:"Size",control:{type:"number"}},weight:{name:"Font Weight",control:{type:"select"},options:["font-thin","font-extralight","font-light","font-normal","font-medium","font-semibold","font-bold","font-extrabold","font-black"]},color:{name:"Color",description:"Using Tailwind colors",control:{type:"text"}}}},r={args:{children:"A brown fox jumps over the lazy dog",size:3,weight:"font-black",italic:!1}},o=l=>a("div",{children:[...Array(6)].map((p,e)=>i("div",{className:"mb-12",children:[i(t,{type:"paragraph",size:e+1,weight:"font-bold",children:["Paragraph: ",e+1," / Bold"]}),i(t,{type:"paragraph",size:e+1,weight:"font-semibold",children:["Paragraph: ",e+1," / SemiBold"]}),i(t,{type:"paragraph",size:e+1,weight:"font-medium",children:["Paragraph: ",e+1," / Medium"]}),i(t,{type:"paragraph",size:e+1,weight:"font-normal",children:["Paragraph: ",e+1," / Normal"]})]}))}),s=l=>a("div",{children:[...Array(4)].map((p,e)=>i("div",{className:"mb-12",children:[i(t,{type:"short-desc",size:e+1,weight:"font-bold",children:["Short Desc: ",e+1," / Bold"]}),i(t,{type:"short-desc",size:e+1,weight:"font-semibold",children:["Short Desc: ",e+1," / SemiBold"]}),i(t,{type:"short-desc",size:e+1,weight:"font-medium",children:["Short Desc: ",e+1," / Medium"]}),i(t,{type:"short-desc",size:e+1,weight:"font-normal",children:["Short Desc: ",e+1," / Normal"]})]}))}),d=l=>a("div",{children:[...Array(6)].map((p,e)=>i("div",{className:"mb-12",children:[i(t,{type:"headline",size:e+1,weight:"font-bold",children:["Headline: ",e+1," / Bold"]}),i(t,{type:"headline",size:e+1,weight:"font-semibold",children:["Headline: ",e+1," / SemiBold"]}),i(t,{type:"headline",size:e+1,weight:"font-medium",children:["Headline: ",e+1," / Medium"]}),i(t,{type:"headline",size:e+1,weight:"font-normal",children:["Headline: ",e+1," / Normal"]})]}))}),n=l=>a("div",{children:[...Array(3)].map((p,e)=>i("div",{className:"mb-24",children:[a(t,{type:"display",size:e+1,weight:"font-bold",children:"Display: i+1 / Bold"}),a(t,{type:"display",size:e+1,weight:"font-semibold",children:"Display: i+1 / Semibold"}),a(t,{type:"display",size:e+1,weight:"font-medium",children:"Display: i+1 / Medium"})]}))});var h,m,c;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: "A brown fox jumps over the lazy dog",
    size: 3,
    weight: 'font-black',
    italic: false
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var g,y,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`(args: TextProps) => <div>
  {[...Array(6)].map((_, i) => <div className='mb-12'>
        <Text type='paragraph' size={i + 1} weight='font-bold'>Paragraph: {i + 1} / Bold</Text>
        <Text type='paragraph' size={i + 1} weight='font-semibold'>Paragraph: {i + 1} / SemiBold</Text>
        <Text type='paragraph' size={i + 1} weight='font-medium'>Paragraph: {i + 1} / Medium</Text>
        <Text type='paragraph' size={i + 1} weight='font-normal'>Paragraph: {i + 1} / Normal</Text>
      </div>)}
  </div>`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var T,x,z;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`(args: TextProps) => <div>
  {[...Array(4)].map((_, i) => <div className='mb-12'>
        <Text type='short-desc' size={i + 1} weight='font-bold'>Short Desc: {i + 1} / Bold</Text>
        <Text type='short-desc' size={i + 1} weight='font-semibold'>Short Desc: {i + 1} / SemiBold</Text>
        <Text type='short-desc' size={i + 1} weight='font-medium'>Short Desc: {i + 1} / Medium</Text>
        <Text type='short-desc' size={i + 1} weight='font-normal'>Short Desc: {i + 1} / Normal</Text>
      </div>)}
  </div>`,...(z=(x=s.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var u,w,b;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`(args: TextProps) => <div>
  {[...Array(6)].map((_, i) => <div className='mb-12'>
        <Text type='headline' size={i + 1} weight='font-bold'>Headline: {i + 1} / Bold</Text>
        <Text type='headline' size={i + 1} weight='font-semibold'>Headline: {i + 1} / SemiBold</Text>
        <Text type='headline' size={i + 1} weight='font-medium'>Headline: {i + 1} / Medium</Text>
        <Text type='headline' size={i + 1} weight='font-normal'>Headline: {i + 1} / Normal</Text>
      </div>)}
  </div>`,...(b=(w=d.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var v,S,D;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`(args: TextProps) => <div>
  {[...Array(3)].map((_, i) => <div className='mb-24'>
        <Text type='display' size={i + 1} weight='font-bold'>Display: i+1 / Bold</Text>
        <Text type='display' size={i + 1} weight='font-semibold'>Display: i+1 / Semibold</Text>
        <Text type='display' size={i + 1} weight='font-medium'>Display: i+1 / Medium</Text>
      </div>)}
  </div>`,...(D=(S=n.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const A=["Basic","TypeParagraph","TypeShortDesc","TypeHeadline","TypeDisplay"];export{r as Basic,n as TypeDisplay,d as TypeHeadline,o as TypeParagraph,s as TypeShortDesc,A as __namedExportsOrder,_ as default};
//# sourceMappingURL=Text.stories-0b248368.js.map
