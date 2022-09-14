import { render } from '@testing-library/react';

import PlayButtons from './play-buttons';

describe('PlayButtons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlayButtons />);
    expect(baseElement).toBeTruthy();
  });
});
