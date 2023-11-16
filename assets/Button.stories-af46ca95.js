import{a as e,F as b,j as o}from"./jsx-runtime-03b4ddbf.js";import{b as w}from"./index.esm-fa70f5b4.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iconBase-1d38e9b4.js";const r=({variant:a="primary",size:p="md",hasArrow:v=!1,icon:i,children:y,...h})=>{const g="inline-flex items-center rounded-lg border border-transparent font-semibold",f={sm:"px-3 py-2 text-sm",md:"px-4 py-2 text-base",lg:"px-4 py-2 text-lg",xl:"px-6 py-3 text-xl"},x={primary:"bg-primary text-white shadow-sm hover:bg-[#525CD9] hover:outline-none hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-200",secondary:"border border-slate-200 bg-white text-black shadow-sm hover:border-gray-500 hover:bg-[#F6F7F9] focus:outline-none focus:ring-2 focus:ring-gray-300",ghost:"text-black"},B=`${g} ${f[p]} ${x[a]}`;return e(b,{children:o("button",{type:"button",className:B,...h,children:[i&&e("span",{className:"mr-2",children:i}),y,v&&e("span",{className:"ml-2",children:"→"})]})})};try{r.displayName="Button",r.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"ghost"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},hasArrow:{defaultValue:{value:"false"},description:"",name:"hasArrow",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}}}}}catch{}const P={title:"Components/Button",component:r,argTypes:{variant:{control:{type:"radio",options:["primary","secondary","ghost"]}},size:{control:{type:"radio",options:["sm","md","lg","xl"]}}}},n=a=>o("div",{className:"flex flex-col space-y-8",children:[e("div",{children:e(r,{variant:"primary",children:"Primary"})}),e("div",{children:e(r,{hasArrow:!0,variant:"primary",children:"Primary with Arrow"})}),e("div",{children:e(r,{icon:e(w,{}),hasArrow:!0,variant:"primary",children:"Primary with Arrow and Icon"})}),e("div",{children:e(r,{variant:"secondary",children:"Secondary"})}),e("div",{children:e(r,{variant:"ghost",children:"Ghost"})})]}),t=a=>o("div",{className:"flex flex-col space-y-4 mt-8",children:[e("div",{children:e(r,{size:"sm",children:"Small"})}),e("div",{children:e(r,{size:"md",children:"Medium"})}),e("div",{children:e(r,{size:"lg",children:"Large"})})]});var s,l,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`(args: ButtonProps) => <div className="flex flex-col space-y-8">
    <div>
      <Button variant="primary">Primary</Button>
    </div>
    <div>
      <Button hasArrow={true} variant="primary">
        Primary with Arrow
      </Button>
    </div>
    <div>
      <Button icon={<FaRegEnvelope />} hasArrow={true} variant="primary">
        Primary with Arrow and Icon
      </Button>
    </div>
    <div>
      <Button variant="secondary">Secondary</Button>
    </div>
    <div>
      <Button variant="ghost">Ghost</Button>
    </div>
  </div>`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,m,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`(args: ButtonProps) => <div className="flex flex-col space-y-4 mt-8">
    <div>
      <Button size="sm">Small</Button>
    </div>
    <div>
      <Button size="md">Medium</Button>
    </div>
    <div>
      <Button size="lg">Large</Button>
    </div>
  </div>`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const F=["Variants","Sizes"];export{t as Sizes,n as Variants,F as __namedExportsOrder,P as default};
//# sourceMappingURL=Button.stories-af46ca95.js.map
