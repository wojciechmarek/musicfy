import { render } from '@testing-library/react';

import VfdDisplay from './vfd-display';

describe('vfd-display', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VfdDisplay />);
    expect(baseElement).toBeTruthy();
  });
});
