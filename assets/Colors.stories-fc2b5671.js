import{a as s,j as e}from"./jsx-runtime-29545a09.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const v={title:"Components/Core/Colors"},a=()=>{const c=["slate","gray","zinc","neutral","stone","red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose"],d=[50,100,200,300,400,500,600,700,800,900,950];return s("div",{className:"bg-[#F4F5F7] p-4",children:[e("div",{className:"flex gap-5 mb-5 px-5",children:s("div",{children:[e("div",{className:"color-swatch bg-primary w-48 h-16 rounded-md"}),e("p",{className:"flex justify-between",children:e("span",{children:"primary"})})]})}),c.map(n=>e("div",{className:"flex gap-5 mb-5 px-5",children:d.map(r=>s("div",{children:[e("div",{className:`color-swatch bg-${n}-${r} w-32 h-20 rounded-md`}),s("p",{className:"flex justify-between",children:[e("span",{children:n}),e("span",{children:r})]})]}))}))]})};var l,o,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const colors = ['slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'];
  const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  return <div className='bg-[#F4F5F7] p-4'>
      <div className="flex gap-5 mb-5 px-5">
        <div>
          <div className={\`color-swatch bg-primary w-48 h-16 rounded-md\`}>
          </div>
          <p className='flex justify-between'>
            <span>primary</span>
          </p>
        </div>
      </div>
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
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const u=["AllColors"];export{a as AllColors,u as __namedExportsOrder,v as default};
//# sourceMappingURL=Colors.stories-fc2b5671.js.map
