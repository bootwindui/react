import{a as F}from"./jsx-runtime-03b4ddbf.js";import{r as a,R as h,a as R}from"./index-76fb7be0.js";var ee=Object.defineProperty,te=(e,t,n)=>t in e?ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t,n)=>(te(e,typeof t!="symbol"?t+"":t,n),n);let ne=class{constructor(){k(this,"current",this.detect()),k(this,"handoffState","pending"),k(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},b=new ne,v=(e,t)=>{b.isServer?a.useEffect(e,t):a.useLayoutEffect(e,t)};function re(e){let t=a.useRef(e);return v(()=>{t.current=e},[e]),t}function oe(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function q(){let e=[],t={addEventListener(n,r,o,l){return n.addEventListener(r,o,l),t.add(()=>n.removeEventListener(r,o,l))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return oe(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,o){let l=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:o}),this.add(()=>{Object.assign(n.style,{[r]:l})})},group(n){let r=q();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let o of e.splice(r,1))o()}},dispose(){for(let n of e.splice(0))n()}};return t}function le(){let[e]=a.useState(q);return a.useEffect(()=>()=>e.dispose(),[e]),e}let y=function(e){let t=re(e);return h.useCallback((...n)=>t.current(...n),[t])};function ae(){let e=typeof document>"u";return"useSyncExternalStore"in R?(t=>t.useSyncExternalStore)(R)(()=>()=>{},()=>!1,()=>!e):!1}function ie(){let e=ae(),[t,n]=a.useState(b.isHandoffComplete);return t&&b.isHandoffComplete===!1&&n(!1),a.useEffect(()=>{t!==!0&&n(!0)},[t]),a.useEffect(()=>b.handoff(),[]),e?!1:t}var D;let P=(D=h.useId)!=null?D:function(){let e=ie(),[t,n]=h.useState(e?()=>b.nextId():null);return v(()=>{t===null&&n(b.nextId())},[t]),t!=null?""+t:void 0};function U(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,U),r}function H(e){var t;if(e.type)return e.type;let n=(t=e.as)!=null?t:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function ue(e,t){let[n,r]=a.useState(()=>H(e));return v(()=>{r(H(e))},[e.type,e.as]),v(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}let se=Symbol();function x(...e){let t=a.useRef(e);a.useEffect(()=>{t.current=e},[e]);let n=y(r=>{for(let o of t.current)o!=null&&(typeof o=="function"?o(r):o.current=r)});return e.every(r=>r==null||(r==null?void 0:r[se]))?void 0:n}function M(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}var ce=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(ce||{}),de=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(de||{});function E({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:l=!0,name:u}){let i=_(t,e);if(l)return T(i,n,r,u);let s=o??0;if(s&2){let{static:c=!1,...m}=i;if(c)return T(m,n,r,u)}if(s&1){let{unmount:c=!0,...m}=i;return U(c?0:1,{0(){return null},1(){return T({...m,hidden:!0,style:{display:"none"}},n,r,u)}})}return T(i,n,r,u)}function T(e,t={},n,r){let{as:o=n,children:l,refName:u="ref",...i}=N(e,["unmount","static"]),s=e.ref!==void 0?{[u]:e.ref}:{},c=typeof l=="function"?l(t):l;"className"in i&&i.className&&typeof i.className=="function"&&(i.className=i.className(t));let m={};if(t){let d=!1,g=[];for(let[w,f]of Object.entries(t))typeof f=="boolean"&&(d=!0),f===!0&&g.push(w);d&&(m["data-headlessui-state"]=g.join(" "))}if(o===a.Fragment&&Object.keys(j(i)).length>0){if(!a.isValidElement(c)||Array.isArray(c)&&c.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(i).map(f=>`  - ${f}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(f=>`  - ${f}`).join(`
`)].join(`
`));let d=c.props,g=typeof(d==null?void 0:d.className)=="function"?(...f)=>M(d==null?void 0:d.className(...f),i.className):M(d==null?void 0:d.className,i.className),w=g?{className:g}:{};return a.cloneElement(c,Object.assign({},_(c.props,j(N(i,["ref"]))),m,s,fe(c.ref,s.ref),w))}return a.createElement(o,Object.assign({},N(i,["ref"]),o!==a.Fragment&&s,o!==a.Fragment&&m),c)}function fe(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}}function _(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...l){let u=n[r];for(let i of u){if((o instanceof Event||(o==null?void 0:o.nativeEvent)instanceof Event)&&o.defaultPrevented)return;i(o,...l)}}});return t}function $(e){var t;return Object.assign(a.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function j(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function N(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function pe(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&me(n)?!1:r}function me(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}function he(e){var t,n;let r=(t=e==null?void 0:e.form)!=null?t:e.closest("form");if(r){for(let o of r.elements)if(o!==e&&(o.tagName==="INPUT"&&o.type==="submit"||o.tagName==="BUTTON"&&o.type==="submit"||o.nodeName==="INPUT"&&o.type==="image")){o.click();return}(n=r.requestSubmit)==null||n.call(r)}}let ge="div";var B=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(B||{});function ye(e,t){let{features:n=1,...r}=e,o={ref:t,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return E({ourProps:o,theirProps:r,slot:{},defaultTag:ge,name:"Hidden"})}let be=$(ye);var O=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(O||{});function ve(e,t,n){let[r,o]=a.useState(n),l=e!==void 0,u=a.useRef(l),i=a.useRef(!1),s=a.useRef(!1);return l&&!u.current&&!i.current?(i.current=!0,u.current=l,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!l&&u.current&&!s.current&&(s.current=!0,u.current=l,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[l?e:r,y(c=>(l||o(c),t==null?void 0:t(c)))]}let V=a.createContext(null);function G(){let e=a.useContext(V);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,G),t}return e}function we(){let[e,t]=a.useState([]);return[e.length>0?e.join(" "):void 0,a.useMemo(()=>function(n){let r=y(l=>(t(u=>[...u,l]),()=>t(u=>{let i=u.slice(),s=i.indexOf(l);return s!==-1&&i.splice(s,1),i}))),o=a.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return h.createElement(V.Provider,{value:o},n.children)},[t])]}let Ee="p";function Se(e,t){let n=P(),{id:r=`headlessui-description-${n}`,...o}=e,l=G(),u=x(t);v(()=>l.register(r),[r,l.register]);let i={ref:u,...l.props,id:r};return E({ourProps:i,theirProps:o,slot:l.slot||{},defaultTag:Ee,name:l.name||"Description"})}let Te=$(Se),$e=Object.assign(Te,{}),Y=a.createContext(null);function K(){let e=a.useContext(Y);if(e===null){let t=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,K),t}return e}function ke(){let[e,t]=a.useState([]);return[e.length>0?e.join(" "):void 0,a.useMemo(()=>function(n){let r=y(l=>(t(u=>[...u,l]),()=>t(u=>{let i=u.slice(),s=i.indexOf(l);return s!==-1&&i.splice(s,1),i}))),o=a.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return h.createElement(Y.Provider,{value:o},n.children)},[t])]}let Ne="label";function je(e,t){let n=P(),{id:r=`headlessui-label-${n}`,passive:o=!1,...l}=e,u=K(),i=x(t);v(()=>u.register(r),[r,u.register]);let s={ref:i,...u.props,id:r};return o&&("onClick"in s&&(delete s.htmlFor,delete s.onClick),"onClick"in l&&delete l.onClick),E({ourProps:s,theirProps:l,slot:u.slot||{},defaultTag:Ne,name:u.name||"Label"})}let Oe=$(je),Pe=Object.assign(Oe,{}),A=a.createContext(null);A.displayName="GroupContext";let xe=a.Fragment;function Ae(e){var t;let[n,r]=a.useState(null),[o,l]=ke(),[u,i]=we(),s=a.useMemo(()=>({switch:n,setSwitch:r,labelledby:o,describedby:u}),[n,r,o,u]),c={},m=e;return h.createElement(i,{name:"Switch.Description"},h.createElement(l,{name:"Switch.Label",props:{htmlFor:(t=s.switch)==null?void 0:t.id,onClick(d){n&&(d.currentTarget.tagName==="LABEL"&&d.preventDefault(),n.click(),n.focus({preventScroll:!0}))}}},h.createElement(A.Provider,{value:s},E({ourProps:c,theirProps:m,defaultTag:xe,name:"Switch.Group"}))))}let Ce="button";function Le(e,t){let n=P(),{id:r=`headlessui-switch-${n}`,checked:o,defaultChecked:l=!1,onChange:u,name:i,value:s,form:c,...m}=e,d=a.useContext(A),g=a.useRef(null),w=x(g,t,d===null?null:d.setSwitch),[f,S]=ve(o,u,l),C=y(()=>S==null?void 0:S(!f)),W=y(p=>{if(pe(p.currentTarget))return p.preventDefault();p.preventDefault(),C()}),X=y(p=>{p.key===O.Space?(p.preventDefault(),C()):p.key===O.Enter&&he(p.currentTarget)}),Z=y(p=>p.preventDefault()),z=a.useMemo(()=>({checked:f}),[f]),J={id:r,ref:w,role:"switch",type:ue(e,g),tabIndex:0,"aria-checked":f,"aria-labelledby":d==null?void 0:d.labelledby,"aria-describedby":d==null?void 0:d.describedby,onClick:W,onKeyUp:X,onKeyPress:Z},Q=le();return a.useEffect(()=>{var p;let L=(p=g.current)==null?void 0:p.closest("form");L&&l!==void 0&&Q.addEventListener(L,"reset",()=>{S(l)})},[g,S]),h.createElement(h.Fragment,null,i!=null&&f&&h.createElement(be,{features:B.Hidden,...j({as:"input",type:"checkbox",hidden:!0,readOnly:!0,form:c,checked:f,name:i,value:s})}),E({ourProps:J,theirProps:m,slot:z,defaultTag:Ce,name:"Switch"}))}let Fe=$(Le),Re=Ae,De=Object.assign(Fe,{Group:Re,Label:Pe,Description:$e});function I(...e){return e.filter(Boolean).join(" ")}const He=({color:e,iconOn:t,iconOff:n})=>{const[r,o]=a.useState(!1);return F(De,{checked:r,onChange:o,className:I({primary:r?"bg-primary":"bg-gray-200",secondary:r?"bg-[#2D3643]":"bg-gray-200"}[e],"relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-1"),children:F("span",{"aria-hidden":"true",className:I(r?"translate-x-5":"translate-x-0","pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out "),children:r?t:n})})},Ue=He;try{toggle.displayName="toggle",toggle.__docgenInfo={description:"",displayName:"toggle",props:{onToggle:{defaultValue:null,description:"",name:"onToggle",required:!1,type:{name:"((isEnabled: boolean) => void)"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},iconOn:{defaultValue:null,description:"",name:"iconOn",required:!1,type:{name:"ReactNode"}},iconOff:{defaultValue:null,description:"",name:"iconOff",required:!1,type:{name:"ReactNode"}}}}}catch{}export{Ue as T};
//# sourceMappingURL=index-63c2adc9.js.map