import{a as e,j as n}from"./jsx-runtime-03b4ddbf.js";import{r as h,R as p}from"./index-76fb7be0.js";import{G as d,a as c,b}from"./index.esm-6211d263.js";const r={warning:{bg:"bg-yellow-50",text:"text-yellow-800",description:"text-yellow-700",link:"text-yellow-700 hover:text-yellow-600",dismissBtn:"bg-yellow-50 text-yellow-500 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-yellow-50"},success:{bg:"bg-green-50",text:"text-green-800",description:"text-green-700",link:"text-green-700 hover:text-green-600",dismissBtn:"bg-green-50 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"},danger:{bg:"bg-red-50",text:"text-red-800",description:"text-red-700",link:"text-red-700 hover:text-red-600",dismissBtn:"bg-red-50 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50"},info:{bg:"border-l-4 border-blue-400 bg-blue-50",text:"text-blue-800",description:"text-blue-700",link:"text-blue-700 hover:text-blue-600",dismissBtn:"bg-blue-50 text-blue-500 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-blue-50"}},N=({type:s,title:l,icon:i,description:t,actions:o,link:a,dismissButton:u=!1})=>{const[m,f]=h.useState(!1),g=()=>{if(p.isValidElement(i))return i;switch(s){case"warning":return e(c,{className:"h-5 w-5 text-yellow-400","aria-hidden":"true"});case"danger":return e(d,{className:"h-5 w-5 text-red-400","aria-hidden":"true"});case"success":return e(b,{className:"h-5 w-5 text-green-400","aria-hidden":"true"});case"info":return e(c,{className:"h-5 w-5 text-blue-400","aria-hidden":"true"});default:return null}},x=()=>{f(!0)};return m?null:e("div",{className:`rounded-md p-4 ${r[s].bg}`,children:n("div",{className:"flex flex-col md:flex-row",children:[i&&e("div",{className:"flex-shrink-0 mr-3",children:g()}),n("div",{className:"flex-1",children:[l&&e("h3",{className:`text-sm font-medium ${r[s].text}`,children:l}),l&&t&&e("div",{className:"mb-2"}),t&&e("div",{className:`text-sm ${r[s].description}`,children:typeof t=="string"?e("p",{children:t}):t}),o&&e("div",{className:"mt-4",children:o})]}),a&&e("p",{className:"mt-3 text-sm md:mt-0 md:ml-3",children:n("a",{href:a.url,className:`whitespace-nowrap font-medium ${r[s].link}`,children:[a.text,e("span",{"aria-hidden":"true",children:" →"})]})}),u&&e("div",{className:"ml-auto pl-3",children:e("div",{className:"-mx-1.5 -my-1.5",children:n("button",{type:"button",onClick:x,className:`inline-flex rounded-md p-1.5 ${r[s].dismissBtn}`,children:[e("span",{className:"sr-only",children:"Dismiss"}),e(d,{className:"h-5 w-5","aria-hidden":"true"})]})})})]})})},k=N;try{src.displayName="src",src.__docgenInfo={description:"",displayName:"src",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"warning"'},{value:'"success"'},{value:'"danger"'},{value:'"info"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ReactNode"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"{ url: string; text: string; }"}},dismissButton:{defaultValue:{value:"false"},description:"",name:"dismissButton",required:!1,type:{name:"boolean"}}}}}catch{}export{k as A};
//# sourceMappingURL=index-066add99.js.map