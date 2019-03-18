import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';
import visualizer from 'rollup-plugin-visualizer';
import async from 'rollup-plugin-async';
import postcss from 'rollup-plugin-postcss'

const NODE_ENV = process.env.NODE_ENV || 'development';
const outputFile = NODE_ENV === 'production' ? './dist/prod.js' : './dist/dev.js';

export default {
  input: './src/index.js',
  output: {
    file: outputFile,
    format: 'cjs',
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),
    async(),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
    }),
    resolve({
      jsnext: true,
      main: true,
    }),
    postcss({
      modules: true,
    }),
    uglify(),
    commonjs(),
    visualizer({
      filename: './docs/stats/index.html',
    }),
  ],
  external: id => /^react|react-dom|prop-types/.test(id),
};
