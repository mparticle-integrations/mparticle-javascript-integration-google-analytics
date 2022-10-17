import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';

const extensions = ['.js', '.ts'];

export default [
    {
        input: 'src/GoogleAnalyticsEventForwarder.js',
        output: {
            file: 'dist/GoogleAnalyticsEventForwarder.iife.js',
            format: 'iife',
            exports: 'named',
            name: 'mpGoogleAnalyticsKit',
            strict: false,
        },
        plugins: [
            babel({
                extensions,
                include: ['src/**/*'],
                babelHelpers: 'runtime',
            }),
            resolve({
                browser: true,
            }),
            commonjs({
                include: 'node_modules/**',
            }),
            typescript({ tsconfig: './tsconfig.json' }),
        ],
    },
    {
        input: 'src/GoogleAnalyticsEventForwarder.js',
        output: {
            file: 'dist/GoogleAnalyticsEventForwarder.common.js',
            format: 'cjs',
            exports: 'named',
            name: 'mpGoogleAnalyticsKit',
            strict: false,
        },
        plugins: [
            babel({
                extensions,
                include: ['src/**/*'],
                babelHelpers: 'runtime',
                babelrc: false,
                presets: [
                    '@babel/preset-typescript',
                    ['minify', { builtIns: false }],
                    ['@babel/env', { modules: false }],
                ],
                plugins: [
                    '@babel/proposal-class-properties',
                    '@babel/proposal-object-rest-spread',
                    '@babel/plugin-transform-runtime',
                ],
            }),
            resolve({
                browser: true,
            }),
            commonjs(),
        ],
    },
];
