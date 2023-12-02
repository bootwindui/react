import{j as e,F as y,a as d}from"./jsx-runtime-29545a09.js";import{R as n}from"./index-76fb7be0.js";import{c}from"./cn-a0481221.js";import{B as o}from"./badges-cbaaa98c.js";import{B as v}from"./button-c1adf9cd.js";import{f as _}from"./index.esm-93ea4fcd.js";import"./_commonjsHelpers-de833af9.js";import"./iconBase-1d38e9b4.js";const i=n.forwardRef(({className:a,...t},s)=>{const f={bottom:"[&_td]:border-b [&_td]:border-[#e9eff6] [&_th]:border-b [&_th]:border-[#e9eff6]",all:"[&_td]:border [&_td]:border-[#e9eff6] [&_th]:border [&_th]:border-[#e9eff6]",none:""};return e("div",{className:"relative w-full overflow-auto",children:e("table",{ref:s,className:c("w-full caption-bottom text-sm ",a,t.variant=="striped"?"[&_tr:nth-child(even)]:bg-[#f9fafb]":"",f[t.borders??"bottom"]),...t})})});try{i.displayName="Table",i.__docgenInfo={description:"",displayName:"Table",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"striped"'},{value:'"normal"'}]}},borders:{defaultValue:null,description:"",name:"borders",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"all"'},{value:'"none"'}]}}}}}catch{}const b=n.forwardRef(({className:a,...t},s)=>e(y,{children:e("tbody",{ref:s,className:c("[&_tr:last-child]:border-0 ",a),...t})}));try{b.displayName="TableBody",b.__docgenInfo={description:"",displayName:"TableBody",props:{}}}catch{}const l=n.forwardRef(({className:a,...t},s)=>e(y,{children:e("th",{ref:s,className:c("px-5 py-3.5 font-normal text-left",a),...t})}));try{l.displayName="TableHead",l.__docgenInfo={description:"",displayName:"TableHead",props:{}}}catch{}const m=n.forwardRef(({className:a,...t},s)=>e(y,{children:e("thead",{ref:s,className:c(a,"bg-gray-50 text-slate-400"),...t})}));try{m.displayName="TableHeader",m.__docgenInfo={description:"",displayName:"TableHeader",props:{}}}catch{}const p=n.forwardRef(({className:a,children:t,...s},f)=>e(y,{children:e("tr",{ref:f,className:c("transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",a),...s,children:t})}));try{p.displayName="TableRow",p.__docgenInfo={description:"",displayName:"TableRow",props:{}}}catch{}const r=n.forwardRef(({className:a,...t},s)=>e("td",{ref:s,className:c("px-5 py-3.5 text-slate-500",a),...t}));try{r.displayName="TableCell",r.__docgenInfo={description:"",displayName:"TableCell",props:{}}}catch{}const j={title:"Components/Table",component:i,args:{type:"card",totalResults:50,resultsPerPage:10},argTypes:{type:{options:["card","centered","simple"],control:{type:"select"}},currentPage:{control:{type:"number"}},totalResults:{control:{type:"number"}},resultsPerPage:{control:{type:"number"}}}},H=[{type:"Wade Warren",status:"Inactive",role:"Scrum Master",email:"wade@example.com",team:["UI","Marketing"]},{type:"Jerome Bell",status:"Active",role:"Scrum Master",email:"wade@example.com",team:["Product","Marketing"]},{type:"Wade Warren",status:"Inactive",role:"Scrum Master",email:"wade@example.com",team:["UI","Marketing"]},{type:"Jerome Bell",status:"Active",role:"Scrum Master",email:"wade@example.com",team:["Product","Marketing"]}],T=()=>d(i,{children:[d(m,{children:[e(l,{children:"Type"}),e(l,{children:"Status"}),e(l,{children:"Role"}),e(l,{children:"Email Address"}),e(l,{children:"Team"}),e(l,{})]}),e(b,{children:H.map(a=>d(p,{children:[e(r,{children:a.type}),e(r,{children:e(o,{variant:a.status=="Active"?"success":"error",withDot:!0,children:a.status})}),e(r,{children:a.role}),e(r,{children:a.email}),e(r,{children:d("div",{className:"flex gap-1 flex-wrap flex-shrink-0",children:[a.team.map(t=>e(o,{variant:"primary",children:t})),e(o,{variant:"neutral",children:"+ 3"})]})}),e(r,{children:e(v,{variant:"secondary",className:"rounded-full",children:e(_,{})})})]}))})]}),u=()=>d(i,{variant:"striped",children:[d(m,{children:[e(l,{children:"Type"}),e(l,{children:"Status"}),e(l,{children:"Role"}),e(l,{children:"Email Address"}),e(l,{children:"Team"}),e(l,{})]}),e(b,{children:H.map(a=>d(p,{children:[e(r,{children:a.type}),e(r,{children:e(o,{variant:a.status=="Active"?"success":"error",withDot:!0,children:a.status})}),e(r,{children:a.role}),e(r,{children:a.email}),e(r,{children:d("div",{className:"flex gap-1 flex-wrap flex-shrink-0",children:[a.team.map(t=>e(o,{variant:"primary",children:t})),e(o,{variant:"neutral",children:"+ 3"})]})}),e(r,{children:e(v,{variant:"secondary",className:"rounded-full",children:e(_,{})})})]}))})]}),h=()=>d(i,{variant:"striped",borders:"all",children:[d(m,{children:[e(l,{children:"Type"}),e(l,{children:"Status"}),e(l,{children:"Role"}),e(l,{children:"Email Address"}),e(l,{children:"Team"}),e(l,{})]}),e(b,{children:H.map(a=>d(p,{children:[e(r,{children:a.type}),e(r,{children:e(o,{variant:a.status=="Active"?"success":"error",withDot:!0,children:a.status})}),e(r,{children:a.role}),e(r,{children:a.email}),e(r,{children:d("div",{className:"flex gap-1 flex-wrap flex-shrink-0",children:[a.team.map(t=>e(o,{variant:"primary",children:t})),e(o,{variant:"neutral",children:"+ 3"})]})}),e(r,{children:e(v,{variant:"secondary",className:"rounded-full",children:e(_,{})})})]}))})]});var g,B,C;T.parameters={...T.parameters,docs:{...(g=T.parameters)==null?void 0:g.docs,source:{originalSource:`() => <Table>
        <TableHeader>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Email Address</TableHead>
            <TableHead>Team</TableHead>
            <TableHead></TableHead>
        </TableHeader>
        <TableBody>
            {data.map(person => <TableRow>
                    <TableCell>{person.type}</TableCell>
                    <TableCell>
                        <Badge variant={person.status == 'Active' ? 'success' : 'error'} withDot={true}>{person.status}</Badge>
                    </TableCell>
                    <TableCell>
                        {person.role}
                    </TableCell>
                    <TableCell>
                        {person.email}
                    </TableCell>
                    <TableCell>
                        <div className="flex gap-1 flex-wrap flex-shrink-0">
                            {person.team.map(name => <Badge variant="primary">{name}</Badge>)}
                            <Badge variant="neutral">+ 3</Badge>
                        </div>
                    </TableCell>
                    <TableCell>
                        <Button variant="secondary" className="rounded-full"><HiEllipsisHorizontal /></Button>
                    </TableCell>
                </TableRow>)}
        </TableBody>
    </Table>`,...(C=(B=T.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var w,x,N;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`() => <Table variant="striped">
        <TableHeader>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Email Address</TableHead>
            <TableHead>Team</TableHead>
            <TableHead></TableHead>
        </TableHeader>
        <TableBody>
            {data.map(person => <TableRow>
                    <TableCell>{person.type}</TableCell>
                    <TableCell>
                        <Badge variant={person.status == 'Active' ? 'success' : 'error'} withDot={true}>{person.status}</Badge>
                    </TableCell>
                    <TableCell>
                        {person.role}
                    </TableCell>
                    <TableCell>
                        {person.email}
                    </TableCell>
                    <TableCell>
                        <div className="flex gap-1 flex-wrap flex-shrink-0">
                            {person.team.map(name => <Badge variant="primary">{name}</Badge>)}
                            <Badge variant="neutral">+ 3</Badge>
                        </div>
                    </TableCell>
                    <TableCell>
                        <Button variant="secondary" className="rounded-full"><HiEllipsisHorizontal /></Button>
                    </TableCell>
                </TableRow>)}
        </TableBody>
    </Table>`,...(N=(x=u.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var R,S,A;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`() => <Table variant="striped" borders="all">
        <TableHeader>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Email Address</TableHead>
            <TableHead>Team</TableHead>
            <TableHead></TableHead>
        </TableHeader>
        <TableBody>
            {data.map(person => <TableRow>
                    <TableCell>{person.type}</TableCell>
                    <TableCell>
                        <Badge variant={person.status == 'Active' ? 'success' : 'error'} withDot={true}>{person.status}</Badge>
                    </TableCell>
                    <TableCell>
                        {person.role}
                    </TableCell>
                    <TableCell>
                        {person.email}
                    </TableCell>
                    <TableCell>
                        <div className="flex gap-1 flex-wrap flex-shrink-0">
                            {person.team.map(name => <Badge variant="primary">{name}</Badge>)}
                            <Badge variant="neutral">+ 3</Badge>
                        </div>
                    </TableCell>
                    <TableCell>
                        <Button variant="secondary" className="rounded-full"><HiEllipsisHorizontal /></Button>
                    </TableCell>
                </TableRow>)}
        </TableBody>
    </Table>`,...(A=(S=h.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};const q=["BasicTable","StripedTable","BorderedTable"];export{T as BasicTable,h as BorderedTable,u as StripedTable,q as __namedExportsOrder,j as default};
//# sourceMappingURL=Table.stories-6163e3a0.js.map
