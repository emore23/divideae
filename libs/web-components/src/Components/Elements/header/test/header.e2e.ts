import { newE2EPage } from '@stencil/core/testing';

describe('header', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<header></header>');
    const element = await page.find('header');
    expect(element).toHaveClass('hydrated');
  });
});
