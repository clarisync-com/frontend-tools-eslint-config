"use strict";

let namingConvention = [
    { selector: "default", format: ["camelCase"] },
    {
        selector: "method", // graphql __resolveType method
        format: ["camelCase"],
        leadingUnderscore: "allowDouble",
        filter: {
            regex: "^__resolveType$",
            match: true
        }
    },
    {
        selector: "property", // graphql __typename field
        format: ["camelCase"],
        leadingUnderscore: "allowDouble",
        filter: {
            regex: "^__typename$",
            match: true
        }
    },
    {
        selector: "typeParameter",
        format: ["PascalCase"],
        custom: {
            regex: "^[A-Z]([A-Z][a-zA-Z]+|\\d+)?$",
            match: true,
        },
    },
    {
        selector: "typeLike",
        format: ["PascalCase"],
        custom: {
            regex: "^I[A-Z]",
            match: false,
        },
    },
    {
        selector: "memberLike",
        format: ["camelCase"],
        modifiers: ["public", "protected"],
        leadingUnderscore: "forbid",
    },
    {
        selector: "memberLike",
        format: ["camelCase"],
        modifiers: ["private"],
        leadingUnderscore: "allow",
    },
    {
        selector: "parameter",
        format: ["camelCase"],
        leadingUnderscore: "allow",
    },
];

// IMPORTANT: Please keep these rules in alphabetical order. Add even those rules that you have disabled
module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    rules: {},
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            rules: {
                "@typescript-eslint/adjacent-overload-signatures": "error",
                "@typescript-eslint/array-type": [
                    "error",
                    { default: "array-simple" },
                ],
                "@typescript-eslint/await-thenable": "error",
                "@typescript-eslint/ban-ts-comment": "error",
                "@typescript-eslint/ban-tslint-comment": "error",
                "@typescript-eslint/ban-types": "error",
                "brace-style": "off",
                "@typescript-eslint/brace-style": "error",
                "@typescript-eslint/class-literal-property-style": "off",
                "comma-dangle": "off",
                "@typescript-eslint/comma-dangle": "error",
                "comma-spacing": "off",
                "@typescript-eslint/comma-spacing": ["error"],
                "@typescript-eslint/consistent-indexed-object-style": ["error", "index-signature"],
                "@typescript-eslint/consistent-type-assertions": [
                    "error",
                    {
                        assertionStyle: "as",
                        objectLiteralTypeAssertions: "never",
                    },
                ],
                "@typescript-eslint/consistent-type-definitions": "error",
                "@typescript-eslint/consistent-type-imports": ["error", {prefer: 'no-type-imports'}],
                "default-param-last": "off",
                "@typescript-eslint/default-param-last": ["error"],
                "dot-notation": "off",
                "@typescript-eslint/dot-notation": ["error"],
                "@typescript-eslint/explicit-function-return-type": "error",
                "@typescript-eslint/explicit-member-accessibility": [
                    "error",
                    {
                        accessibility: "explicit",
                        overrides: {
                            accessors: "explicit",
                            constructors: "explicit",
                            methods: "explicit",
                            properties: "explicit",
                            parameterProperties: "explicit",
                        },
                    },
                ],
                "@typescript-eslint/explicit-module-boundary-types": "off",
                "func-call-spacing": "off",
                "@typescript-eslint/func-call-spacing": "error",
                indent: "off",
                "@typescript-eslint/indent": "error",
                "init-declarations": "off",
                "@typescript-eslint/init-declarations": "off",
                "keyword-spacing": "off",
                "@typescript-eslint/keyword-spacing": ["error"],
                "lines-between-class-members": "off",
                "@typescript-eslint/lines-between-class-members": ["off"],
                "@typescript-eslint/member-delimiter-style": "error",
                "@typescript-eslint/member-ordering": [
                    "error",
                    {
                        default: [
                            "public-static-field",
                            "protected-static-field",
                            "private-static-field",

                            "public-instance-field",
                            "protected-instance-field",
                            "private-instance-field",

                            "public-abstract-field",
                            "protected-abstract-field",
                            "private-abstract-field",

                            "constructor",

                            "public-instance-method",
                            "protected-instance-method",
                            "private-instance-method",

                            "public-static-method",
                            "protected-static-method",
                            "private-static-method",

                            "public-abstract-method",
                            "protected-abstract-method",
                            "private-abstract-method",
                        ],
                    },
                ],
                "@typescript-eslint/method-signature-style": "error",
                "@typescript-eslint/naming-convention": [
                    "error",
                    ...namingConvention,
                ],
                "no-array-constructor": "off",
                "@typescript-eslint/no-array-constructor": "error",
                "@typescript-eslint/no-base-to-string": "error",
                // This is in the documentation but does not work.
                // "@typescript-eslint/no-confusing-non-null-assertion": "error",
                "@typescript-eslint/no-confusing-void-expression": [
                    "error",
                    { ignoreArrowShorthand: true }
                ],
                "@typescript-eslint/no-dupe-class-members": ["error"],
                "no-duplicate-imports": "off",
                "@typescript-eslint/no-duplicate-imports": "error",
                "@typescript-eslint/no-dynamic-delete": ["error"],
                "no-empty-function": "off",
                "@typescript-eslint/no-empty-function": "off",

                "@typescript-eslint/no-empty-interface": "error",
                "@typescript-eslint/no-explicit-any": "error",
                "@typescript-eslint/no-extra-non-null-assertion": "off",
                "no-extra-parens": "off",
                "@typescript-eslint/no-extra-parens": ["error"],
                "no-extra-semi": "off",
                "@typescript-eslint/no-extra-semi": ["error"],
                "@typescript-eslint/no-extraneous-class": ["off"],
                "@typescript-eslint/no-floating-promises": [
                    "error",
                    { ignoreVoid: true },
                ],
                "@typescript-eslint/no-for-in-array": "error",
                "@typescript-eslint/no-implicit-any-catch": "error",
                "no-implied-eval": "off",
                "@typescript-eslint/no-implied-eval": "error",

                "@typescript-eslint/no-inferrable-types": "error",
                "no-invalid-this": "off",
                "@typescript-eslint/no-invalid-this": "off", // Using class members as a variable is required in the angular
                "@typescript-eslint/no-invalid-void-type": "error",
                "no-loop-func": "off",
                "@typescript-eslint/no-loop-func": "error",
                "no-loss-of-precision": "off",
                "@typescript-eslint/no-loss-of-precision": "error",
                "no-magic-numbers": "off",
                "@typescript-eslint/no-magic-numbers": "off",
                "@typescript-eslint/no-meaningless-void-operator": "error",
                "@typescript-eslint/no-misused-new": "error",
                "@typescript-eslint/no-misused-promises": "error",
                "@typescript-eslint/no-namespace": "error",
                "@typescript-eslint/no-non-null-asserted-optional-chain":
                    "error",
                "@typescript-eslint/no-non-null-assertion": "error",
                "@typescript-eslint/no-parameter-properties": "error",
                "no-redeclare": "off",
                "@typescript-eslint/no-redeclare": "error",
                "@typescript-eslint/no-require-imports": "error",
                "@typescript-eslint/no-restricted-imports": "off",
                "no-shadow": "off",
                "@typescript-eslint/no-shadow": "error",
                "@typescript-eslint/no-this-alias": "error",
                "no-throw-literal": "off",
                "@typescript-eslint/no-throw-literal": "error",
                "@typescript-eslint/no-type-alias": [
                    "error",
                    {
                        allowAliases: "always",
                        allowConstructors: "always",
                    },
                ],
                "@typescript-eslint/no-unnecessary-boolean-literal-compare":
                    "error",
                "@typescript-eslint/no-unnecessary-condition": "off", // false-positive with ? for class field
                "@typescript-eslint/no-unnecessary-qualifier": "error",
                "@typescript-eslint/no-unnecessary-type-arguments": "error",
                "@typescript-eslint/no-unnecessary-type-assertion": "error",
                "@typescript-eslint/no-unnecessary-type-constraint": "error",
                "@typescript-eslint/no-unsafe-argument": "error",
                "@typescript-eslint/no-unsafe-assignment": "error",
                "@typescript-eslint/no-unsafe-call": "error",
                "@typescript-eslint/no-unsafe-member-access": "error",
                "@typescript-eslint/no-unsafe-return": "error",
                "no-unused-expressions": "off",
                "@typescript-eslint/no-unused-expressions": "error",
                "no-unused-vars": "off",
                "@typescript-eslint/no-unused-vars": [
                    "error",
                    {
                        argsIgnorePattern: "^_"
                    },
                ],
                "@typescript-eslint/no-use-before-define": "error",
                "no-useless-constructor": "off",
                "@typescript-eslint/no-useless-constructor": "error",
                "@typescript-eslint/no-var-requires": "error",
                "@typescript-eslint/non-nullable-type-assertion-style": "error",
                "object-curly-spacing": "off",
                "@typescript-eslint/object-curly-spacing": "error",
                "@typescript-eslint/padding-line-between-statements": "off", // prettier do it
                "@typescript-eslint/prefer-as-const": "error",
                "@typescript-eslint/prefer-enum-initializers": "off",
                "@typescript-eslint/prefer-for-of": "error",
                "@typescript-eslint/prefer-function-type": "error",
                "@typescript-eslint/prefer-includes": "error",
                "@typescript-eslint/prefer-literal-enum-member": "error",
                "@typescript-eslint/prefer-namespace-keyword": "error",
                "@typescript-eslint/prefer-nullish-coalescing": "error",
                "@typescript-eslint/prefer-optional-chain": "error",
                "@typescript-eslint/prefer-readonly-parameter-types": "off",
                "@typescript-eslint/prefer-readonly": "error",
                "@typescript-eslint/prefer-reduce-type-parameter": "error",
                "@typescript-eslint/prefer-regexp-exec": "error",
                "@typescript-eslint/prefer-return-this-type": "off",
                "@typescript-eslint/prefer-string-starts-ends-with": "error",
                "@typescript-eslint/prefer-ts-expect-error": "error",
                "@typescript-eslint/promise-function-async": "error",
                quotes: "off",
                "@typescript-eslint/quotes": [
                    "error",
                    "double",
                    { avoidEscape: true },
                ],
                "@typescript-eslint/require-array-sort-compare": "error",
                "require-await": "off",
                "@typescript-eslint/require-await": "error",
                "@typescript-eslint/restrict-plus-operands": "error",
                "@typescript-eslint/restrict-template-expressions": "error",
                "no-return-await": "off",
                "@typescript-eslint/return-await": "error",
                semi: "off",
                "@typescript-eslint/semi": "error",
                "@typescript-eslint/sort-type-union-intersection-members":
                    "error",
                "space-before-function-paren": "off",
                "@typescript-eslint/space-before-function-paren": ["error"],
                "space-infix-ops": "off",
                "@typescript-eslint/space-infix-ops": "error",
                "@typescript-eslint/strict-boolean-expressions": ["off"],
                "@typescript-eslint/switch-exhaustiveness-check": ["error"],
                "@typescript-eslint/triple-slash-reference": "error",
                "@typescript-eslint/type-annotation-spacing": "error",
                "@typescript-eslint/typedef": [
                    "error",
                    {
                        memberVariableDeclaration: false,
                        arrowParameter: false,
                        parameter: false,
                    },
                ],
                "@typescript-eslint/unbound-method": "error",
                "@typescript-eslint/unified-signatures": "error",
            },
        },
        {
            files: ["*.ts", "*.tsx", "*.js"],
            rules: {
                "accessor-pairs": "off",
                "array-bracket-newline": "off",
                "array-bracket-spacing": "off",
                "block-scoped-var": "error",
                "class-methods-use-this": "off",
                complexity: "off",
                "consistent-return": "error",
                curly: "error",
                "default-case": "off",
                "default-case-last": "error",
                "default-param-last": "error",
                "dot-location": ["error", "property"],
                "dot-notation": "error",
                eqeqeq: "error",
                "grouped-accessor-pairs": "error",
                "for-direction": "error",
                "getter-return": "error",
                "guard-for-in": "error",
                "max-classes-per-file": "error",
                "no-alert": "error",
                "no-async-promise-executor": "error",
                "no-await-in-loop": "off",
                "no-caller": "error",
                "no-case-declarations": "error",
                "no-compare-neg-zero": "error",
                "no-cond-assign": "error",
                "no-console": "error",
                "no-constant-condition": [
                    "error",
                    {
                        // Allow `while (true)`, etc.
                        checkLoops: false,
                    },
                ],
                "no-control-regex": "error",
                "no-debugger": "error",
                "no-div-regex": "error",
                "no-duplicate-case": "error",
                "no-else-return": ["error", { allowElseIf: false }],
                "no-empty": "error",
                "no-empty-character-class": "error",
                "no-empty-pattern": "error",
                "no-eval": "error",
                "no-ex-assign": "error",
                "no-extend-native": "error",
                "no-extra-bind": "error",
                "no-extra-boolean-cast": "error",
                "no-extra-semi": "error",
                "no-fallthrough": "error",
                "no-floating-decimal": "error",
                "no-global-assign": "error",
                "no-implicit-coercion": ["error", { allow: ["!!", "+"] }],
                "no-implied-eval": "error",
                "no-inner-declarations": "error",
                "no-invalid-regexp": "error",
                "no-irregular-whitespace": "error",
                "no-iterator": "error",
                "no-labels": "error",
                "no-lone-blocks": "error",
                "no-loop-func": "error",
                "no-misleading-character-class": "error",
                "no-multi-spaces": "error",
                "no-multi-str": "error",
                "no-new": "error",
                "no-new-func": "error",
                "no-new-wrappers": "error",
                "no-octal": "error",
                "no-octal-escape": "error",
                "no-param-reassign": "error",
                "no-proto": "error",
                "no-prototype-builtins": "error",
                "no-regex-spaces": "error",
                "no-restricted-properties": [
                    "error",
                    {
                        object: "global",
                        property: "isFinite",
                        message: "Please use Number.isFinite instead",
                    },
                    {
                        object: "self",
                        property: "isFinite",
                        message: "Please use Number.isFinite instead",
                    },
                    {
                        object: "window",
                        property: "isFinite",
                        message: "Please use Number.isFinite instead",
                    },
                    {
                        object: "global",
                        property: "isNaN",
                        message: "Please use Number.isNaN instead",
                    },
                    {
                        object: "self",
                        property: "isNaN",
                        message: "Please use Number.isNaN instead",
                    },
                    {
                        object: "window",
                        property: "isNaN",
                        message: "Please use Number.isNaN instead",
                    },
                    {
                        property: "__defineGetter__",
                        message: "Please use Object.defineProperty instead.",
                    },
                    {
                        property: "__defineSetter__",
                        message: "Please use Object.defineProperty instead.",
                    },
                    {
                        object: "Math",
                        property: "pow",
                        message:
                            "Use the exponentiation operator (**) instead.",
                    },
                ],
                "no-return-assign": "error",
                "no-return-await": "error",
                "no-script-url": "error",
                "no-self-assign": "error",
                "no-self-compare": "error",
                "no-sequences": "error",
                "no-sparse-arrays": "error",
                "no-template-curly-in-string": "error",
                "no-throw-literal": "error",
                "no-unexpected-multiline": "error",
                "no-unmodified-loop-condition": "error",
                "no-unsafe-finally": "error",
                "no-unused-expressions": [
                    "error",
                    { allowShortCircuit: true, allowTernary: true },
                ],
                "no-unused-vars": "off",
                "no-useless-call": "error",
                "no-useless-catch": "error",
                "no-useless-concat": "error",
                "no-useless-escape": "error",
                "no-useless-return": "error",
                "no-void": "error",
                "no-with": "error",
                "prefer-promise-reject-errors": "error",
                "prefer-regex-literals": "error",
                radix: "error",
                "require-unicode-regexp": "error",
                "use-isnan": [
                    "error",
                    { enforceForIndexOf: true, enforceForSwitchCase: true },
                ],
                "wrap-iife": ["error", "inside"],
                yoda: "error",
            },
        },
        {
            files: ["*.spec.ts", "*.e2e-spec.ts"],
            rules: {
                "@typescript-eslint/no-implicit-any-catch": "off",
                "@typescript-eslint/no-unused-vars-experimental": "off",
                "@typescript-eslint/no-unsafe-call": "off",
                "@typescript-eslint/no-unused-vars": "off",
                "@typescript-eslint/no-unsafe-assignment": "off",
                "@typescript-eslint/no-unsafe-member-access": "off",
                "class-methods-use-this": "off",
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/no-empty-function": "off",
                "@typescript-eslint/require-await": "off", // Jest use async function for test() and it()
                "@typescript-eslint/no-floating-promises": "off", // Jest use async function for test() and it()
                "@typescript-eslint/unbound-method": "off", // not working for spy
                "max-classes-per-file": "off",
                "no-restricted-globals": [2,
                    {
                        "name": "spyOn",
                        "message": "use jest.spyOn instead of spyOn because jasmine syntax deprecated in jest 27"
                    },
                ],
                "@typescript-eslint/consistent-type-assertions": "off",
                "@typescript-eslint/explicit-function-return-type": "off",
                "@typescript-eslint/no-unsafe-return": "off",
                "@typescript-eslint/no-unsafe-argument": "off",
                "@typescript-eslint/no-shadow": "off"
            },
        },
        {
            files: ["inject-tokens.ts"],
            rules: {
                "@typescript-eslint/naming-convention": [
                    "error",
                    ...namingConvention,
                    {
                        selector: "variable",
                        format: ["UPPER_CASE"],
                        leadingUnderscore: "allow",
                    },
                ],
            },
        },
        {
            files: ["decorators.ts"],
            rules: {
                "@typescript-eslint/naming-convention": [
                    "error",
                    ...namingConvention,
                    {
                        selector: "variable",
                        format: ["UPPER_CASE", "PascalCase", "camelCase"],
                        leadingUnderscore: "allow",
                    },
                ],
            },
        },
    ],
    reportUnusedDisableDirectives: true,
};
