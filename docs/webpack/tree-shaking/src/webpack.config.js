
module.exports = {
    mode: 'development',
    // mode: 'production',
    entry: './src/index.js',
    optimization: {
        // Включает тришейкинг по экспортам, функции помечаются неиспользуемыми
        // но все равно включаются в итоговый бандл
        usedExports: true,
    },
}