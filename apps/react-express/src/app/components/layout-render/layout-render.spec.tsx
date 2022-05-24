import { render } from '@testing-library/react';

import LayoutRender from './layout-render';

describe('LayoutRender', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LayoutRender />);
    expect(baseElement).toBeTruthy();
  });
});
