const path = require('path');
module.exports = {
    mode: 'development',

    entry: './src/app/main.ts',

    output: {
        // モジュールバンドルを行った結果を出力する場所やファイル名の指定
        // "__dirname"はこのファイルが存在するディレクトリを表すnode.jsで定義済みの定数
        path: path.join(__dirname,'docs'),
        filename: 'bundle.js'
    },
    // モジュールとして扱いたいファイルの拡張子を指定する
    // 例えば「import Foo from './foo'」という記述に対して"foo.ts"という名前のファイルをモジュールとして探す
    // デフォルトは['.js', '.json']
    resolve: {
        extensions:['.ts','.js']
    },
    // モジュールに適用するルールの設定（ここではローダーの設定を行う事が多い）
    module: {
        rules: [
            {
                // 拡張子が.tsで終わるファイルに対して、TypeScriptコンパイラを適用する
                test:/\.ts$/,loader:'ts-loader'
            }
        ]
    }
}
