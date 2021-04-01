import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json'
import postcss from 'rollup-plugin-postcss';
import external from 'rollup-plugin-peer-deps-external'
import reactSvg from 'rollup-plugin-react-svg'
import json from '@rollup/plugin-json';
import svgr from '@svgr/rollup';
import url from 'rollup-plugin-url';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        input: "src/index.ts",
        treeshake: false,
        output: [
            {
                file: pkg.main,
                format: 'cjs',
                sourcemap: true
            },
            {
                file: pkg.module,
                format: 'es',
                sourcemap: true
            }
        ],
        external: ["react", "styled-components", "redux", "react-redux", "react-inlinesvg"],
        plugins: [
            external(),
            json(),
            svgr(),
            url(),
            postcss({
                modules: true
            }),
            resolve({
                mainFields: ['module', 'main', 'jsnext:main', 'browser'],
                extensions
            }),
            commonjs({
                include: 'node_modules/**',
                namedExports: {
                    'node_modules/react-is/index.js': ['isValidElementType', 'isContextConsumer']
                }
            }),
            babel({
                exclude: "./node_module/**",
                extensions,
            }),
            reactSvg({
                // svgo options
                svgo: {
                  plugins: [], // passed to svgo
                  multipass: true
                },
           
                // whether to output jsx
                jsx: false,
           
                // include: string
                include: null,
           
                // exclude: string
                exclude: null
            })
        ]
    }
];