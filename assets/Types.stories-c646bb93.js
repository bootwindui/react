import{j as s,F as o,a as e}from"./jsx-runtime-03b4ddbf.js";import{A as i}from"./index-085e1fbe.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index.esm-6211d263.js";import"./iconBase-1d38e9b4.js";const B={title:"Components/Alert/Types",component:i,argTypes:{}},r=()=>s(o,{children:[e("div",{className:"mb-5",children:e(i,{type:"info",title:"With Title",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."})}),e(i,{type:"danger",title:"There were 2 errors with your submission",description:s("ul",{role:"list",className:"list-disc space-y-1 pl-5",children:[e("li",{children:"Your password must be at least 8 characters"}),e("li",{children:"Your password must include at least one pro wrestling finishing move"})]})})]}),t=()=>s(o,{children:[e("div",{className:"mb-5",children:e(i,{type:"success",description:"Order success"})}),e("div",{className:"mb-5",children:e(i,{type:"danger",description:"Failed placing your order"})}),e("div",{className:"mb-5",children:e(i,{type:"info",description:"Hello World!"})}),e("div",{className:"mb-5",children:e(i,{type:"warning",description:"You have 2 assignments to do"})})]}),n=()=>s(o,{children:[e("div",{className:"mb-5",children:e(i,{type:"success",dismissButton:!0,description:"Order success"})}),e("div",{className:"mb-5",children:e(i,{type:"danger",dismissButton:!0,description:"Failed placing your order"})}),e("div",{className:"mb-5",children:e(i,{type:"info",dismissButton:!0,description:"Hello World!"})}),e("div",{className:"mb-5",children:e(i,{type:"warning",dismissButton:!0,description:"You have 2 assignments to do"})})]}),a=()=>s(o,{children:[e("div",{className:"mb-5",children:e(i,{icon:!0,description:"A new software update is available. See what’s new in version 2.0.4.",type:"info",title:"Information"})}),e("div",{className:"mb-5",children:e(i,{icon:!0,type:"warning",description:"You have 2 uncompleted assignment"})}),e("div",{className:"mb-5",children:e(i,{icon:!0,type:"success",description:"Order success!"})}),e("div",{className:"mb-5",children:e(i,{icon:!0,type:"danger",description:"Invalid credentials"})})]});var c,d,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => <>
    <div className="mb-5">
      <Alert type="info" title="With Title" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum." />
    </div>

    <Alert type="danger" title="There were 2 errors with your submission" description={<ul role="list" className="list-disc space-y-1 pl-5">
          <li>Your password must be at least 8 characters</li>
          <li>
            Your password must include at least one pro wrestling finishing move
          </li>
        </ul>} />
  </>`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,p,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`() => <>
    <div className="mb-5">
      <Alert type="success" description="Order success" />
    </div>
    <div className="mb-5">
      <Alert type="danger" description="Failed placing your order" />
    </div>
    <div className="mb-5">
      <Alert type="info" description="Hello World!" />
    </div>
    <div className="mb-5">
      <Alert type="warning" description="You have 2 assignments to do" />
    </div>
  </>`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var v,h,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`() => <>
    <div className="mb-5">
      <Alert type="success" dismissButton description="Order success" />
    </div>
    <div className="mb-5">
      <Alert type="danger" dismissButton description="Failed placing your order" />
    </div>
    <div className="mb-5">
      <Alert type="info" dismissButton description="Hello World!" />
    </div>
    <div className="mb-5">
      <Alert type="warning" dismissButton description="You have 2 assignments to do" />
    </div>
  </>`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var g,b,N;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`() => <>
    <div className="mb-5">
      <Alert icon={true} description="A new software update is available. See what’s new in version 2.0.4." type="info" title="Information" />
    </div>
    <div className="mb-5">
      <Alert icon={true} type="warning" description="You have 2 uncompleted assignment" />
    </div>
    <div className="mb-5">
      <Alert icon={true} type="success" description="Order success!" />
    </div>
    <div className="mb-5">
      <Alert icon={true} type="danger" description="Invalid credentials" />
    </div>
  </>`,...(N=(b=a.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};const O=["WithTitle","WithoutTitle","DismissLink","WithIcon"];export{n as DismissLink,a as WithIcon,r as WithTitle,t as WithoutTitle,O as __namedExportsOrder,B as default};
//# sourceMappingURL=Types.stories-c646bb93.js.map
