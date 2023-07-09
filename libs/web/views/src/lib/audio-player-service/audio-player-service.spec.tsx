import { render } from '@testing-library/react';

import AudioPlayerService from './audio-player-service';

describe('AudioPlayerService', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AudioPlayerService />);
    expect(baseElement).toBeTruthy();
  });
});
