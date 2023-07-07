import { render } from '@testing-library/react';

import Equalizer from './not-found';

describe('Equalizer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Equalizer />);
    expect(baseElement).toBeTruthy();
  });
});
