import {
  renderVdom,
  registerHost,
  getHostRef
} from '@stencil/core/internal/client';
import { defaultViewports } from '../libs/web-components/src/global/types/breakpoints';
import {defineCustomElements} from '../dist/libs/web-components/loader';

defineCustomElements();

const rootElement = document.getElementById('root');
const storyRoot = document.createElement('div');
rootElement.parentElement.appendChild(storyRoot);

registerHost(storyRoot, { $flags$: 0, $tagName$: 'story-root' });
const hostRef = getHostRef(storyRoot);

export const decorators = [
  (Story) => {
    renderVdom(hostRef, Story());
    return '<div />';
  }
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: defaultViewports },
  options: {
    storySort: {
      order: [
        'Getting Started',
        'Theming',
        ['Intro', 'Defs', 'Functions', 'Mixins'],
        'Design Tokens',
        ['Intro', 'Breakpoints'],
        'Global',
        'Components',
        'Composites',
        'Workspaces',
        'Pages',
        'Tests'
      ]
    }
  }
}