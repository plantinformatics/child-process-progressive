import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: 'main.js',  // Entry point for the application
  output: {
    file: 'dist/child-process-progressive.mjs', // Output bundle location
    format: 'esm' // ? CommonJS format suitable for Node.js
  },
  plugins: [
    resolve({
      preferBuiltins: true // Prefer Node.js built-ins over npm modules if available
    }),
    commonjs(),
    json()
  ],
  // List of Node built-in modules to leave as external dependencies
  external: ['fs', 'child_process', 'path']
};
