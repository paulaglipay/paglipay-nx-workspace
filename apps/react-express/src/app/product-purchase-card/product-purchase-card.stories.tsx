import { Story, Meta } from '@storybook/react';
import {
  ProductPurchaseCard,
  ProductPurchaseCardProps,
} from './product-purchase-card';

export default {
  component: ProductPurchaseCard,
  title: 'ProductPurchaseCard',
} as Meta;

const Template: Story<ProductPurchaseCardProps> = (args) => (
  <ProductPurchaseCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
