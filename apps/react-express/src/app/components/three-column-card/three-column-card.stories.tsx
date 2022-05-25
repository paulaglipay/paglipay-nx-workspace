import { Story, Meta } from '@storybook/react';
import { ThreeColumnCard, ThreeColumnCardProps } from './three-column-card';

export default {
  component: ThreeColumnCard,
  title: 'ThreeColumnCard',
} as Meta;

const Template: Story<ThreeColumnCardProps> = (args) => (
  <ThreeColumnCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
