import { render } from '@testing-library/react';

import WebUtilityConstants from './web-utility-constants';

describe('WebUtilityConstants', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebUtilityConstants />);
    expect(baseElement).toBeTruthy();
  });
});
