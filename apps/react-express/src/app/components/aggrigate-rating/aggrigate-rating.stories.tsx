import { Story, Meta } from '@storybook/react';
import { AggrigateRating, AggrigateRatingProps } from './aggrigate-rating';

export default {
  component: AggrigateRating,
  title: 'AggrigateRating',
} as Meta;

const Template: Story<AggrigateRatingProps> = (args) => (
  <AggrigateRating {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
