import { newSpecPage } from '@stencil/core/testing';
import { UtrustDonate } from './utrust-donate';

describe('utrust-donate', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UtrustDonate],
      html: `<utrust-donate></utrust-donate>`,
    });
    expect(page.root).toEqualHtml(`
      <utrust-donate>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </utrust-donate>
    `);
  });
});
