module.exports = function override(config, env) {
  //do stuff with the webpack config...
  return {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        react: 'preact/compat',
        'react-dom': 'preact/compat',
        'create-react-class': 'preact/compat/lib/create-react-class',
        'react-dom-factories': 'preact/compat/lib/react-dom-factories',
      },
    },
  };
};
