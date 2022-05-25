import { render } from '@testing-library/react';

import ThreeColumnCard from './three-column-card';

describe('ThreeColumnCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThreeColumnCard />);
    expect(baseElement).toBeTruthy();
  });
});
