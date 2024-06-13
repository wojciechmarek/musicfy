import { render } from '@testing-library/react';

import Knob from './knob';

describe('Knob', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Knob />);
    expect(baseElement).toBeTruthy();
  });
});
