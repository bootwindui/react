import{a as k,j as e}from"./jsx-runtime-de33e161.js";import{r as a}from"./index-37ba2b57.js";import{c as E}from"./cn-a0481221.js";import"./_commonjsHelpers-de833af9.js";const l=({min:o=1,max:i=5,className:_,leftContent:c,rightContent:d})=>{const[V,j]=a.useState((o+i)/2),[m,p]=a.useState(null),[u,w]=a.useState({x:0,y:0}),[T,h]=a.useState(!1);return k("fieldset",{className:"flex flex-nowrap items-center max-w-xs space-x-2 text-gray-100 relative",children:[c&&e("label",{htmlFor:"Slider",children:c}),e("input",{id:"Slider",type:"range",value:V,onChange:t=>{j(parseInt(t.target.value,10))},onMouseMove:t=>{const q=parseInt(t.currentTarget.value,10),I=t.currentTarget.getBoundingClientRect();w({x:t.clientX,y:I.top-30}),p(q),h(!0)},onMouseLeave:()=>{p(null),h(!1)},className:E(_,"w-full h-2 rounded-lg cursor-pointer accent-primary"),min:o,max:i}),T&&m!==null&&e("div",{className:"tooltip absolute bg-gray-800 text-white text-xs py-1 px-2 rounded",style:{left:u.x,top:u.y},children:m}),d&&e("label",{htmlFor:"Slider",children:d})]})};try{l.displayName="Slider",l.__docgenInfo={description:"",displayName:"Slider",props:{min:{defaultValue:{value:"1"},description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:{value:"5"},description:"",name:"max",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},leftContent:{defaultValue:null,description:"",name:"leftContent",required:!1,type:{name:"ReactNode"}},rightContent:{defaultValue:null,description:"",name:"rightContent",required:!1,type:{name:"ReactNode"}}}}}catch{}const F={title:"❖ • Components/Slider",tags:["autodocs"],component:l,argTypes:{leftContent:{control:"text",description:"Your left content, can be text, emoji or icon"},rightContent:{control:"text",description:"Your right content, can be text, emoji or icon"},className:{control:"text",description:"String"}}},n={args:{min:0,max:10}},r={args:{min:0,max:100,leftContent:e("span",{children:"🔉"}),rightContent:e("span",{children:"🔊"})}},s={args:{min:0,max:100,leftContent:e("span",{className:"text-black",children:"0"}),rightContent:e("span",{className:"text-black",children:"100"})}};var g,x,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 10
  }
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var S,y,C;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    leftContent: <span>🔉</span>,
    rightContent: <span>🔊</span>
  }
}`,...(C=(y=r.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var N,b,v;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    leftContent: <span className='text-black'>0</span>,
    rightContent: <span className='text-black'>100</span>
  }
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const P=["Basic","WithEmojiOrIcon","WithNumber"];export{n as Basic,r as WithEmojiOrIcon,s as WithNumber,P as __namedExportsOrder,F as default};
//# sourceMappingURL=slider.stories-46c98d76.js.map
