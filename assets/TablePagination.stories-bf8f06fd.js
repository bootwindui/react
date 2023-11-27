import{j as e,F as v,a as n}from"./jsx-runtime-29545a09.js";import{r as b}from"./index-76fb7be0.js";import{P as x}from"./pagination-c9a49654.js";import"./_commonjsHelpers-de833af9.js";import"./index.esm-93ea4fcd.js";import"./iconBase-1d38e9b4.js";import"./cn-a0481221.js";const o=Array.from({length:50},(a,s)=>({id:s+1,name:`User ${s+1}`,email:`user${s+1}@example.com`})),R={title:"Examples/TablePagination",component:x,argTypes:{}},w=()=>{const[a,s]=b.useState(1),l=10,r=t=>{s(t)},c=(a-1)*l,d=a*l,p=o.slice(c,d);return e(v,{children:n("div",{className:"px-4 sm:px-6 lg:px-8",children:[n("div",{className:"sm:flex sm:items-center",children:[n("div",{className:"sm:flex-auto",children:[e("h1",{className:"text-xl font-semibold text-gray-900",children:"Users"}),e("p",{className:"mt-2 text-sm text-gray-700",children:"A list of all the users in your account including their name, title, email and role."})]}),e("div",{className:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none",children:e("button",{type:"button",className:"inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto",children:"Add user"})})]}),e("div",{className:"mt-8 flex flex-col",children:e("div",{className:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8",children:e("div",{className:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8",children:n("div",{className:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg",children:[n("table",{className:"min-w-full divide-y divide-gray-300",children:[e("thead",{className:"bg-gray-50",children:n("tr",{children:[e("th",{scope:"col",className:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",children:"Number"}),e("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Name"}),e("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Email"}),e("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Role"}),e("th",{scope:"col",className:"relative py-3.5 pl-3 pr-4 sm:pr-6",children:e("span",{className:"sr-only",children:"Edit"})})]})}),e("tbody",{className:"divide-y divide-gray-200 bg-white",children:p.map(t=>n("tr",{children:[e("td",{className:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6",children:t.id}),e("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500",children:t.name}),e("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500",children:t.email}),e("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500",children:"Member"}),e("td",{className:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6",children:n("a",{href:"#",className:"text-indigo-600 hover:text-indigo-900",children:["Edit",n("span",{className:"sr-only",children:[", ",t.name]})]})})]},t.email))})]}),e("div",{className:"px-4",children:e(x,{type:"simple",currentPage:a,totalResults:o.length,resultsPerPage:l,onPrevClick:()=>r(a-1),onNextClick:()=>r(a+1),onPageClick:t=>r(t)})})]})})})})]})})},P=()=>{const[a,s]=b.useState(1),l=10,r=t=>{s(t)},c=(a-1)*l,d=a*l,p=o.slice(c,d);return e(v,{children:n("div",{className:"px-4 sm:px-6 lg:px-8",children:[n("div",{className:"sm:flex sm:items-center",children:[n("div",{className:"sm:flex-auto",children:[e("h1",{className:"text-xl font-semibold text-gray-900",children:"Users"}),e("p",{className:"mt-2 text-sm text-gray-700",children:"A list of all the users in your account including their name, title, email and role."})]}),e("div",{className:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none",children:e("button",{type:"button",className:"inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto",children:"Add user"})})]}),e("div",{className:"mt-8 flex flex-col",children:e("div",{className:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8",children:e("div",{className:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8",children:n("div",{className:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg",children:[n("table",{className:"min-w-full divide-y divide-gray-300",children:[e("thead",{className:"bg-gray-50",children:n("tr",{children:[e("th",{scope:"col",className:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",children:"Number"}),e("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Name"}),e("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Email"}),e("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900",children:"Role"}),e("th",{scope:"col",className:"relative py-3.5 pl-3 pr-4 sm:pr-6",children:e("span",{className:"sr-only",children:"Edit"})})]})}),e("tbody",{className:"divide-y divide-gray-200 bg-white",children:p.map(t=>n("tr",{children:[e("td",{className:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6",children:t.id}),e("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500",children:t.name}),e("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500",children:t.email}),e("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500",children:"Member"}),e("td",{className:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6",children:n("a",{href:"#",className:"text-indigo-600 hover:text-indigo-900",children:["Edit",n("span",{className:"sr-only",children:[", ",t.name]})]})})]},t.email))})]}),e("div",{className:"px-4 py-5",children:e(x,{type:"centered",currentPage:a,totalResults:o.length,resultsPerPage:l,onPrevClick:()=>r(a-1),onNextClick:()=>r(a+1),onPageClick:t=>r(t)})})]})})})})]})})},i=w.bind({}),m=P.bind({});var g,h,u;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = currentPage * resultsPerPage;
  const paginatedData = userData.slice(startIndex, endIndex);
  return <>

      <div className="px-4 sm:px-6 lg:px-8">
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
      </div>
    </>;
}`,...(u=(h=i.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var y,f,N;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = currentPage * resultsPerPage;
  const paginatedData = userData.slice(startIndex, endIndex);
  return <>
      <div className="px-4 sm:px-6 lg:px-8">
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
      </div>
    </>;
}`,...(N=(f=m.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};const j=["Simple","Centered"];export{m as Centered,i as Simple,j as __namedExportsOrder,R as default};
//# sourceMappingURL=TablePagination.stories-bf8f06fd.js.map
