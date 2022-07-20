module.exports = {
  stories: [
    "../libs/**/*.stories.mdx",
    "../libs/**/*.stories.(ts|tsx|js|jsx)"
  ],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links"
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    }
  },
  babelDefault: (config) => {
    return {
      ...config,
      plugins: [
        ...config.plugins,
        [
          require.resolve('@babel/plugin-transform-react-jsx'),
          { pragma: 'h' },
          'preset'
        ]
      ],
      presets: [['@babel/typescript', { jsxPragma: 'h', allowNamespaces: true, allowDeclareFields:true }]]
    };
  }
};