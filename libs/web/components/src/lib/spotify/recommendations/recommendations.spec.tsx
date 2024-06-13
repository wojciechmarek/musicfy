import { render } from '@testing-library/react';

import Recommendations from './recommendations';

describe('Recommendations', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Recommendations />);
    expect(baseElement).toBeTruthy();
  });
});
