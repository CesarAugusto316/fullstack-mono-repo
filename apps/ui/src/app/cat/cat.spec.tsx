import { render } from '@testing-library/react';

import Cat from './cat';

describe('Cat', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cat />);
    expect(baseElement).toBeTruthy();
  });
});
