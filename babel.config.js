const presets = [
    [
        "@babel/env",
        {
            modules: false
        }
    ],
    ["@babel/preset-react"],
    ["@babel/preset-flow"]
];

module.exports = { presets };