import { Story, Meta } from '@storybook/react';
import {
  ProductReviewCard,
  ProductReviewCardProps,
} from './product-review-card';

export default {
  component: ProductReviewCard,
  title: 'ProductReviewCard',
} as Meta;

const Template: Story<ProductReviewCardProps> = (args) => (
  <ProductReviewCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
