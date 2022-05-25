import { render } from '@testing-library/react';

import ProductCrousel from './product-crousel';

describe('ProductCrousel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductCrousel />);
    expect(baseElement).toBeTruthy();
  });
});
