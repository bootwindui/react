import{j as a,F as u}from"./jsx-runtime-29545a09.js";import{r as i}from"./index-76fb7be0.js";import{P}from"./pagination-bd0bbc64.js";import"./_commonjsHelpers-de833af9.js";import"./index.esm-2a90224b.js";import"./iconBase-1d38e9b4.js";import"./cn-a0481221.js";const E={title:"Components/Pagination",component:P,tags:["autodocs"],args:{type:"card",totalResults:50,resultsPerPage:10},argTypes:{type:{options:["card","centered","simple"],control:{type:"select"}},currentPage:{control:{type:"number"}},totalResults:{control:{type:"number"}},resultsPerPage:{control:{type:"number"}}}},g=t=>{const[e,o]=i.useState(1),n=r=>{o(r)};return a(u,{children:a(P,{...t,currentPage:e,onPrevClick:()=>n(e-1),onNextClick:()=>n(e+1),onPageClick:r=>n(r)})})},s=t=>{const[e,o]=i.useState(1),n=r=>{o(r)};return a(u,{children:a(P,{...t,type:"simple",currentPage:e,onPrevClick:()=>n(e-1),onNextClick:()=>n(e+1),onPageClick:r=>n(r)})})},c=t=>{const[e,o]=i.useState(1),n=r=>{o(r)};return a(u,{children:a(P,{...t,type:"centered",currentPage:e,onPrevClick:()=>n(e-1),onNextClick:()=>n(e+1),onPageClick:r=>n(r)})})};var p,C,l;g.parameters={...g.parameters,docs:{...(p=g.parameters)==null?void 0:p.docs,source:{originalSource:`(args: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  return <>
      <Pagination {...args} currentPage={currentPage} onPrevClick={() => onPageChange(currentPage - 1)} onNextClick={() => onPageChange(currentPage + 1)} onPageClick={page => onPageChange(page)} />
    </>;
}`,...(l=(C=g.parameters)==null?void 0:C.docs)==null?void 0:l.source}}};var m,d,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`(args: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  return <>
      <Pagination {...args} type='simple' currentPage={currentPage} onPrevClick={() => onPageChange(currentPage - 1)} onNextClick={() => onPageChange(currentPage + 1)} onPageClick={page => onPageChange(page)} />
    </>;
}`,...(h=(d=s.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var k,y,S;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`(args: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  return <>
      <Pagination {...args} type='centered' currentPage={currentPage} onPrevClick={() => onPageChange(currentPage - 1)} onNextClick={() => onPageChange(currentPage + 1)} onPageClick={page => onPageChange(page)} />
    </>;
}`,...(S=(y=c.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const F=["Card","Simple","Centered"];export{g as Card,c as Centered,s as Simple,F as __namedExportsOrder,E as default};
//# sourceMappingURL=Pagination.stories-1a23807a.js.map
