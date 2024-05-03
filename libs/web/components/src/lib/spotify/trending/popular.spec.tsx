import { render } from '@testing-library/react';

import Popular from './popular';

describe('Popular', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Popular />);
    expect(baseElement).toBeTruthy();
  });
});
