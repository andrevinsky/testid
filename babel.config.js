// babel.config.js
console.log('babel.config.js');

module.exports = {
  presets: [
    [ '@babel/preset-env',
      {
        "useBuiltIns": "entry",
        "modules": "cjs",
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  "env": {
    "test": {
      "presets": [
        [ '@babel/preset-env',
          {
            "useBuiltIns": "entry",
            "modules": "auto",
            targets: {
              node: 'current',
            },
          },
        ],
      ]
    }
  },
};
