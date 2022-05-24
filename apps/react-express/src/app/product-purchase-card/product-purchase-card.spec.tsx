import { render } from '@testing-library/react';

import ProductPurchaseCard from './product-purchase-card';

describe('ProductPurchaseCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductPurchaseCard />);
    expect(baseElement).toBeTruthy();
  });
});
