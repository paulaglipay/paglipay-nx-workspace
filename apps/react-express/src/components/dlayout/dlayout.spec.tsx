import { render } from '@testing-library/react';

import DLayout from './dlayout';

describe('DLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DLayout />);
    expect(baseElement).toBeTruthy();
  });
});
