"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@company-starter/utils");
const changes_1 = require("./changes");
const parentFolder = utils_1.getParentFolder();
if (parentFolder !== process.env.PWD) {
    utils_1.update('package.json', changes_1.packageJsonChanges);
    utils_1.copy(__dirname, '.editorconfig');
    utils_1.copy(__dirname, 'LICENSE');
}
//# sourceMappingURL=postinstall.js.map