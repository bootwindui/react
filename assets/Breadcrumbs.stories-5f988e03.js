import{a as e,j as t,F as d,T as l}from"./title-2f3446b7.js";import{R as x}from"./index-76fb7be0.js";import{c as D,d as k,e as w,f as _,g as C}from"./index.esm-6211d263.js";import"./_commonjsHelpers-de833af9.js";import"./iconBase-1d38e9b4.js";const n=({children:a})=>e("nav",{className:"flex","aria-label":"Breadcrumb",children:e("ol",{role:"list",className:"flex items-center space-x-2",children:x.Children.map(a,(o,i)=>e("li",{children:t("div",{className:"flex items-center",children:[i>0&&e(D,{className:"mr-2 h-3 w-3 flex-shrink-0 text-gray-500","aria-hidden":"true"}),o]})},i))})}),r=({href:a,children:o,icon:i,isActive:u=!1})=>{const T=a?e("a",{className:`text-sm font-medium ${u?"text-indigo-600":"text-gray-500 hover:text-gray-700"}`,href:a,children:o}):e("span",{className:`text-sm font-medium ${u?"text-indigo-600":"text-gray-500"}`,children:o});return t(d,{children:[i&&x.cloneElement(i,{className:`${u?"text-indigo-600":"text-gray-500"} ${o?"mr-2":""}`}),T]})};try{n.displayName="Breadcrumbs",n.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{}}}catch{}try{r.displayName="BreadcrumbItem",r.__docgenInfo={description:"",displayName:"BreadcrumbItem",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},isActive:{defaultValue:{value:"false"},description:"",name:"isActive",required:!1,type:{name:"boolean"}}}}}catch{}const z={title:"Components/Breadcrumbs",component:n,argTypes:{}},s=()=>t(d,{children:[e(l,{title:"Breadcrumbs",description:"The Breadcrumbs component in the Bootwind Design System provides users with a clear and intuitive navigation path through your website or application. Customize the appearance, style, and links to create a breadcrumb trail that helps users easily track their location and navigate back to previous pages, enhancing overall usability and user experience."}),t(n,{children:[e(r,{icon:e(k,{}),href:"/",children:"Home"}),e(r,{href:"/docs",icon:e(w,{}),children:"Docs"}),e(r,{href:"/docs/components",icon:e(_,{}),children:"Components"}),e(r,{href:"/docs/components/button",icon:e(C,{}),isActive:!0,children:"Button"})]})]}),c=()=>t(d,{children:[e(l,{title:"Breadcrumbs",description:"The Breadcrumbs component in the Bootwind Design System provides users with a clear and intuitive navigation path through your website or application. Customize the appearance, style, and links to create a breadcrumb trail that helps users easily track their location and navigate back to previous pages, enhancing overall usability and user experience."}),t(n,{children:[e(r,{href:"/",children:"Home"}),e(r,{href:"/docs",children:"Docs"}),e(r,{href:"/docs/components",children:"Components"}),e(r,{href:"/docs/components/button",isActive:!0,children:"Button"})]})]}),m=()=>t(d,{children:[e(l,{title:"Breadcrumbs",description:"The Breadcrumbs component in the Bootwind Design System provides users with a clear and intuitive navigation path through your website or application. Customize the appearance, style, and links to create a breadcrumb trail that helps users easily track their location and navigate back to previous pages, enhancing overall usability and user experience."}),t(n,{children:[e(r,{href:"/",icon:e(k,{})}),e(r,{href:"/docs",icon:e(w,{})}),e(r,{href:"/docs/components",icon:e(_,{})}),e(r,{href:"/docs/components/button",icon:e(C,{}),isActive:!0})]})]});var p,h,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`() => <>
    <Title title="Breadcrumbs" description="The Breadcrumbs component in the Bootwind Design System provides users with a clear and intuitive navigation path through your website or application. Customize the appearance, style, and links to create a breadcrumb trail that helps users easily track their location and navigate back to previous pages, enhancing overall usability and user experience." />

    <Breadcrumbs>
      <BreadcrumbItem icon={<GoHome />} href="/">
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="/docs" icon={<GoBook />}>
        Docs
      </BreadcrumbItem>
      <BreadcrumbItem href="/docs/components" icon={<GoComment />}>
        Components
      </BreadcrumbItem>
      <BreadcrumbItem href="/docs/components/button" icon={<GoFileDirectory />} isActive>
        Button
      </BreadcrumbItem>
    </Breadcrumbs>
  </>`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var B,g,y;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`() => <>
    <Title title="Breadcrumbs" description="The Breadcrumbs component in the Bootwind Design System provides users with a clear and intuitive navigation path through your website or application. Customize the appearance, style, and links to create a breadcrumb trail that helps users easily track their location and navigate back to previous pages, enhancing overall usability and user experience." />

    <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
      <BreadcrumbItem href="/docs/components">Components</BreadcrumbItem>
      <BreadcrumbItem href="/docs/components/button" isActive>
        Button
      </BreadcrumbItem>
    </Breadcrumbs>
  </>`,...(y=(g=c.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var v,f,I;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`() => <>

    <Title title="Breadcrumbs" description="The Breadcrumbs component in the Bootwind Design System provides users with a clear and intuitive navigation path through your website or application. Customize the appearance, style, and links to create a breadcrumb trail that helps users easily track their location and navigate back to previous pages, enhancing overall usability and user experience." />

    <Breadcrumbs>
      <BreadcrumbItem href="/" icon={<GoHome />}></BreadcrumbItem>
      <BreadcrumbItem href="/docs" icon={<GoBook />}></BreadcrumbItem>
      <BreadcrumbItem href="/docs/components" icon={<GoComment />}></BreadcrumbItem>
      <BreadcrumbItem href="/docs/components/button" icon={<GoFileDirectory />} isActive></BreadcrumbItem>
    </Breadcrumbs>
  </>`,...(I=(f=m.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};const F=["TextAndIcon","OnlyText","OnlyIcon"];export{m as OnlyIcon,c as OnlyText,s as TextAndIcon,F as __namedExportsOrder,z as default};
//# sourceMappingURL=Breadcrumbs.stories-5f988e03.js.map
