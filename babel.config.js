// babel.config.js
console.log('babel.config.js');

module.exports = {
  presets: [
    [ '@babel/preset-env',
      {
        "useBuiltIns": "entry",
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  "env": {
    "test": {
      "plugins": ["@babel/plugin-transform-modules-commonjs"]
    },
    "development": {
      "plugins": ["@babel/plugin-transform-modules-commonjs"]
    }
  },
};
