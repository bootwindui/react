import{a as e,F as a,j as r,T as h}from"./title-2f3446b7.js";import{b as z}from"./index.esm-fa70f5b4.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iconBase-1d38e9b4.js";const t=({variant:i="primary",size:y="md",hasArrow:v=!1,icon:s,children:g,...f})=>{const b="inline-flex items-center rounded-lg border border-transparent font-semibold",w={sm:"px-3 py-2 text-sm",md:"px-4 py-2 text-base",lg:"px-4 py-2 text-lg",xl:"px-6 py-3 text-xl"},x={primary:"bg-primary text-white shadow-sm hover:bg-[#525CD9] hover:outline-none hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-200",secondary:"border border-slate-200 bg-white text-black shadow-sm hover:border-gray-500 hover:bg-[#F6F7F9] focus:outline-none focus:ring-2 focus:ring-gray-300",ghost:"text-black"},B=`${b} ${w[y]} ${x[i]}`;return e(a,{children:r("button",{type:"button",className:B,...f,children:[s&&e("span",{className:"mr-2",children:s}),g,v&&e("span",{className:"ml-2",children:"→"})]})})};try{t.displayName="Button",t.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"ghost"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},hasArrow:{defaultValue:{value:"false"},description:"",name:"hasArrow",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}}}}}catch{}const T={title:"Components/Button",component:t,argTypes:{variant:{control:{type:"radio",options:["primary","secondary","ghost"]}},size:{control:{type:"radio",options:["sm","md","lg","xl"]}}}},n=i=>r(a,{children:[e(h,{title:"Buttons",description:"The Forms component in the Bootwind Design System provides a fundamental building block for user input and interaction. Customize form fields, layouts, and validation to create user-friendly and functional forms that seamlessly integrate with your design. Whether you're collecting user data, processing payments, or enabling various interactions, the Forms component ensures a smooth and intuitive experience for users as they engage with your application or website."}),r("div",{className:"flex flex-col space-y-8",children:[e("div",{children:e(t,{variant:"primary",children:"Primary"})}),e("div",{children:e(t,{hasArrow:!0,variant:"primary",children:"Primary with Arrow"})}),e("div",{children:e(t,{icon:e(z,{}),hasArrow:!0,variant:"primary",children:"Primary with Arrow and Icon"})}),e("div",{children:e(t,{variant:"secondary",children:"Secondary"})}),e("div",{children:e(t,{variant:"ghost",children:"Ghost"})})]})]}),o=i=>r(a,{children:[e(h,{title:"Buttons",description:"The Forms component in the Bootwind Design System provides a fundamental building block for user input and interaction. Customize form fields, layouts, and validation to create user-friendly and functional forms that seamlessly integrate with your design. Whether you're collecting user data, processing payments, or enabling various interactions, the Forms component ensures a smooth and intuitive experience for users as they engage with your application or website."}),r("div",{className:"flex flex-col space-y-4 mt-8",children:[e("div",{children:e(t,{size:"sm",children:"Small"})}),e("div",{children:e(t,{size:"md",children:"Medium"})}),e("div",{children:e(t,{size:"lg",children:"Large"})})]})]});var l,d,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`(args: ButtonProps) => <>
    <Title title="Buttons" description="The Forms component in the Bootwind Design System provides a fundamental building block for user input and interaction. Customize form fields, layouts, and validation to create user-friendly and functional forms that seamlessly integrate with your design. Whether you're collecting user data, processing payments, or enabling various interactions, the Forms component ensures a smooth and intuitive experience for users as they engage with your application or website." />

    <div className="flex flex-col space-y-8">
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
    </div>
  </>`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,m,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`(args: ButtonProps) => <>
    <Title title="Buttons" description="The Forms component in the Bootwind Design System provides a fundamental building block for user input and interaction. Customize form fields, layouts, and validation to create user-friendly and functional forms that seamlessly integrate with your design. Whether you're collecting user data, processing payments, or enabling various interactions, the Forms component ensures a smooth and intuitive experience for users as they engage with your application or website." />
    <div className="flex flex-col space-y-4 mt-8">
      <div>
        <Button size="sm">Small</Button>
      </div>
      <div>
        <Button size="md">Medium</Button>
      </div>
      <div>
        <Button size="lg">Large</Button>
      </div>
    </div>
  </>`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const P=["Variants","Sizes"];export{o as Sizes,n as Variants,P as __namedExportsOrder,T as default};
//# sourceMappingURL=Button.stories-6b95af88.js.map
