import { render } from '@testing-library/react';

import Equalizer from './equalizer';

describe('Equalizer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Equalizer />);
    expect(baseElement).toBeTruthy();
  });
});
