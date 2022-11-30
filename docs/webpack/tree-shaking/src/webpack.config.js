
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    optimization: {
        // Включает тришейкинг по экспортам
        // usedExports: true,
    },
}