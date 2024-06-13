import { render } from '@testing-library/react';

import VolumeButton from './volume-button';

describe('VolumeButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VolumeButton />);
    expect(baseElement).toBeTruthy();
  });
});
