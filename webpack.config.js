const path = require('path')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './imgSlider.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'imgSlider.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'imgSlider',
        libraryTarget: 'umd',
        libraryExport: 'default',
    },
}