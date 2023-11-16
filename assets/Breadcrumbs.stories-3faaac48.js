import{a as e,j as s,F as C}from"./jsx-runtime-03b4ddbf.js";import{R as x}from"./index-76fb7be0.js";import{c as A,d as g,e as _,f as G,g as N}from"./index.esm-6211d263.js";import"./_commonjsHelpers-de833af9.js";import"./iconBase-1d38e9b4.js";const c=({children:o})=>e("nav",{className:"flex","aria-label":"Breadcrumb",children:e("ol",{role:"list",className:"flex items-center space-x-2",children:x.Children.map(o,(t,n)=>e("li",{children:s("div",{className:"flex items-center",children:[n>0&&e(A,{className:"mr-2 h-3 w-3 flex-shrink-0 text-gray-500","aria-hidden":"true"}),t]})},n))})}),r=({href:o,children:t,icon:n,isActive:i=!1})=>{const v=o?e("a",{className:`text-sm font-medium ${i?"text-indigo-600":"text-gray-500 hover:text-gray-700"}`,href:o,children:t}):e("span",{className:`text-sm font-medium ${i?"text-indigo-600":"text-gray-500"}`,children:t});return s(C,{children:[n&&x.cloneElement(n,{className:`${i?"text-indigo-600":"text-gray-500"} ${t?"mr-2":""}`}),v]})};try{c.displayName="Breadcrumbs",c.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{}}}catch{}try{r.displayName="BreadcrumbItem",r.__docgenInfo={description:"",displayName:"BreadcrumbItem",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},isActive:{defaultValue:{value:"false"},description:"",name:"isActive",required:!1,type:{name:"boolean"}}}}}catch{}const k={title:"Components/Breadcrumbs",component:c,argTypes:{}},m=()=>s(c,{children:[e(r,{icon:e(g,{}),href:"/",children:"Home"}),e(r,{href:"/docs",icon:e(_,{}),children:"Docs"}),e(r,{href:"/docs/components",icon:e(G,{}),children:"Components"}),e(r,{href:"/docs/components/button",icon:e(N,{}),isActive:!0,children:"Button"})]}),a=()=>s(c,{children:[e(r,{href:"/",children:"Home"}),e(r,{href:"/docs",children:"Docs"}),e(r,{href:"/docs/components",children:"Components"}),e(r,{href:"/docs/components/button",isActive:!0,children:"Button"})]}),d=()=>s(c,{children:[e(r,{href:"/",icon:e(g,{})}),e(r,{href:"/docs",icon:e(_,{})}),e(r,{href:"/docs/components",icon:e(G,{})}),e(r,{href:"/docs/components/button",icon:e(N,{}),isActive:!0})]});var u,l,p;m.parameters={...m.parameters,docs:{...(u=m.parameters)==null?void 0:u.docs,source:{originalSource:`() => <Breadcrumbs>
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
  </Breadcrumbs>`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var h,b,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => <Breadcrumbs>
    <BreadcrumbItem href="/">Home</BreadcrumbItem>
    <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
    <BreadcrumbItem href="/docs/components">Components</BreadcrumbItem>
    <BreadcrumbItem href="/docs/components/button" isActive>
      Button
    </BreadcrumbItem>
  </Breadcrumbs>`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var B,I,y;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`() => <Breadcrumbs>
    <BreadcrumbItem href="/" icon={<GoHome />}></BreadcrumbItem>
    <BreadcrumbItem href="/docs" icon={<GoBook />}></BreadcrumbItem>
    <BreadcrumbItem href="/docs/components" icon={<GoComment />}></BreadcrumbItem>
    <BreadcrumbItem href="/docs/components/button" icon={<GoFileDirectory />} isActive></BreadcrumbItem>
  </Breadcrumbs>`,...(y=(I=d.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};const R=["TextAndIcon","OnlyText","OnlyIcon"];export{d as OnlyIcon,a as OnlyText,m as TextAndIcon,R as __namedExportsOrder,k as default};
//# sourceMappingURL=Breadcrumbs.stories-3faaac48.js.map
