import { render } from '@testing-library/react';

import {InternetRadio} from './internet-radio';

describe('InternetRadio', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InternetRadio />);
    expect(baseElement).toBeTruthy();
  });
});
