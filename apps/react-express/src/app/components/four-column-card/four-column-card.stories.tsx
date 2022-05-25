import { Story, Meta } from '@storybook/react';
import { FourColumnCard, FourColumnCardProps } from './four-column-card';

export default {
  component: FourColumnCard,
  title: 'FourColumnCard',
} as Meta;

const Template: Story<FourColumnCardProps> = (args) => (
  <FourColumnCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
