import { render } from '@testing-library/react';

import AggrigateRating from './aggrigate-rating';

describe('AggrigateRating', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AggrigateRating />);
    expect(baseElement).toBeTruthy();
  });
});
