"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.packageJsonChanges = exports.eslintrcJsonChanges = void 0;
exports.eslintrcJsonChanges = {
    extends: '@company-starter/eslint-config'
};
exports.packageJsonChanges = {
    scripts: {
        lint: 'eslint . --fix',
        format: undefined
    }
};
//# sourceMappingURL=changes.js.map