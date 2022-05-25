import { Story, Meta } from '@storybook/react';
import { CardPlaceholder, CardPlaceholderProps } from './card-placeholder';

export default {
  component: CardPlaceholder,
  title: 'CardPlaceholder',
} as Meta;

const Template: Story<CardPlaceholderProps> = (args) => (
  <CardPlaceholder {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
