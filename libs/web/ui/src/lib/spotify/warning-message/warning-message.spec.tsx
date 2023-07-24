import { render } from '@testing-library/react';

import { WarningMessage } from './warning-message';

describe('Mood', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WarningMessage />);
    expect(baseElement).toBeTruthy();
  });
});
