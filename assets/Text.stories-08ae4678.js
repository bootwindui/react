import{j as i,a,T as h}from"./index-85695562.js";import{T as t}from"./text-75d279b9.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const g={title:"Components/Typography/Text",component:t,args:{children:"Hello World!",size:1,type:"headline",weight:"font-light"},argTypes:{type:{description:"Size of the text",control:{type:"select"},options:["short-desc","paragraph","headline","display"],name:"Size"},children:{name:"Content",control:{type:"text"}},size:{name:"Size",control:{type:"number"}},weight:{name:"Font Weight",control:{type:"select"},options:["font-thin","font-extralight","font-light","font-normal","font-medium","font-semibold","font-bold","font-extrabold","font-black"]},color:{name:"Color",description:"Using Tailwind colors",control:{type:"text"}}}},r=o=>i("div",{children:[a(h,{title:"Typography",description:"Typography in the Bootwind Design System plays a pivotal role in shaping the visual identity and readability of your content. Customize font styles, sizes, line spacing, and color schemes to create a harmonious and engaging typographic hierarchy. Whether you're designing for web, print, or any other medium, Typography ensures that your text elements are not only aesthetically pleasing but also convey information effectively, enhancing the overall readability and user experience of your design."}),a(t,{type:o.type,color:o.color,size:o.size,weight:o.weight,children:o.children}),[...Array(6)].map((n,e)=>i("div",{className:"mb-12",children:[i(t,{type:"paragraph",size:e+1,weight:"font-bold",children:["Paragraph: ",e+1," / Bold"]}),i(t,{type:"paragraph",size:e+1,weight:"font-semibold",children:["Paragraph: ",e+1," / SemiBold"]}),i(t,{type:"paragraph",size:e+1,weight:"font-medium",children:["Paragraph: ",e+1," / Medium"]}),i(t,{type:"paragraph",size:e+1,weight:"font-normal",children:["Paragraph: ",e+1," / Normal"]})]})),[...Array(4)].map((n,e)=>i("div",{className:"mb-12",children:[i(t,{type:"short-desc",size:e+1,weight:"font-bold",children:["Short Desc: ",e+1," / Bold"]}),i(t,{type:"short-desc",size:e+1,weight:"font-semibold",children:["Short Desc: ",e+1," / SemiBold"]}),i(t,{type:"short-desc",size:e+1,weight:"font-medium",children:["Short Desc: ",e+1," / Medium"]}),i(t,{type:"short-desc",size:e+1,weight:"font-normal",children:["Short Desc: ",e+1," / Normal"]})]})),[...Array(6)].map((n,e)=>i("div",{className:"mb-12",children:[i(t,{type:"headline",size:e+1,weight:"font-bold",children:["Headline: ",e+1," / Bold"]}),i(t,{type:"headline",size:e+1,weight:"font-semibold",children:["Headline: ",e+1," / SemiBold"]}),i(t,{type:"headline",size:e+1,weight:"font-medium",children:["Headline: ",e+1," / Medium"]}),i(t,{type:"headline",size:e+1,weight:"font-normal",children:["Headline: ",e+1," / Normal"]})]})),[...Array(3)].map((n,e)=>i("div",{className:"mb-24",children:[a(t,{type:"display",size:e+1,weight:"font-bold",children:"Display: i+1 / Bold"}),a(t,{type:"display",size:e+1,weight:"font-semibold",children:"Display: i+1 / Semibold"}),a(t,{type:"display",size:e+1,weight:"font-medium",children:"Display: i+1 / Medium"})]}))]});var s,l,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`(args: TextProps) => <div>

    <Title title="Typography" description="Typography in the Bootwind Design System plays a pivotal role in shaping the visual identity and readability of your content. Customize font styles, sizes, line spacing, and color schemes to create a harmonious and engaging typographic hierarchy. Whether you're designing for web, print, or any other medium, Typography ensures that your text elements are not only aesthetically pleasing but also convey information effectively, enhancing the overall readability and user experience of your design." />

    <Text type={args.type} color={args.color} size={args.size} weight={args.weight}>{args.children}</Text>

    {[...Array(6)].map((_, i) => <div className='mb-12'>
        <Text type='paragraph' size={i + 1} weight='font-bold'>Paragraph: {i + 1} / Bold</Text>
        <Text type='paragraph' size={i + 1} weight='font-semibold'>Paragraph: {i + 1} / SemiBold</Text>
        <Text type='paragraph' size={i + 1} weight='font-medium'>Paragraph: {i + 1} / Medium</Text>
        <Text type='paragraph' size={i + 1} weight='font-normal'>Paragraph: {i + 1} / Normal</Text>
      </div>)}
    {[...Array(4)].map((_, i) => <div className='mb-12'>
        <Text type='short-desc' size={i + 1} weight='font-bold'>Short Desc: {i + 1} / Bold</Text>
        <Text type='short-desc' size={i + 1} weight='font-semibold'>Short Desc: {i + 1} / SemiBold</Text>
        <Text type='short-desc' size={i + 1} weight='font-medium'>Short Desc: {i + 1} / Medium</Text>
        <Text type='short-desc' size={i + 1} weight='font-normal'>Short Desc: {i + 1} / Normal</Text>
      </div>)}
    {[...Array(6)].map((_, i) => <div className='mb-12'>
        <Text type='headline' size={i + 1} weight='font-bold'>Headline: {i + 1} / Bold</Text>
        <Text type='headline' size={i + 1} weight='font-semibold'>Headline: {i + 1} / SemiBold</Text>
        <Text type='headline' size={i + 1} weight='font-medium'>Headline: {i + 1} / Medium</Text>
        <Text type='headline' size={i + 1} weight='font-normal'>Headline: {i + 1} / Normal</Text>
      </div>)}
    {[...Array(3)].map((_, i) => <div className='mb-24'>
        <Text type='display' size={i + 1} weight='font-bold'>Display: i+1 / Bold</Text>
        <Text type='display' size={i + 1} weight='font-semibold'>Display: i+1 / Semibold</Text>
        <Text type='display' size={i + 1} weight='font-medium'>Display: i+1 / Medium</Text>
      </div>)}
  </div>`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const f=["Sizes"];export{r as Sizes,f as __namedExportsOrder,g as default};
//# sourceMappingURL=Text.stories-08ae4678.js.map
