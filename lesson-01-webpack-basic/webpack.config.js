const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'build'), // tạo thư mục build ngoài cùng
        filename: 'bundle.js' // trong thư mục build sẻ có file bundle.js
    }
}