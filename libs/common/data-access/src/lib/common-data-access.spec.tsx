import { render } from '@testing-library/react';

import CommonDataAccess from './common-data-access';

describe('CommonDataAccess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonDataAccess />);
    expect(baseElement).toBeTruthy();
  });
});
