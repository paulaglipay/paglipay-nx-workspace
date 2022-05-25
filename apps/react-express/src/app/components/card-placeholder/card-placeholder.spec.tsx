import { render } from '@testing-library/react';

import CardPlaceholder from './card-placeholder';

describe('CardPlaceholder', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardPlaceholder />);
    expect(baseElement).toBeTruthy();
  });
});
