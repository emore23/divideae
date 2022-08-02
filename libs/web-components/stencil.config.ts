import { Config } from '@stencil/core';

import { sass } from '@stencil/sass';

import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'web-components',
  taskQueue: 'async',
  globalStyle: './src/styles/global.scss',
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../dist/libs/web-components/dist',
      copy: [
        { src: './styles', dest: 'styles' },
      ]
    },
    {
      type: 'dist-custom-elements',
      dir: '../../dist/libs/web-components/ces'
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      dir: '../../dist/libs/web-components/www',
      serviceWorker: null, // disable service workers
    },

    reactOutputTarget({
      componentCorePackage: '@divideae/web-components',
      proxiesFile:
        '../../../libs/web-components-react/src/generated/components.ts',
      includeDefineCustomElements: true,
    }),
  ],
};
