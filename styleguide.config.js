const path = require('path');

module.exports = {
  styleguideDir: './docs',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguide/ThemeWrapper'),
  },
  sections: [
    {
      name: 'Atoms',
      components: 'src/atoms/**/*.js',
      ignore: [
        'src/atoms/index.js',
        'src/atoms/Inputs/index.js',
      ],
    },
    {
      name: 'Molecules',
      components: 'src/molecules/**/*.js',
      ignore: ['src/molecules/index.js'],
    },
    {
      name: 'Organisms',
      components: 'src/organisms/**/*.js',
      ignore: [
        'src/organisms/index.js',
        'src/organisms/Tabs/Tab.js',
        'src/organisms/Tabs/TabItem.js',
      ],
    },
  ],
};
