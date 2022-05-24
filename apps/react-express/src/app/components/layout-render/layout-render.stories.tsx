import { Story, Meta } from '@storybook/react';
import { LayoutRender, LayoutRenderProps } from './layout-render';

export default {
  component: LayoutRender,
  title: 'LayoutRender',
} as Meta;

const Template: Story<LayoutRenderProps> = (args) => <LayoutRender {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
