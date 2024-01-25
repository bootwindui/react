import{a as k,j as r}from"./jsx-runtime-de33e161.js";import{A as e}from"./alert-cef9c2bf.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";import"./cn-a0481221.js";import"./index.esm-0ab3a106.js";import"./iconBase-8b874d22.js";const P={tags:["autodocs"],title:"❖ • UI Components/Alert",component:e,args:{title:"Hi There!",description:"Welcome back, User!",dismissButton:!1},argTypes:{description:{description:"The title text",type:"string",control:{type:"text"}},dismissButton:{description:"Whether to show dismiss button",type:"boolean",control:{type:"boolean"}},link:{description:"Add link to the alert",type:"string",control:{type:"object"}},icon:{description:"Alert icon",type:"boolean",control:{type:"boolean"}},variant:{description:"The color type of the alert",type:"string",options:["warning","error","success","info"],control:{type:"select"}},border:{description:"Whether to add border on the alert",type:"string",options:["left","right","all","none"],defaultValue:"none",control:{type:"select"}}}},i={args:{variant:"info",title:"With Title",border:"left",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rerum sequi, aperiam nihil harum sapiente veniam rem soluta quasi fugit voluptatem voluptate tempora consectetur vitae dignissimos at ipsum perspiciatis ab!"}},s={args:{title:"",variant:"success",description:"Order success"}},a={args:{title:"Invalid credentials",variant:"error",description:"Wrong username or password",dismissButton:!0}},o={args:{variant:"info",description:"A new software update is available. See what’s new in version 2.0.4.",title:"Information",icon:!0}},n={args:{variant:"info",description:"A new software update is available. See what’s new in version 2.0.4.",title:"Information",icon:!0,link:{url:"https://google.com",text:"Open link"}}},c=t=>k("div",{className:"flex flex-col gap-5",children:[r(e,{...t,title:"Primary",variant:"success"}),r(e,{...t,title:"Error",variant:"error"}),r(e,{...t,title:"Info",variant:"info"}),r(e,{...t,title:"Warning",variant:"warning"})]});var l,p,m;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: "With Title",
    border: "left",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rerum sequi, aperiam nihil harum sapiente veniam rem soluta quasi fugit voluptatem voluptate tempora consectetur vitae dignissimos at ipsum perspiciatis ab!"
  }
}`,...(m=(p=i.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,d,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: "",
    variant: 'success',
    description: "Order success"
  }
}`,...(g=(d=s.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var v,f,h;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: "Invalid credentials",
    variant: 'error',
    description: "Wrong username or password",
    dismissButton: true
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var w,A,b;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    description: "A new software update is available. See what’s new in version 2.0.4.",
    title: "Information",
    icon: true
  }
}`,...(b=(A=o.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var y,W,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    description: "A new software update is available. See what’s new in version 2.0.4.",
    title: "Information",
    icon: true,
    link: {
      url: 'https://google.com',
      text: 'Open link'
    }
  }
}`,...(x=(W=n.parameters)==null?void 0:W.docs)==null?void 0:x.source}}};var I,S,T;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`(args: AlertProps) => {
  return <div className='flex flex-col gap-5'>
      <Alert {...args} title='Primary' variant='success'></Alert>
      <Alert {...args} title='Error' variant='error'></Alert>
      <Alert {...args} title='Info' variant='info'></Alert>
      <Alert {...args} title='Warning' variant='warning'></Alert>
    </div>;
}`,...(T=(S=c.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const V=["WithTitle","WithoutTitle","DismissButton","WithIcon","Link","Variants"];export{a as DismissButton,n as Link,c as Variants,o as WithIcon,i as WithTitle,s as WithoutTitle,V as __namedExportsOrder,P as default};
//# sourceMappingURL=Alert.stories-b11d0121.js.map
