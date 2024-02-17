import{j as o,a as z}from"./jsx-runtime-de33e161.js";import{B as D}from"./button-6a1ee990.js";import{c as R}from"./cn-a0481221.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";const l=({children:t})=>o("div",{className:"tooltip-wrapper group relative inline-block",children:t});try{l.displayName="Tooltip",l.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"right"'},{value:'"left"'}]}}}}}catch{}const c=({children:t})=>o("div",{className:"tooltip-trigger inline-flex",children:t});try{c.displayName="TooltipTrigger",c.__docgenInfo={description:"",displayName:"TooltipTrigger",props:{}}}catch{}const g=({children:t,className:j,variant:L,position:S="top"})=>{const V=R("tooltip-content hidden absolute rounded whitespace-nowrap w-auto px-4 py-[6px] text-center text-sm font-semibold shadow-slate-300",L==="dark"?"bg-[#2D3643] text-white":"bg-[#E9EFF6] text-slate-600",{right:"left-full top-1/2 z-20 ml-3 -translate-y-1/2",top:"bottom-full left-1/2 z-20 mb-3 -translate-x-1/2",left:"right-full top-1/2 z-20 mr-3 -translate-y-1/2",bottom:"left-1/2 top-full z-20 mt-3 -translate-x-1/2"}[S]);return o("div",{className:V,children:t})};try{g.displayName="TooltipContent",g.__docgenInfo={description:"",displayName:"TooltipContent",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},position:{defaultValue:{value:"top"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"right"'},{value:'"left"'}]}}}}}catch{}const J={title:"❖ • Components/Tooltip",tags:["autodocs"],component:l,argTypes:{position:{control:"select",options:["top","bottom","left","right"]},variant:{control:"radio",options:["dark","light"]}}},e=t=>z(l,{...t,children:[o(c,{children:o(D,{children:"Hover me to see the tooltip"})}),o(g,{position:t.position,variant:t.variant,children:t.content})]}),r=e.bind({});r.args={position:"top",content:"Top tooltip content",variant:"dark"};const n=e.bind({});n.args={position:"bottom",content:"Bottom tooltip content",variant:"dark"};const a=e.bind({});a.args={position:"left",content:"Left Tooltip Text",variant:"dark"};const i=e.bind({});i.args={position:"right",content:"Right Tooltip Text",variant:"dark"};const s=e.bind({});s.args={position:"right",content:"Light Tooltip"};const p=e.bind({});p.args={position:"right",content:"Dark Tooltip",variant:"dark"};var d,u,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`args => <Tooltip {...args}>
        <TooltipTrigger>
            <Button>Hover me to see the tooltip</Button>
        </TooltipTrigger>
        <TooltipContent position={args.position} variant={args.variant}>
            {args.content}
        </TooltipContent>
    </Tooltip>`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var T,v,f;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`args => <Tooltip {...args}>
        <TooltipTrigger>
            <Button>Hover me to see the tooltip</Button>
        </TooltipTrigger>
        <TooltipContent position={args.position} variant={args.variant}>
            {args.content}
        </TooltipContent>
    </Tooltip>`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var h,_,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`args => <Tooltip {...args}>
        <TooltipTrigger>
            <Button>Hover me to see the tooltip</Button>
        </TooltipTrigger>
        <TooltipContent position={args.position} variant={args.variant}>
            {args.content}
        </TooltipContent>
    </Tooltip>`,...(y=(_=a.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var b,C,B;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`args => <Tooltip {...args}>
        <TooltipTrigger>
            <Button>Hover me to see the tooltip</Button>
        </TooltipTrigger>
        <TooltipContent position={args.position} variant={args.variant}>
            {args.content}
        </TooltipContent>
    </Tooltip>`,...(B=(C=i.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var x,k,N;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`args => <Tooltip {...args}>
        <TooltipTrigger>
            <Button>Hover me to see the tooltip</Button>
        </TooltipTrigger>
        <TooltipContent position={args.position} variant={args.variant}>
            {args.content}
        </TooltipContent>
    </Tooltip>`,...(N=(k=s.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var H,q,w;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`args => <Tooltip {...args}>
        <TooltipTrigger>
            <Button>Hover me to see the tooltip</Button>
        </TooltipTrigger>
        <TooltipContent position={args.position} variant={args.variant}>
            {args.content}
        </TooltipContent>
    </Tooltip>`,...(w=(q=p.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};const K=["Top","Bottom","Left","Right","Light","Dark"];export{n as Bottom,p as Dark,a as Left,s as Light,i as Right,r as Top,K as __namedExportsOrder,J as default};
//# sourceMappingURL=tooltip.stories-1bd5ffca.js.map
