module.exports = {
    scssPaths: [
        "./src/**/*.scss"
    ],
    tsPaths: [
        "./src/**/*.ts",
        "!./src/**/*.spec.ts"
    ],
    artifactPath: "./_artifact",
    build: {
        path: "./build",
    },
    dist: {
      path: "./dist",
      scriptFile: "script.min.js",
      styleFile: "style.min.css"
    },
    tsConfig: {
        module: 'commonjs',
        target: 'es5',
        noImplicitAny: false,
        removeComments: true,
        declaration: true,
        sourceMap: false
    }
};