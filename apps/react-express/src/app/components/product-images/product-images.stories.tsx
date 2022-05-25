import { Story, Meta } from '@storybook/react';
import { ProductImages, ProductImagesProps } from './product-images';

export default {
  component: ProductImages,
  title: 'ProductImages',
} as Meta;

const Template: Story<ProductImagesProps> = (args) => (
  <ProductImages {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
