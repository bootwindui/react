import{j as e,a as m}from"./jsx-runtime-29545a09.js";import{R as B}from"./index-76fb7be0.js";import{c as p,d as v,e as G,f as C,g as I}from"./index.esm-6211d263.js";import{c as A}from"./cn-a0481221.js";import"./_commonjsHelpers-de833af9.js";import"./iconBase-1d38e9b4.js";const d=({children:s,items:n,className:t})=>e("nav",{className:A("flex",t),"aria-label":"Breadcrumb",children:m("ol",{role:"list",className:"flex items-center space-x-2",children:[n==null?void 0:n.map((o,r)=>e("li",{children:m("div",{className:"inline-flex items-center",children:[r>0&&e(p,{className:"mr-2 h-3 w-3 flex-shrink-0 text-gray-500","aria-hidden":"true"}),e(l,{...o})]})},r)),B.Children.map(s,(o,r)=>e("li",{children:m("div",{className:"flex items-center",children:[r>0&&e(p,{className:"mr-2 h-3 w-3 flex-shrink-0 text-gray-500","aria-hidden":"true"}),o]})},r))]})}),l=({href:s,children:n,icon:t,isActive:o=!1,className:r})=>{const D=s?e("a",{className:`text-sm font-medium ${o?"text-indigo-600":"text-gray-500 hover:text-gray-700"}`,href:s,children:n}):e("span",{className:`text-sm font-medium ${o?"text-indigo-600":"text-gray-500"}`,children:n});return m("div",{className:A("breadcrumb inline-flex",r),children:[t&&B.cloneElement(t,{className:`${o?"text-indigo-600":"text-gray-500"} ${n?"mr-2":""}`}),D]})};try{d.displayName="Breadcrumbs",d.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"BreadcrumbItemProps[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{l.displayName="BreadcrumbItem",l.__docgenInfo={description:"",displayName:"BreadcrumbItem",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},isActive:{defaultValue:{value:"false"},description:"",name:"isActive",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const R={title:"Components/Breadcrumbs",component:d,tags:["autodocs"],argTypes:{items:{description:"Breadcrumb items to render",control:{type:"array"}}}},c={args:{items:[{icon:e(v,{}),href:"/docs",children:"Home"},{icon:e(G,{}),href:"/docs/components",children:"Docs"},{icon:e(C,{}),href:"/docs/components",children:"Components"},{icon:e(I,{}),href:"/docs/components/button",isActive:!0,children:"Button"}]}},a={args:{items:[{href:"/docs",children:"Home"},{href:"/docs/components",children:"Docs"},{href:"/docs/components",children:"Components"},{href:"/docs/components/button",isActive:!0,children:"Button"}]}},i={args:{items:[{icon:e(v,{}),href:"/docs"},{icon:e(G,{}),href:"/docs/components"},{icon:e(C,{}),href:"/docs/components"},{icon:e(I,{}),href:"/docs/components/button",isActive:!0}]}};var u,h,f;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    items: [{
      icon: <GoHome />,
      href: '/docs',
      children: 'Home'
    }, {
      icon: <GoBook />,
      href: '/docs/components',
      children: 'Docs'
    }, {
      icon: <GoComment />,
      href: '/docs/components',
      children: 'Components'
    }, {
      icon: <GoFileDirectory />,
      href: '/docs/components/button',
      isActive: true,
      children: 'Button'
    }]
  }
}`,...(f=(h=c.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,g,x;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    items: [{
      href: '/docs',
      children: 'Home'
    }, {
      href: '/docs/components',
      children: 'Docs'
    }, {
      href: '/docs/components',
      children: 'Components'
    }, {
      href: '/docs/components/button',
      isActive: true,
      children: 'Button'
    }]
  }
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,N,_;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    items: [{
      icon: <GoHome />,
      href: '/docs'
    }, {
      icon: <GoBook />,
      href: '/docs/components'
    }, {
      icon: <GoComment />,
      href: '/docs/components'
    }, {
      icon: <GoFileDirectory />,
      href: '/docs/components/button',
      isActive: true
    }]
  }
}`,...(_=(N=i.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};const $=["TextAndIcon","OnlyText","OnlyIcons"];export{i as OnlyIcons,a as OnlyText,c as TextAndIcon,$ as __namedExportsOrder,R as default};
//# sourceMappingURL=Breadcrumbs.stories-27eb355f.js.map
