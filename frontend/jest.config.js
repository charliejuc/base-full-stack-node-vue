module.exports = {
    transform: {
        '^.+\\.ts$': 'ts-jest',
        '^.+\\.vue$': 'vue-jest'
    },
    moduleNameMapper: {
        '^@/(.*)$': path.join(__dirname, 'src', '$1')
    }
}
