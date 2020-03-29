import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/jevon-utils-es.js',
      format: 'es',
    },
    {
      file: 'dist/jevon-utils-umd.js',
      name: 'jevonUtils',
      format: 'umd',
    },
    {
      file: 'dist/jevon-utils-cjs.js',
      format: 'cjs',
    },
  ],
  plugins: [
    typescript(),
    resolve(),
    buble({
      objectAssign: 'Object.assign',
      exclude: ['node_modules/**'],
    }),
    // terser(),
  ],
}
