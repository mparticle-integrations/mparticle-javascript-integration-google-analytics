import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default [
    {
        input: 'src/GoogleAnalyticsEventForwarder.js',
        output: {
            file: 'GoogleAnalyticsEventForwarder.js',
            format: 'iife',
            exports: 'named',
            name: 'mpGoogleAnalyticsKit',
            strict: false
        },
        plugins: [
            resolve({
                browser: true
            }),
            commonjs()
        ]
    },
    {
        input: 'src/GoogleAnalyticsEventForwarder.js',
        output: {
            file: 'dist/GoogleAnalyticsEventForwarder.js',
            format: 'iife',
            exports: 'named',
            name: 'mpGoogleAnalyticsKit',
            strict: false
        },
        plugins: [
            resolve({
                browser: true
            }),
            commonjs()
        ]
    },
    {
        input: 'src/GoogleAnalyticsEventForwarder.js',
        output: {
            file: 'npm/GoogleAnalyticsEventForwarder.js',
            format: 'cjs',
            exports: 'named',
            name: 'mpGoogleAnalyticsKit',
            strict: false
        },
        plugins: [
            resolve({
                browser: true
            }),
            commonjs()
        ]
    }
]