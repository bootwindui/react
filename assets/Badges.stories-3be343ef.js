import{j as e,a as $,F as U}from"./jsx-runtime-29545a09.js";import{c as X}from"./cn-a0481221.js";import{b as s}from"./index.esm-fa70f5b4.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iconBase-1d38e9b4.js";const Y=({variant:a})=>e("svg",{className:`-ml-0.5 mr-1.5 h-2 w-2 ${(()=>{switch(a){case"primary":return" text-[#4A72FF]";case"neutral":return"text-[#5E718D]";case"warning":return"text-[#D8A800]";case"success":return"text-[#11A75C]";case"error":return"text-[#FF3838]";default:return"text-[#4A72FF]"}})()}`,fill:"currentColor",viewBox:"0 0 8 8",children:e("circle",{cx:4,cy:4,r:3})}),r=({variant:a,size:m="small",withIcon:g=null,withDot:k=!1,children:G,className:H})=>{const J="inline-flex items-center rounded-md px-2.5 py-0.5 font-medium",K={large:"text-sm",small:"text-xs"},M=$(U,{children:[k&&e(Y,{variant:a}),g&&e("span",{className:"mr-1.5",children:g}),G]}),Q=()=>{switch(a){case"primary":return"bg-[#F2F5FF] text-[#4A72FF]";case"neutral":return"bg-[#F0F3F9] text-[#5E718D]";case"warning":return"bg-[#FFF9DF] text-[#D8A800]";case"success":return"bg-[#E3F6ED] text-[#11A75C]";case"error":return"bg-[#FFF5F4] text-[#FF3838]";default:return"bg-[#F2F5FF] text-[#4A72FF]"}};return e("span",{className:X(J,K[m],Q(),H),children:M})};try{r.displayName="Badge",r.__docgenInfo={description:"",displayName:"Badge",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"warning"'},{value:'"error"'},{value:'"success"'},{value:'"primary"'},{value:'"neutral"'}]}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},withIcon:{defaultValue:{value:"null"},description:"",name:"withIcon",required:!1,type:{name:"ReactNode"}},withDot:{defaultValue:{value:"false"},description:"",name:"withDot",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ne={title:"Components/Badge",component:r,tags:["autodocs"],args:{children:"Badge"},argTypes:{variant:{control:{type:"select",options:["primary","neutral","warning","success","error"]}},size:{control:{type:"select",options:["small","large"]}},children:{description:"The badge text",control:{type:"text"}}}},t={args:{variant:"primary"}},n={args:{variant:"neutral"}},o={args:{variant:"warning",withDot:!0}},c={args:{variant:"success"}},i={args:{variant:"error",withIcon:e("span",{children:"🚨"})}},l={args:{variant:"primary",size:"large"}},u={args:{variant:"primary",withIcon:e("span",{children:"🌟"})}},p={args:{variant:"warning",withDot:!0,withIcon:e("span",{children:"🔔"})}},d=()=>$("div",{className:"flex gap-3",children:[e(r,{variant:"warning",withIcon:e(s,{}),children:"Warning"}),e(r,{variant:"primary",withIcon:e(s,{}),children:"Primary"}),e(r,{variant:"error",withIcon:e(s,{}),children:"Error"}),e(r,{variant:"neutral",withIcon:e(s,{}),children:"Neutral"}),e(r,{variant:"success",withIcon:e(s,{}),children:"Success"})]});var v,h,F;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...(F=(h=t.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};var w,y,x;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'neutral'
  }
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var f,I,B;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    withDot: true
  }
}`,...(B=(I=o.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var D,E,N;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'success'
  }
}`,...(N=(E=c.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var S,A,b;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    withIcon: <span>🚨</span>
  }
}`,...(b=(A=i.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var _,C,W;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'large'
  }
}`,...(W=(C=l.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var R,z,V;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    withIcon: <span>🌟</span>
  }
}`,...(V=(z=u.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var q,P,T;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    withDot: true,
    withIcon: <span>🔔</span>
  }
}`,...(T=(P=p.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var j,L,O;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`() => <div className='flex gap-3'>
    <Badge variant="warning" withIcon={<FaRegEnvelope />}>
      Warning
    </Badge>
    <Badge variant="primary" withIcon={<FaRegEnvelope />}>
      Primary
    </Badge>
    <Badge variant="error" withIcon={<FaRegEnvelope />}>
      Error
    </Badge>
    <Badge variant="neutral" withIcon={<FaRegEnvelope />}>
      Neutral
    </Badge>
    <Badge variant="success" withIcon={<FaRegEnvelope />}>
      Success
    </Badge>
  </div>`,...(O=(L=d.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const oe=["Primary","Neutral","Warning","Success","Error","Large","WithIcon","WithDotAndIcon","AllBadges"];export{d as AllBadges,i as Error,l as Large,n as Neutral,t as Primary,c as Success,o as Warning,p as WithDotAndIcon,u as WithIcon,oe as __namedExportsOrder,ne as default};
//# sourceMappingURL=Badges.stories-3be343ef.js.map
