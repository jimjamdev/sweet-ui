module.exports = {
  styleguideDir: './docs',
  sections: [
    {
      name: 'Atoms',
      components: 'src/atoms/**/*.js',
      ignore: 'src/atoms/index.js',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
    },
  ],
};
