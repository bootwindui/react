import{j as t,a as e}from"./jsx-runtime-03b4ddbf.js";import{r as f}from"./index-76fb7be0.js";import{H as N,a as b,b as S,c as _}from"./index.esm-e165c97b.js";import"./_commonjsHelpers-de833af9.js";import"./iconBase-1d38e9b4.js";const R=({type:c="card",currentPage:n,totalResults:i,resultsPerPage:s,onPrevClick:r,onNextClick:d,onPageClick:o})=>{const m=Math.ceil(i/s),a=n===1,p=n===m;switch(c){case"card":return t("div",{className:"flex items-center justify-between border-t border-gray-200 bg-white py-3",children:[t("div",{className:"flex flex-1 justify-between sm:hidden",children:[e("button",{type:"button",onClick:r,className:"relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50",children:"Previous"}),e("button",{type:"button",onClick:d,className:"relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50",children:"Next"})]}),t("div",{className:"hidden sm:flex sm:flex-1 sm:items-center sm:justify-between",children:[e("div",{children:t("p",{className:"text-sm text-gray-700",children:["Showing"," ",e("span",{className:"font-medium",children:(n-1)*s+1})," ","to"," ",e("span",{className:"font-medium",children:Math.min(n*s,i)})," ","of ",e("span",{className:"font-medium",children:i})," results"]})}),e("div",{children:t("nav",{className:"isolate inline-flex -space-x-px rounded-md shadow-sm","aria-label":"Pagination",children:[t("button",{type:"button",onClick:r,disabled:a,className:`${a?"opacity-50 cursor-not-allowed":""} relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20`,children:[e("span",{className:"sr-only",children:"Previous"}),e(S,{className:"h-5 w-5","aria-hidden":"true"})]}),[...Array(m)].map((A,l)=>e("button",{type:"button",onClick:()=>o(l+1),"aria-current":n===l+1?"page":void 0,className:`relative ${n===l+1?"z-10 ":""}inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium ${n===l+1?"text-indigo-600":"text-gray-500 hover:bg-gray-50"} focus:z-20`,children:l+1},l)),t("button",{type:"button",onClick:d,disabled:p,className:`${p?"opacity-50 cursor-not-allowed":""} relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20`,children:[e("span",{className:"sr-only",children:"Next"}),e(_,{className:"h-5 w-5","aria-hidden":"true"})]})]})})]})]});case"centered":return t("nav",{className:"flex items-center justify-between border-t border-gray-200 px-4 sm:px-0",children:[e("div",{className:"-mt-px flex w-0 flex-1",children:t("button",{type:"button",onClick:r,disabled:a,className:`${a?"opacity-50 cursor-not-allowed":""} inline-flex items-center rounded-lg border border-gray-300 mt-4 py-1.5 px-4 text-sm font-medium text-gray-700 hover:border-gray-300 hover:text-gray-900`,children:[e(N,{className:"mr-3 h-4 w-4 text-gray-700","aria-hidden":"true"}),"Previous"]})}),e("div",{className:"hidden md:-mt-px md:flex",children:[...Array(m)].map((A,l)=>e("button",{type:"button",onClick:()=>o(l+1),className:`inline-flex items-center border-t-2 border-transparent px-4 mt-4 text-sm font-medium ${n===l+1?"bg-indigo-500 text-white px-3 py-2 rounded-lg":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`,children:l+1},l))}),e("div",{className:"-mt-px flex w-0 flex-1 justify-end",children:t("button",{type:"button",disabled:p,onClick:d,className:`${p?"opacity-50 cursor-not-allowed":""} inline-flex items-center rounded-lg border border-gray-300 mt-4 py-1.5 px-4 text-sm font-medium text-gray-700 hover:border-gray-300 hover:text-gray-900`,children:["Next",e(b,{className:"ml-3 h-4 w-4 text-gray-700","aria-hidden":"true"})]})})]});case"simple":return t("nav",{className:"flex items-center justify-between border-t border-gray-200 bg-white py-3","aria-label":"Pagination",children:[e("div",{className:"hidden sm:block",children:t("p",{className:"text-sm text-gray-700",children:["Showing ",e("span",{className:"font-medium",children:"1"})," to"," ",e("span",{className:"font-medium",children:s})," of"," ",e("span",{className:"font-medium",children:i})," results"]})}),t("div",{className:"flex flex-1 justify-between sm:justify-end",children:[t("button",{type:"button",disabled:a,onClick:r,className:`${a?"opacity-50 cursor-not-allowed":""} relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-20`,children:[e(N,{className:"mr-3 h-4 w-4 text-gray-700","aria-hidden":"true"}),"Previous"]}),t("button",{type:"button",disabled:p,onClick:d,className:`${p?"opacity-50 cursor-not-allowed":""} relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-20`,children:["Next",e(b,{className:"ml-3 h-4 w-4 text-gray-700","aria-hidden":"true"})]})]})]});default:return null}},y=R;try{src.displayName="src",src.__docgenInfo={description:"",displayName:"src",props:{type:{defaultValue:{value:"card"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"card"'},{value:'"centered"'},{value:'"simple"'}]}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},totalResults:{defaultValue:null,description:"",name:"totalResults",required:!0,type:{name:"number"}},resultsPerPage:{defaultValue:null,description:"",name:"resultsPerPage",required:!0,type:{name:"number"}},onPrevClick:{defaultValue:null,description:"",name:"onPrevClick",required:!0,type:{name:"() => void"}},onNextClick:{defaultValue:null,description:"",name:"onNextClick",required:!0,type:{name:"() => void"}},onPageClick:{defaultValue:null,description:"",name:"onPageClick",required:!0,type:{name:"(page: number) => void"}}}}}catch{}const x=Array.from({length:50},(c,n)=>({id:n+1,name:`User ${n+1}`,email:`user${n+1}@example.com`})),L={title:"Components/Pagination",component:y,argTypes:{}},$=c=>{const[n,i]=f.useState(1),s=10,r=a=>{i(a)},d=(n-1)*s,o=n*s,m=x.slice(d,o);return t("div",{className:"px-4 sm:px-6 lg:px-8",children:[t("div",{className:"sm:flex sm:items-center",children:[t("div",{className:"sm:flex-auto",children:[e("h1",{className:"text-xl font-semibold text-gray-900",children:"Users"}),e("p",{className:"mt-2 text-sm text-gray-700",children:"A list of all the users in your account including their name, title, email and role."})]}),e("div",{className:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none",children:e("button",{type:"button",className:"inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto",children:"Add user"})})]}),e("div",{className:"mt-8 flex flex-col",children:e("div",{className:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8",children:e("div",{className:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8",children:t("div",{className:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg",children:[t("table",{className:"min-w-full divide-y divide-gray-300",children:[e("thead",{className:"bg-gray-50",children:t("tr",{children:[e("th",{scope:"col",className:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",children:"Number"}),e("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Name"}),e("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Email"}),e("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Role"}),e("th",{scope:"col",className:"relative py-3.5 pl-3 pr-4 sm:pr-6",children:e("span",{className:"sr-only",children:"Edit"})})]})}),e("tbody",{className:"divide-y divide-gray-200 bg-white",children:m.map(a=>t("tr",{children:[e("td",{className:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6",children:a.id}),e("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500",children:a.name}),e("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500",children:a.email}),e("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500",children:"Member"}),e("td",{className:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6",children:t("a",{href:"#",className:"text-indigo-600 hover:text-indigo-900",children:["Edit",t("span",{className:"sr-only",children:[", ",a.name]})]})})]},a.email))})]}),e("div",{className:"px-4",children:e(y,{type:"card",currentPage:n,totalResults:x.length,resultsPerPage:s,onPrevClick:()=>r(n-1),onNextClick:()=>r(n+1),onPageClick:a=>r(a)})})]})})})})]})},M=c=>{const[n,i]=f.useState(1),s=10,r=a=>{i(a)},d=(n-1)*s,o=n*s,m=x.slice(d,o);return t("div",{className:"px-4 sm:px-6 lg:px-8",children:[t("div",{className:"sm:flex sm:items-center",children:[t("div",{className:"sm:flex-auto",children:[e("h1",{className:"text-xl font-semibold text-gray-900",children:"Users"}),e("p",{className:"mt-2 text-sm text-gray-700",children:"A list of all the users in your account including their name, title, email and role."})]}),e("div",{className:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none",children:e("button",{type:"button",className:"inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto",children:"Add user"})})]}),e("div",{className:"mt-8 flex flex-col",children:e("div",{className:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8",children:e("div",{className:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8",children:t("div",{className:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg",children:[t("table",{className:"min-w-full divide-y divide-gray-300",children:[e("thead",{className:"bg-gray-50",children:t("tr",{children:[e("th",{scope:"col",className:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",children:"Number"}),e("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Name"}),e("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Email"}),e("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Role"}),e("th",{scope:"col",className:"relative py-3.5 pl-3 pr-4 sm:pr-6",children:e("span",{className:"sr-only",children:"Edit"})})]})}),e("tbody",{className:"divide-y divide-gray-200 bg-white",children:m.map(a=>t("tr",{children:[e("td",{className:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6",children:a.id}),e("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500",children:a.name}),e("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500",children:a.email}),e("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500",children:"Member"}),e("td",{className:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6",children:t("a",{href:"#",className:"text-indigo-600 hover:text-indigo-900",children:["Edit",t("span",{className:"sr-only",children:[", ",a.name]})]})})]},a.email))})]}),e("div",{className:"px-4",children:e(y,{type:"simple",currentPage:n,totalResults:x.length,resultsPerPage:s,onPrevClick:()=>r(n-1),onNextClick:()=>r(n+1),onPageClick:a=>r(a)})})]})})})})]})},q=c=>{const[n,i]=f.useState(1),s=10,r=a=>{i(a)},d=(n-1)*s,o=n*s,m=x.slice(d,o);return t("div",{className:"px-4 sm:px-6 lg:px-8",children:[t("div",{className:"sm:flex sm:items-center",children:[t("div",{className:"sm:flex-auto",children:[e("h1",{className:"text-xl font-semibold text-gray-900",children:"Users"}),e("p",{className:"mt-2 text-sm text-gray-700",children:"A list of all the users in your account including their name, title, email and role."})]}),e("div",{className:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none",children:e("button",{type:"button",className:"inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto",children:"Add user"})})]}),e("div",{className:"mt-8 flex flex-col",children:e("div",{className:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8",children:e("div",{className:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8",children:t("div",{className:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg",children:[t("table",{className:"min-w-full divide-y divide-gray-300",children:[e("thead",{className:"bg-gray-50",children:t("tr",{children:[e("th",{scope:"col",className:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",children:"Number"}),e("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Name"}),e("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Email"}),e("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Role"}),e("th",{scope:"col",className:"relative py-3.5 pl-3 pr-4 sm:pr-6",children:e("span",{className:"sr-only",children:"Edit"})})]})}),e("tbody",{className:"divide-y divide-gray-200 bg-white",children:m.map(a=>t("tr",{children:[e("td",{className:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6",children:a.id}),e("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500",children:a.name}),e("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500",children:a.email}),e("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500",children:"Member"}),e("td",{className:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6",children:t("a",{href:"#",className:"text-indigo-600 hover:text-indigo-900",children:["Edit",t("span",{className:"sr-only",children:[", ",a.name]})]})})]},a.email))})]}),e("div",{className:"px-4 py-5",children:e(y,{type:"centered",currentPage:n,totalResults:x.length,resultsPerPage:s,onPrevClick:()=>r(n-1),onNextClick:()=>r(n+1),onPageClick:a=>r(a)})})]})})})})]})},g=$.bind({}),u=M.bind({}),h=q.bind({});var v,w,P;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;
  const onPageChange = page => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = currentPage * resultsPerPage;
  const paginatedData = userData.slice(startIndex, endIndex);
  return <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button type="button" className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Number
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Email
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Role
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {paginatedData.map(person => <tr key={person.email}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {person.id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        Member
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit<span className="sr-only">, {person.name}</span>
                        </a>
                      </td>
                    </tr>)}
                </tbody>
              </table>
              <div className="px-4">
                <Pagination type="card" currentPage={currentPage} totalResults={userData.length} resultsPerPage={resultsPerPage} onPrevClick={() => onPageChange(currentPage - 1)} onNextClick={() => onPageChange(currentPage + 1)} onPageClick={page => onPageChange(page)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}`,...(P=(w=g.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var C,k,E;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;
  const onPageChange = page => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = currentPage * resultsPerPage;
  const paginatedData = userData.slice(startIndex, endIndex);
  return <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button type="button" className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Number
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Email
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Role
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {paginatedData.map(person => <tr key={person.email}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {person.id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        Member
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit<span className="sr-only">, {person.name}</span>
                        </a>
                      </td>
                    </tr>)}
                </tbody>
              </table>
              <div className="px-4">
                <Pagination type="simple" currentPage={currentPage} totalResults={userData.length} resultsPerPage={resultsPerPage} onPrevClick={() => onPageChange(currentPage - 1)} onNextClick={() => onPageChange(currentPage + 1)} onPageClick={page => onPageChange(page)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}`,...(E=(k=u.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var D,I,j;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;
  const onPageChange = page => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = currentPage * resultsPerPage;
  const paginatedData = userData.slice(startIndex, endIndex);
  return <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button type="button" className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Number
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Email
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Role
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {paginatedData.map(person => <tr key={person.email}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {person.id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        Member
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit<span className="sr-only">, {person.name}</span>
                        </a>
                      </td>
                    </tr>)}
                </tbody>
              </table>
              <div className="px-4 py-5">
                <Pagination type="centered" currentPage={currentPage} totalResults={userData.length} resultsPerPage={resultsPerPage} onPrevClick={() => onPageChange(currentPage - 1)} onNextClick={() => onPageChange(currentPage + 1)} onPageClick={page => onPageChange(page)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}`,...(j=(I=h.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};const F=["Default","Simple","Centered"];export{h as Centered,g as Default,u as Simple,F as __namedExportsOrder,L as default};
//# sourceMappingURL=Pagination.stories-36cbfe2b.js.map
