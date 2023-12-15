import { TabItem, Tabs } from "..";

export default {
    title: 'Components/Tabs',
    component: Tabs,
};

export const BasicTabs = () => {
    return (
        <Tabs>
            <TabItem title="My account">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non odio posuere, ultricies quam at, tempor nisl. Mauris ultrices, nisi at viverra fringilla, sapien nulla congue lacus, eget faucibus justo mauris et est. Nunc pharetra porta nisi, in bibendum justo sollicitudin vitae. Sed tristique semper mi. Vivamus sit amet sagittis nisi. Etiam faucibus erat in rutrum dictum. Vivamus a metus non nisi imperdiet euismod. Integer condimentum faucibus eros aliquam rhoncus. Mauris at mauris eget risus malesuada sollicitudin. Mauris fermentum neque sed fringilla consequat. Aenean mattis auctor mi, sit amet fringilla justo imperdiet at. Nullam ac blandit lorem. Integer nec nisl a diam facilisis venenatis.
            </TabItem>
            <TabItem title="Company">
                Etiam eget nulla vulputate, lacinia magna eu, malesuada odio. Suspendisse dignissim odio quis consectetur efficitur. Fusce feugiat arcu libero, in egestas mi faucibus eu. Sed rutrum fringilla diam volutpat mollis. Mauris nec nibh pretium, auctor felis quis, ornare mi. Mauris quis lobortis dui, nec congue leo. Proin sodales ligula in lorem gravida congue. Duis nec tellus et elit finibus viverra ac vitae neque. Suspendisse efficitur, dui in vulputate fermentum, risus justo finibus purus, et consectetur risus nulla sed est. Vivamus sollicitudin nisl a orci semper, sit amet semper nibh feugiat. Sed quis ipsum porta, hendrerit tellus nec, aliquet neque. Sed elementum lacinia eros, at rutrum leo pharetra eu. Praesent at lectus nec diam tincidunt varius sagittis non massa. Sed tempus vel nulla eu feugiat. In aliquet odio et sapien iaculis sagittis.
            </TabItem>
            <TabItem title="Team Members">
                Donec sit amet cursus dolor. Cras euismod magna scelerisque, ultrices magna eget, posuere leo. Duis feugiat nec leo ultrices feugiat. Sed justo enim, semper vel tincidunt vel, porta auctor sapien. Aliquam quis maximus enim, non laoreet orci. Phasellus rutrum eros nec eros mollis, nec sagittis risus sollicitudin. Phasellus egestas felis nec turpis egestas, in ultricies urna bibendum. Etiam a sapien vitae ante rutrum aliquam facilisis at felis. Sed tincidunt quam nunc, eget finibus orci tristique sit amet. Sed ac mollis magna.
            </TabItem>
        </Tabs>
    )
}