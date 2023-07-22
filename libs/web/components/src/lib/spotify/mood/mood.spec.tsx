import { render } from '@testing-library/react';

import Mood from './mood';

describe('Mood', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Mood />);
    expect(baseElement).toBeTruthy();
  });
});
