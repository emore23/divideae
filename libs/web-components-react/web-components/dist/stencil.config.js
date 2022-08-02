import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';
export const config = {
  namespace: 'web-components',
  taskQueue: 'async',
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      componentCorePackage: '@divideae/web-components',
      proxiesFile: '../../../libs/web-components-react/src/generated/components.ts',
      includeDefineCustomElements: true,
    }),
  ],
};
