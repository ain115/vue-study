const path = require('path');//node에서 절대경로 작성을 쉽게 해주기위해 사용할 수 있도록 만들어둔 path메서드(모듈?)

module.exports = {
    entry: {
        app: path.join(__dirname, 'main.js'),
    },
    module: {
        rules: [{

        }],
    },
    plugins: [],
    output: {
        filemane: 'app.js',
        path: path.join(__dirname, 'dist'),
    }
};