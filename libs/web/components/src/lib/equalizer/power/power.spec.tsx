import { render } from '@testing-library/react';

import Power from './power';

describe('power', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Power />);
    expect(baseElement).toBeTruthy();
  });
});
