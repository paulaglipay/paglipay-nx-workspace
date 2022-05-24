import { render } from '@testing-library/react';

import ProductReviewCard from './product-review-card';

describe('ProductReviewCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductReviewCard />);
    expect(baseElement).toBeTruthy();
  });
});
