module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
                moduleDirectory: ["node_modules", "src/"],
            },
        },
        react: {
            version: "detect",
        },
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "plugin:import/recommended",
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint", "import"],
    rules: {
        "no-unused-var": "off",
        "no-var": "error",
        curly: ["error", "multi-line"],
        "import/order": [
            "error",
            { groups: ["index", "sibling", "parent", "internal", "external", "builtin", "object", "type"] },
        ],
        "prettier/prettier": [
            "error", {
                "endOfLine": "auto"
            }
        ],
    },
    overrides: [
        {
            files: ["**/*.tsx"],
            rules: {
                "react/prop-types": "off",
            },
        },
    ],
};
