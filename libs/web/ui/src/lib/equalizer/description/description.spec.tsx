import { render } from '@testing-library/react';

import { Description } from './description';

describe('Description', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Description label='Tones'/>);
    expect(baseElement).toBeTruthy();
  });
});
