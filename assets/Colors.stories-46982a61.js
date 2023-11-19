import{j as a,a as e,T as d}from"./title-2f3446b7.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const h={title:"Components/Core/Colors",argTypes:{variant:{control:{type:"radio",options:["primary","secondary","ghost"]}},size:{control:{type:"radio",options:["sm","md","lg","xl"]}}}},o=()=>{const l=["slate","gray","zinc","neutral","stone","red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose"],c=[50,100,200,300,400,500,600,700,800,900,950];return a("div",{children:[e(d,{title:"Color Styles",description:"Color Styles in the Bootwind Design System are a cornerstone of your design's visual identity. Customize color palettes, shades, and themes to create a cohesive and appealing color scheme that aligns with your brand or project. Whether you're aiming for a vibrant and energetic look or a calm and minimalist aesthetic, Color Styles allow you to convey the right emotions and capture your audience's attention, enhancing the overall visual impact and recognition of your design."}),l.map(r=>e("div",{className:"flex gap-5 mb-5 px-5",children:c.map(t=>a("div",{children:[e("div",{className:`color-swatch bg-${r}-${t} w-32 h-20 rounded-md`}),a("p",{className:"flex justify-between",children:[e("span",{children:r}),e("span",{children:t})]})]}))}))]})};var s,n,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const colors = ['slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'];
  const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  return <div>

      <Title title="Color Styles" description="Color Styles in the Bootwind Design System are a cornerstone of your design's visual identity. Customize color palettes, shades, and themes to create a cohesive and appealing color scheme that aligns with your brand or project. Whether you're aiming for a vibrant and energetic look or a calm and minimalist aesthetic, Color Styles allow you to convey the right emotions and capture your audience's attention, enhancing the overall visual impact and recognition of your design." />

      {colors.map(color => {
      return <div className="flex gap-5 mb-5 px-5">
            {levels.map(level => <div>
                <div className={\`color-swatch bg-\${color}-\${level} w-32 h-20 rounded-md\`}>
                </div>
                <p className='flex justify-between'>
                  <span>{color}</span>
                  <span>{level}</span>
                </p>
              </div>)}
          </div>;
    })}
    </div>;
}`,...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const y=["AllColors"];export{o as AllColors,y as __namedExportsOrder,h as default};
//# sourceMappingURL=Colors.stories-46982a61.js.map
