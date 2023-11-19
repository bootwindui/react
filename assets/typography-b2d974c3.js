import{a as m}from"./title-2f3446b7.js";const t={display:{defaults:{fontWeight:"font-bold",color:"text-[#3D4A5C]",size:1},styles:[{fontSize:"text-[11.6rem]",lineHeight:"leading-[13.2rem]",letterSpacing:"tracking-[3.5px]",mb:"mb-5"},{fontSize:"text-[9rem]",lineHeight:"leading-[10.62rem]",letterSpacing:"tracking-[3.5px]",mb:"mb-5"},{fontSize:"text-[7.5rem]",lineHeight:"leading-[8.37rem]",letterSpacing:"tracking-[3.5px]",mb:"mb-5"},{fontSize:"text-[6rem]",lineHeight:"leading-[6.87rem]",letterSpacing:"tracking-[2.5px]",mb:"mb-5"}]},headline:{defaults:{fontWeight:"font-bold",color:"text-[#3D4A5C]",size:1},styles:[{fontSize:"text-[4.5rem]",lineHeight:"leading-[5.62rem]",letterSpacing:"tracking-[2.3px]",mb:"mb-4"},{fontSize:"text-[4rem]",lineHeight:"leading-[5rem]",letterSpacing:"tracking-[2.3px]",mb:"mb-4"},{fontSize:"text-[3rem]",lineHeight:"leading-[3.75rem]",letterSpacing:"tracking-[2.3px]",mb:"mb-4"},{fontSize:"text-[2.25rem]",lineHeight:"leading-[3.12rem]",letterSpacing:"tracking-[1px]",mb:"mb-3"},{fontSize:"text-[2rem]",lineHeight:"leading-[2.75rem]",letterSpacing:"tracking-[0.5px]",mb:"mb-3"},{fontSize:"text-[1.5rem]",lineHeight:"leading-[2.25rem]",letterSpacing:"tracking-[0.4px]",mb:"mb-3"}]},"short-desc":{defaults:{fontWeight:"font-medium",color:"text-black",size:1},styles:[{fontSize:"text-[1.875rem]",lineHeight:"leading-[2.687rem]",letterSpacing:"tracking-[0.5px]"},{fontSize:"text-[1.75rem]",lineHeight:"leading-[2.687rem]",letterSpacing:"tracking-[0.5px]"},{fontSize:"text-[1.625rem]",lineHeight:"leading-[2.5rem]",letterSpacing:"tracking-[0.5px]"},{fontSize:"text-[1.5rem]",lineHeight:"leading-[2.25rem]",letterSpacing:"tracking-[0.5px]"}]},paragraph:{defaults:{fontWeight:"font-normal",color:"text-black",size:1},styles:[{fontSize:"text-[1.375rem]",lineHeight:"leading-[2.187rem]",letterSpacing:"tracking-[0.3px]",mb:"mb-2"},{fontSize:"text-[1.25rem]",lineHeight:"leading-[2rem]",letterSpacing:"tracking-[0.3px]",mb:"mb-2"},{fontSize:"text-[1.125rem]",lineHeight:"leading-[1.87rem]",letterSpacing:"tracking-[0.3px]",mb:"mb-2"},{fontSize:"text-[1rem]",lineHeight:"leading-[1.75rem]",letterSpacing:"tracking-[0.3px]",mb:"mb-2"},{fontSize:"text-[0.87rem]",lineHeight:"leading-[1.5rem]",letterSpacing:"tracking-[0.2px]",mb:"mb-2"},{fontSize:"text-[0.75rem]",lineHeight:"leading-[1.25rem]",letterSpacing:"tracking-[0.2px]",mb:"mb-2"}]}},a=({type:e="paragraph",size:l=t[e].defaults.size,weight:i=t[e].defaults.fontWeight,color:n=t[e].defaults.color,italic:r=!1,children:o})=>{const s=Object.values(t[e].styles[l-1]).join(" "),u=`${[`bootwind-text bootwind-text-${e}`,r?"italic":"",i,n].join(" ")} ${s}`;return m("p",{className:u,children:o})};try{a.displayName="Text",a.__docgenInfo={description:"",displayName:"Text",props:{type:{defaultValue:{value:"paragraph"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"display"'},{value:'"headline"'},{value:'"short-desc"'},{value:'"paragraph"'}]}},size:{defaultValue:{value:"styleMap[type].defaults.size"},description:"",name:"size",required:!1,type:{name:"number"}},italic:{defaultValue:{value:"false"},description:"",name:"italic",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"styleMap[type].defaults.color"},description:"",name:"color",required:!1,type:{name:"string"}},weight:{defaultValue:{value:"styleMap[type].defaults.fontWeight"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"font-thin"'},{value:'"font-extralight"'},{value:'"font-light"'},{value:'"font-normal"'},{value:'"font-medium"'},{value:'"font-semibold"'},{value:'"font-bold"'},{value:'"font-extrabold"'},{value:'"font-black"'}]}}}}}catch{}try{text.displayName="text",text.__docgenInfo={description:"",displayName:"text",props:{type:{defaultValue:{value:"paragraph"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"display"'},{value:'"headline"'},{value:'"short-desc"'},{value:'"paragraph"'}]}},size:{defaultValue:{value:"styleMap[type].defaults.size"},description:"",name:"size",required:!1,type:{name:"number"}},italic:{defaultValue:{value:"false"},description:"",name:"italic",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"styleMap[type].defaults.color"},description:"",name:"color",required:!1,type:{name:"string"}},weight:{defaultValue:{value:"styleMap[type].defaults.fontWeight"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"font-thin"'},{value:'"font-extralight"'},{value:'"font-light"'},{value:'"font-normal"'},{value:'"font-medium"'},{value:'"font-semibold"'},{value:'"font-bold"'},{value:'"font-extrabold"'},{value:'"font-black"'}]}}}}}catch{}try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{type:{defaultValue:{value:"paragraph"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"display"'},{value:'"headline"'},{value:'"short-desc"'},{value:'"paragraph"'}]}},size:{defaultValue:{value:"styleMap[type].defaults.size"},description:"",name:"size",required:!1,type:{name:"number"}},italic:{defaultValue:{value:"false"},description:"",name:"italic",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"styleMap[type].defaults.color"},description:"",name:"color",required:!1,type:{name:"string"}},weight:{defaultValue:{value:"styleMap[type].defaults.fontWeight"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"font-thin"'},{value:'"font-extralight"'},{value:'"font-light"'},{value:'"font-normal"'},{value:'"font-medium"'},{value:'"font-semibold"'},{value:'"font-bold"'},{value:'"font-extrabold"'},{value:'"font-black"'}]}}}}}catch{}export{a as T};
//# sourceMappingURL=typography-b2d974c3.js.map
