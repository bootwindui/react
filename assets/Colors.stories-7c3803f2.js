import{a as s,j as e}from"./jsx-runtime-de33e161.js";import"./index-37ba2b57.js";import"./_commonjsHelpers-de833af9.js";const h={title:"❖ • Core/Colors"},l=()=>{const t=["slate","gray","zinc","neutral","stone","red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose"],i=[50,100,200,300,400,500,600,700,800,900,950];return s("div",{className:"bg-white rounded-md p-5",children:[e("h2",{className:"text-4xl font-bold text-black tracking-tight",children:"Colors"}),s("p",{className:"mb-5 font-semibold",children:["All the colors used by default tailwind classes ",e("a",{href:"https://tailwindcss.com/docs/colors",children:"https://tailwindcss.com/docs/colors"})]}),e("hr",{className:"h-px my-4 bg-gray-400 border-0"}),e("div",{className:"flex gap-5 mb-5",children:s("div",{children:[e("div",{className:"color-swatch bg-primary w-48 h-16 rounded-md mb-2"}),e("p",{className:"flex justify-between",children:e("span",{children:"primary"})})]})}),t.map(a=>e("div",{className:"flex gap-5 mb-5",children:i.map(r=>s("div",{children:[e("div",{className:`color-swatch bg-${a}-${r} w-32 h-20 rounded-md mb-2`}),s("p",{className:"flex justify-between",children:[e("span",{children:a}),e("span",{children:r})]})]}))}))]})};var o,c,d;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const colors = ['slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'];
  const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  return <div className='bg-white rounded-md p-5'>
      <h2 className="text-4xl font-bold text-black tracking-tight">Colors</h2>
      <p className='mb-5 font-semibold'>All the colors used by default tailwind classes <a href="https://tailwindcss.com/docs/colors">https://tailwindcss.com/docs/colors</a></p>
      <hr className="h-px my-4 bg-gray-400 border-0" />
      <div className="flex gap-5 mb-5">
        <div>
          <div className={\`color-swatch bg-primary w-48 h-16 rounded-md mb-2\`}>
          </div>
          <p className='flex justify-between'>
            <span>primary</span>
          </p>
        </div>
      </div>
      {colors.map(color => {
      return <div className="flex gap-5 mb-5">
            {levels.map(level => <div>
                <div className={\`color-swatch bg-\${color}-\${level} w-32 h-20 rounded-md mb-2\`}>
                </div>
                <p className='flex justify-between'>
                  <span>{color}</span>
                  <span>{level}</span>
                </p>
              </div>)}
          </div>;
    })}
    </div>;
}`,...(d=(c=l.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const b=["AllColors"];export{l as AllColors,b as __namedExportsOrder,h as default};
//# sourceMappingURL=Colors.stories-7c3803f2.js.map
