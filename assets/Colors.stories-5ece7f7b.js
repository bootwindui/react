import{a as e,j as n}from"./jsx-runtime-03b4ddbf.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const u={title:"Components/Core/Colors",argTypes:{variant:{control:{type:"radio",options:["primary","secondary","ghost"]}},size:{control:{type:"radio",options:["sm","md","lg","xl"]}}}},r=()=>{const i=["slate","gray","zinc","neutral","stone","red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose"],c=[50,100,200,300,400,500,600,700,800,900,950];return e("div",{children:i.map(s=>e("div",{className:"flex gap-5 mb-5",children:c.map(o=>n("div",{children:[e("div",{className:`color-swatch bg-${s}-${o} w-32 h-20 rounded-md`}),n("p",{className:"flex justify-between",children:[e("span",{children:s}),e("span",{children:o})]})]}))}))})};var l,a,t;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const colors = ['slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'];
  const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  return <div>
      {colors.map(color => {
      return <div className="flex gap-5 mb-5">
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
}`,...(t=(a=r.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const v=["AllColors"];export{r as AllColors,v as __namedExportsOrder,u as default};
//# sourceMappingURL=Colors.stories-5ece7f7b.js.map
