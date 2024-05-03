import { render } from '@testing-library/react';
import { AudioProcessor } from './audio-processor';

describe('AudioProcessor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AudioProcessor />);
    expect(baseElement).toBeTruthy();
  });
});
