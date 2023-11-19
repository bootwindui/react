import{j as a,F as i,a as o,T as m}from"./title-2f3446b7.js";import{T as t}from"./index-4b43864b.js";import{F as s,a as g}from"./index.esm-fa70f5b4.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iconBase-1d38e9b4.js";const h={title:"Components/Forms/Toggle",component:t,argTypes:{enabled:{control:"boolean"}}},l=d=>a(i,{children:[o(m,{title:"Toggle",description:"Toggle"}),a("div",{className:"flex flex-col space-y-4",children:[o(t,{onToggle:e=>console.log("Switch toggled:",e),color:"primary",iconOn:o(s,{className:"text-primary h-3 w-3 mt-1 mx-auto justify-center items-center"}),iconOff:o(g,{className:"text-gray-500 h-3 w-3 mx-auto mt-1"})}),o(t,{onToggle:e=>console.log("Switch toggled:",e),color:"secondary",iconOn:o(s,{className:"text-black h-3 w-3 mt-1 mx-auto justify-center items-center"}),iconOff:o(g,{className:"text-gray-500 h-3 w-3 mx-auto mt-1"})}),o(t,{onToggle:e=>console.log("Switch toggled:",e),color:"primary"}),o(t,{onToggle:e=>console.log("Switch toggled:",e),color:"secondary"})]})]});var c,r,n;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`(args: ToggleProps) => <>

    <Title title="Toggle" description="Toggle" />

    <div className="flex flex-col space-y-4">
      <Toggle onToggle={isEnabled => console.log('Switch toggled:', isEnabled)} color="primary" iconOn={<FaSun className="text-primary h-3 w-3 mt-1 mx-auto justify-center items-center" />} iconOff={<FaMoon className="text-gray-500 h-3 w-3 mx-auto mt-1" />} />
      <Toggle onToggle={isEnabled => console.log('Switch toggled:', isEnabled)} color="secondary" iconOn={<FaSun className="text-black h-3 w-3 mt-1 mx-auto justify-center items-center" />} iconOff={<FaMoon className="text-gray-500 h-3 w-3 mx-auto mt-1" />} />
      <Toggle onToggle={isEnabled => console.log('Switch toggled:', isEnabled)} color="primary" />
      <Toggle onToggle={isEnabled => console.log('Switch toggled:', isEnabled)} color="secondary" />

    </div>
  </>`,...(n=(r=l.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const w=["ToggleDark"];export{l as ToggleDark,w as __namedExportsOrder,h as default};
//# sourceMappingURL=Toggle.stories-0e3bcdd9.js.map
