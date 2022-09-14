import { render } from '@testing-library/react';

import SongDetails from './song-details';

describe('SongDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SongDetails />);
    expect(baseElement).toBeTruthy();
  });
});
