import { newE2EPage } from '@stencil/core/testing';

describe('utrust-donate', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<utrust-donate></utrust-donate>');

    const element = await page.find('utrust-donate');
    expect(element).toHaveClass('hydrated');
  });
});
