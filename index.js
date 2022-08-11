module.exports = function ({types: t}) {
    return {
        visitor: {
            Literal(path) {
                path.replaceWith(t.stringLiteral("Hello World!"));
                path.skip();
            }
        }
    }
}
