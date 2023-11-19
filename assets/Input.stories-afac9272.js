import{j as r,F as a,a as e,T as m}from"./title-2f3446b7.js";import{H as l,a as S}from"./index.esm-06997782.js";import{T as t}from"./typography-b2d974c3.js";import{T as z,I as i}from"./index-4b43864b.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iconBase-1d38e9b4.js";const P={title:"Components/Forms/Input",component:z,argTypes:{enabled:{control:"boolean"}}},o=s=>r(a,{children:[e(m,{title:"Forms",description:"Forms"}),e(t,{type:"headline",size:6,children:"Basic Input"}),e(i,{placeholder:"ari@bootwind.com"}),e(i,{placeholder:"Disabled input",disabled:!0})]}),n=s=>r(a,{children:[e(m,{title:"Forms",description:"Forms"}),r("div",{className:"mb-10",children:[e(t,{type:"headline",size:6,children:"Input with Label"}),e(i,{placeholder:"ari@bootwind.com",label:"Email"})]}),r("div",{className:"mb-10",children:[e(t,{type:"headline",size:6,children:"Input with Description"}),e(i,{placeholder:"ari@bootwind.com",label:"Email",description:r(a,{children:[e(l,{className:"w-4 h-4"}),"Helping text for user"]})})]})]}),u=e(a,{children:e("div",{className:"p-1 border rounded-md",children:r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"12",viewBox:"0 0 20 12",fill:"none",children:[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.65265 10.0245C8.64273 10.8562 7.33269 11.3583 5.90117 11.3583C2.70702 11.3583 0.117645 8.85857 0.117645 5.77498C0.117645 2.69139 2.70702 0.19165 5.90117 0.19165C7.33269 0.19165 8.64273 0.693732 9.65265 1.52544C10.6626 0.693732 11.9726 0.19165 13.4041 0.19165C16.5983 0.19165 19.1877 2.69139 19.1877 5.77498C19.1877 8.85857 16.5983 11.3583 13.4041 11.3583C11.9726 11.3583 10.6626 10.8562 9.65265 10.0245Z",fill:"#ED0006"}),e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.65265 10.0245C10.8962 9.00045 11.6847 7.47661 11.6847 5.77498C11.6847 4.07335 10.8962 2.54952 9.65265 1.52543C10.6626 0.693731 11.9726 0.19165 13.4041 0.19165C16.5983 0.19165 19.1877 2.69139 19.1877 5.77498C19.1877 8.85857 16.5983 11.3583 13.4041 11.3583C11.9726 11.3583 10.6626 10.8562 9.65265 10.0245Z",fill:"#F9A000"}),e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.65266 10.0245C10.8962 9.00043 11.6847 7.4766 11.6847 5.77498C11.6847 4.07336 10.8962 2.54954 9.65266 1.52545C8.40914 2.54954 7.62064 4.07336 7.62064 5.77498C7.62064 7.4766 8.40914 9.00043 9.65266 10.0245Z",fill:"#FF5E00"})]})})}),c=s=>r(a,{children:[e(m,{title:"Forms",description:"Forms"}),e("div",{className:"mb-10",children:e(i,{placeholder:"1234 1234 1234 1234",label:"Card Number",leftSection:u})}),e("div",{className:"mb-10",children:e(i,{placeholder:"1234 1234 1234 1234",label:"Card Number",leftSection:u,rightSection:e(a,{children:e(S,{})})})})]}),d=s=>r(a,{children:[e(m,{title:"Forms",description:"Forms"}),r("div",{className:"mb-10",children:[e(t,{type:"paragraph",size:2,children:"Default"}),e(i,{placeholder:"ari@bootwind.com",label:"Email",description:r(a,{children:[e(l,{className:"w-4 h-4"}),"Helping text for user"]})})]}),r("div",{className:"mb-10",children:[e(t,{type:"paragraph",size:2,children:"Danger"}),e(i,{variant:"danger",placeholder:"ari@bootwind.com",label:"Email",description:r(a,{children:[e(l,{className:"w-4 h-4"}),"Helping text for user"]})})]}),r("div",{className:"mb-10",children:[e(t,{type:"paragraph",size:2,children:"Warning"}),e(i,{variant:"warning",placeholder:"ari@bootwind.com",label:"Email",description:r(a,{children:[e(l,{className:"w-4 h-4"}),"Helping text for user"]})})]}),r("div",{className:"mb-10",children:[e(t,{type:"paragraph",size:2,children:"Success"}),e(i,{variant:"success",placeholder:"ari@bootwind.com",label:"Email",description:r(a,{children:[e(l,{className:"w-4 h-4"}),"Helping text for user"]})})]})]}),p=s=>e(a,{});var h,g,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`(args: ToggleProps) => <>

    <Title title="Forms" description="Forms" />

    <Text type='headline' size={6}>Basic Input</Text>
    <Input placeholder='ari@bootwind.com'></Input>
    <Input placeholder='Disabled input' disabled></Input>
  </>`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,C,w;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`(args: ToggleProps) => <>

    <Title title="Forms" description="Forms" />

    <div className="mb-10">
      <Text type='headline' size={6}>Input with Label</Text>
      <Input placeholder='ari@bootwind.com' label='Email'></Input>
    </div>
    <div className="mb-10">
      <Text type='headline' size={6}>Input with Description</Text>
      <Input placeholder='ari@bootwind.com' label='Email' description={<>
          <HiOutlineQuestionMarkCircle className='w-4 h-4' />
          Helping text for user
        </>}></Input>
    </div>
  </>`,...(w=(C=n.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var I,x,T;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`(args: ToggleProps) => <>

    <Title title="Forms" description="Forms" />

    <div className="mb-10">
      <Input placeholder='1234 1234 1234 1234' label='Card Number' leftSection={masterCardImage} />
    </div>
    <div className="mb-10">
      <Input placeholder='1234 1234 1234 1234' label='Card Number' leftSection={masterCardImage} rightSection={<>
          <HiOutlineCreditCard></HiOutlineCreditCard>
        </>} />
    </div>
  </>`,...(T=(x=c.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var N,f,F;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`(args: ToggleProps) => <>

    <Title title="Forms" description="Forms" />

    <div className="mb-10">
      <Text type='paragraph' size={2}>Default</Text>
      <Input placeholder='ari@bootwind.com' label='Email' description={<>
          <HiOutlineQuestionMarkCircle className='w-4 h-4' />
          Helping text for user
        </>}></Input>
    </div>
    <div className="mb-10">
      <Text type='paragraph' size={2}>Danger</Text>
      <Input variant='danger' placeholder='ari@bootwind.com' label='Email' description={<>
          <HiOutlineQuestionMarkCircle className='w-4 h-4' />
          Helping text for user
        </>}></Input>
    </div>
    <div className="mb-10">
      <Text type='paragraph' size={2}>Warning</Text>
      <Input variant='warning' placeholder='ari@bootwind.com' label='Email' description={<>
          <HiOutlineQuestionMarkCircle className='w-4 h-4' />
          Helping text for user
        </>}></Input>
    </div>
    <div className="mb-10">
      <Text type='paragraph' size={2}>Success</Text>
      <Input variant='success' placeholder='ari@bootwind.com' label='Email' description={<>
          <HiOutlineQuestionMarkCircle className='w-4 h-4' />
          Helping text for user
        </>}></Input>
    </div>
  </>`,...(F=(f=d.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var H,y,E;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`(args: ToggleProps) => <>
  </>`,...(E=(y=p.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};const j=["BasicInput","LabelAndHelperText","LeftRightSections","Variants","InputGroup"];export{o as BasicInput,p as InputGroup,n as LabelAndHelperText,c as LeftRightSections,d as Variants,j as __namedExportsOrder,P as default};
//# sourceMappingURL=Input.stories-afac9272.js.map
