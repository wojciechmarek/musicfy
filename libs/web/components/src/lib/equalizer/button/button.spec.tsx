import { render } from '@testing-library/react';

import Power from './button';

describe('power', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Eq />);
    expect(baseElement).toBeTruthy();
  });
});
