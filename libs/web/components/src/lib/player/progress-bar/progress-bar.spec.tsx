import { render } from '@testing-library/react';

import ProgressBar from './progress-bar';

describe('ProgressBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProgressBar />);
    expect(baseElement).toBeTruthy();
  });
});
