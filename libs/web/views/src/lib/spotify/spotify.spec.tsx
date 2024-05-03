import { render } from '@testing-library/react';

import { Spotify } from './spotify';

describe('Spotify', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Spotify />);
    expect(baseElement).toBeTruthy();
  });
});
