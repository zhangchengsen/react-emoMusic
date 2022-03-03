const path = require("path")
const resolve = dir => path.resolve(__dirname, dir)
module.exports = {
    webpack: {
        alias: {
            "@": resolve("src"),
            "components": resolve("src/components")
        }
    },
    // devServer: {
    //     proxy: {
    //         '/api': {
    //             target: 'http://39.96.217.68:2003',
    //             changeOrigin: true,
    //             pathRewrite: {
    //                 "^/api": ''
    //             }
    //         }
    //     },
    // },

}