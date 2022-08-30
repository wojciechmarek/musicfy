import { render } from '@testing-library/react';

import WebComponents from './web-components';

describe('WebComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebComponents />);
    expect(baseElement).toBeTruthy();
  });
});
