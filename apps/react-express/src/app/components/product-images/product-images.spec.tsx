import { render } from '@testing-library/react';

import ProductImages from './product-images';

describe('ProductImages', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductImages />);
    expect(baseElement).toBeTruthy();
  });
});
