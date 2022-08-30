import { render } from '@testing-library/react';

import WebViews from './web-views';

describe('WebViews', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebViews />);
    expect(baseElement).toBeTruthy();
  });
});
