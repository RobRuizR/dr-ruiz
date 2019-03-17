// babel.config.js
module.exports = api => {
  const isTest = api.env('test');
  if (isTest) {
    return {
      presets: ['@babel/env', '@babel/preset-react'],
    };
  }
  return {
    presets: [
      [
        'babel-preset-gatsby',
        {
          targets: {
            browsers: ['>0.25%', 'not dead'],
          },
        },
      ],
    ],
  };
};
