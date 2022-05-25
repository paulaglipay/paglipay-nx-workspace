import { render } from '@testing-library/react';

import FourColumnCard from './four-column-card';

describe('FourColumnCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FourColumnCard />);
    expect(baseElement).toBeTruthy();
  });
});
