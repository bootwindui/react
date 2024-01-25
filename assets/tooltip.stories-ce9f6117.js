import{j as o,a as z}from"./jsx-runtime-de33e161.js";import{B as D}from"./button-6a1ee990.js";import{c as j}from"./cn-a0481221.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";const E=({children:t})=>o("div",{className:"tooltip-wrapper group relative inline-block",children:t}),w=E;try{tooltip.displayName="tooltip",tooltip.__docgenInfo={description:"",displayName:"tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"right"'},{value:'"left"'}]}}}}}catch{}const l=({children:t})=>o("div",{className:"tooltip-trigger inline-flex ",children:t});try{l.displayName="TooltipTrigger",l.__docgenInfo={description:"",displayName:"TooltipTrigger",props:{}}}catch{}const c=({children:t,className:I,variant:S,position:V="top"})=>{const L=j("tooltip-content hidden absolute rounded whitespace-nowrap w-auto px-4 py-[6px] text-center text-sm font-semibold shadow-slate-300",S==="dark"?"bg-[#2D3643] text-white":"bg-[#E9EFF6] text-slate-600",{right:"left-full top-1/2 z-20 ml-3 -translate-y-1/2",top:"bottom-full left-1/2 z-20 mb-3 -translate-x-1/2",left:"right-full top-1/2 z-20 mr-3 -translate-y-1/2",bottom:"left-1/2 top-full z-20 mt-3 -translate-x-1/2"}[V]);return o("div",{className:L,children:t})};try{c.displayName="TooltipContent",c.__docgenInfo={description:"",displayName:"TooltipContent",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},position:{defaultValue:{value:"top"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"right"'},{value:'"left"'}]}}}}}catch{}const J={title:"❖ • Components/Tooltip",component:w,argTypes:{position:{control:{type:"select",options:["top","bottom","left","right"]}}}},e=t=>z(w,{...t,children:[o(l,{children:o(D,{children:"Hover me to see the tooltip"})}),o(c,{position:t.position,variant:t.variant,children:t.content})]}),r=e.bind({});r.args={position:"top",content:"Tooltip Text",variant:"dark"};const n=e.bind({});n.args={position:"bottom",content:"This is a custom tooltip content",variant:"dark"};const a=e.bind({});a.args={position:"left",content:"Tooltip Text",variant:"dark"};const i=e.bind({});i.args={position:"right",content:"Tooltip Text",variant:"dark"};const s=e.bind({});s.args={position:"bottom",content:"Light Tooltip"};const p=e.bind({});p.args={position:"bottom",content:"Dark Tooltip",variant:"dark"};var g,m,u;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => <Tooltip {...args}>
        <TooltipTrigger>
            <Button>Hover me to see the tooltip</Button>
        </TooltipTrigger>
        <TooltipContent position={args.position} variant={args.variant}>
            {args.content}
        </TooltipContent>
    </Tooltip>`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,T,v;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`args => <Tooltip {...args}>
        <TooltipTrigger>
            <Button>Hover me to see the tooltip</Button>
        </TooltipTrigger>
        <TooltipContent position={args.position} variant={args.variant}>
            {args.content}
        </TooltipContent>
    </Tooltip>`,...(v=(T=n.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var f,h,_;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`args => <Tooltip {...args}>
        <TooltipTrigger>
            <Button>Hover me to see the tooltip</Button>
        </TooltipTrigger>
        <TooltipContent position={args.position} variant={args.variant}>
            {args.content}
        </TooltipContent>
    </Tooltip>`,...(_=(h=a.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var y,b,C;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`args => <Tooltip {...args}>
        <TooltipTrigger>
            <Button>Hover me to see the tooltip</Button>
        </TooltipTrigger>
        <TooltipContent position={args.position} variant={args.variant}>
            {args.content}
        </TooltipContent>
    </Tooltip>`,...(C=(b=i.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var x,B,N;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`args => <Tooltip {...args}>
        <TooltipTrigger>
            <Button>Hover me to see the tooltip</Button>
        </TooltipTrigger>
        <TooltipContent position={args.position} variant={args.variant}>
            {args.content}
        </TooltipContent>
    </Tooltip>`,...(N=(B=s.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var k,H,q;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`args => <Tooltip {...args}>
        <TooltipTrigger>
            <Button>Hover me to see the tooltip</Button>
        </TooltipTrigger>
        <TooltipContent position={args.position} variant={args.variant}>
            {args.content}
        </TooltipContent>
    </Tooltip>`,...(q=(H=p.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};const K=["Top","Bottom","Left","Right","Light","Dark"];export{n as Bottom,p as Dark,a as Left,s as Light,i as Right,r as Top,K as __namedExportsOrder,J as default};
//# sourceMappingURL=tooltip.stories-ce9f6117.js.map
