import{a as t,j as e}from"./jsx-runtime-29545a09.js";import{T as o,a as T,b as l,c as b,d as m,e as r}from"./TableCell-2aafb8a1.js";import{B as d}from"./badges-a784adbf.js";import{B as p}from"./button-c1adf9cd.js";import{H as u}from"./index.esm-246b15fc.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./cn-a0481221.js";import"./iconBase-1d38e9b4.js";const z={title:"Components/Table",component:o,args:{type:"card",totalResults:50,resultsPerPage:10},argTypes:{type:{options:["card","centered","simple"],control:{type:"select"}},currentPage:{control:{type:"number"}},totalResults:{control:{type:"number"}},resultsPerPage:{control:{type:"number"}}}},h=[{type:"Wade Warren",status:"Inactive",role:"Scrum Master",email:"wade@example.com",team:["UI","Marketing"]},{type:"Jerome Bell",status:"Active",role:"Scrum Master",email:"wade@example.com",team:["Product","Marketing"]},{type:"Wade Warren",status:"Inactive",role:"Scrum Master",email:"wade@example.com",team:["UI","Marketing"]},{type:"Jerome Bell",status:"Active",role:"Scrum Master",email:"wade@example.com",team:["Product","Marketing"]}],i=()=>t(o,{children:[t(T,{children:[e(l,{children:"Type"}),e(l,{children:"Status"}),e(l,{children:"Role"}),e(l,{children:"Email Address"}),e(l,{children:"Team"}),e(l,{})]}),e(b,{children:h.map(a=>t(m,{children:[e(r,{children:a.type}),e(r,{children:e(d,{variant:a.status=="Active"?"success":"error",withDot:!0,children:a.status})}),e(r,{children:a.role}),e(r,{children:a.email}),e(r,{children:t("div",{className:"flex gap-1 flex-wrap flex-shrink-0",children:[a.team.map(s=>e(d,{variant:"primary",children:s})),e(d,{variant:"neutral",children:"+ 3"})]})}),e(r,{children:e(p,{variant:"secondary",className:"rounded-full",children:e(u,{})})})]}))})]}),n=()=>t(o,{variant:"striped",children:[t(T,{children:[e(l,{children:"Type"}),e(l,{children:"Status"}),e(l,{children:"Role"}),e(l,{children:"Email Address"}),e(l,{children:"Team"}),e(l,{})]}),e(b,{children:h.map(a=>t(m,{children:[e(r,{children:a.type}),e(r,{children:e(d,{variant:a.status=="Active"?"success":"error",withDot:!0,children:a.status})}),e(r,{children:a.role}),e(r,{children:a.email}),e(r,{children:t("div",{className:"flex gap-1 flex-wrap flex-shrink-0",children:[a.team.map(s=>e(d,{variant:"primary",children:s})),e(d,{variant:"neutral",children:"+ 3"})]})}),e(r,{children:e(p,{variant:"secondary",className:"rounded-full",children:e(u,{})})})]}))})]}),c=()=>t(o,{variant:"striped",borders:"all",children:[t(T,{children:[e(l,{children:"Type"}),e(l,{children:"Status"}),e(l,{children:"Role"}),e(l,{children:"Email Address"}),e(l,{children:"Team"}),e(l,{})]}),e(b,{children:h.map(a=>t(m,{children:[e(r,{children:a.type}),e(r,{children:e(d,{variant:a.status=="Active"?"success":"error",withDot:!0,children:a.status})}),e(r,{children:a.role}),e(r,{children:a.email}),e(r,{children:t("div",{className:"flex gap-1 flex-wrap flex-shrink-0",children:[a.team.map(s=>e(d,{variant:"primary",children:s})),e(d,{variant:"neutral",children:"+ 3"})]})}),e(r,{children:e(p,{variant:"secondary",className:"rounded-full",children:e(u,{})})})]}))})]});var H,v,y;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`() => <Table>
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
    </Table>`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var B,C,g;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`() => <Table variant="striped">
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
    </Table>`,...(g=(C=n.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var f,x,w;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`() => <Table variant="striped" borders="all">
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
    </Table>`,...(w=(x=c.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const I=["BasicTable","StripedTable","BorderedTable"];export{i as BasicTable,c as BorderedTable,n as StripedTable,I as __namedExportsOrder,z as default};
//# sourceMappingURL=Table.stories-6632f8cb.js.map
