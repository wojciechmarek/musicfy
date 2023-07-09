import { render } from '@testing-library/react';

import { DemoSongs } from './demo-songs';

describe('DemoSongs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DemoSongs />);
    expect(baseElement).toBeTruthy();
  });
});
