import{j as e,a as i,F as A}from"./jsx-runtime-29545a09.js";import{R as B}from"./index-76fb7be0.js";import{G as l,a as G,b as N,c as v,d as C}from"./index.esm-f0e39e14.js";import"./_commonjsHelpers-de833af9.js";import"./iconBase-1d38e9b4.js";const m=({children:r,items:o})=>e("nav",{className:"flex","aria-label":"Breadcrumb",children:i("ol",{role:"list",className:"flex items-center space-x-2",children:[o==null?void 0:o.map((s,n)=>e("li",{children:i("div",{className:"flex items-center",children:[n>0&&e(l,{className:"mr-2 h-3 w-3 flex-shrink-0 text-gray-500","aria-hidden":"true"}),e(d,{...s})]})},n)),B.Children.map(r,(s,n)=>e("li",{children:i("div",{className:"flex items-center",children:[n>0&&e(l,{className:"mr-2 h-3 w-3 flex-shrink-0 text-gray-500","aria-hidden":"true"}),s]})},n))]})}),d=({href:r,children:o,icon:s,isActive:n=!1})=>{const I=r?e("a",{className:`text-sm font-medium ${n?"text-indigo-600":"text-gray-500 hover:text-gray-700"}`,href:r,children:o}):e("span",{className:`text-sm font-medium ${n?"text-indigo-600":"text-gray-500"}`,children:o});return i(A,{children:[s&&B.cloneElement(s,{className:`${n?"text-indigo-600":"text-gray-500"} ${o?"mr-2":""}`}),I]})};try{m.displayName="Breadcrumbs",m.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"BreadcrumbItemProps[]"}}}}}catch{}try{d.displayName="BreadcrumbItem",d.__docgenInfo={description:"",displayName:"BreadcrumbItem",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},isActive:{defaultValue:{value:"false"},description:"",name:"isActive",required:!1,type:{name:"boolean"}}}}}catch{}const T={title:"Components/Breadcrumbs",component:m,tags:["autodocs"],argTypes:{items:{description:"Breadcrumb items to render",control:{type:"array"}}}},t={args:{items:[{icon:e(G,{}),href:"/docs",children:"Home"},{icon:e(N,{}),href:"/docs/components",children:"Docs"},{icon:e(v,{}),href:"/docs/components",children:"Components"},{icon:e(C,{}),href:"/docs/components/button",isActive:!0,children:"Button"}]}},c={args:{items:[{href:"/docs",children:"Home"},{href:"/docs/components",children:"Docs"},{href:"/docs/components",children:"Components"},{href:"/docs/components/button",isActive:!0,children:"Button"}]}},a={args:{items:[{icon:e(G,{}),href:"/docs"},{icon:e(N,{}),href:"/docs/components"},{icon:e(v,{}),href:"/docs/components"},{icon:e(C,{}),href:"/docs/components/button",isActive:!0}]}};var p,u,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,y,g;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(g=(y=c.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var x,b,_;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(_=(b=a.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};const q=["TextAndIcon","OnlyText","OnlyIcons"];export{a as OnlyIcons,c as OnlyText,t as TextAndIcon,q as __namedExportsOrder,T as default};
//# sourceMappingURL=Breadcrumbs.stories-2cb10ca7.js.map
