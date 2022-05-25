import { Story, Meta } from '@storybook/react';
import { ProductCarousel, ProductCrouselProps } from './product-crousel';

export default {
  component: ProductCarousel,
  title: 'ProductCarousel',
} as Meta;

const Template: Story<ProductCrouselProps> = (args) => (
  <ProductCarousel {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
