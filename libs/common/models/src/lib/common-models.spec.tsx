import { render } from '@testing-library/react';

import CommonModels from './common-models';

describe('CommonModels', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonModels />);
    expect(baseElement).toBeTruthy();
  });
});
