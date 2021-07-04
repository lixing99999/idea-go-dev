"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectValidation = void 0;
var joi_1 = require("joi");
exports.projectValidation = {
    name: joi_1.string(),
    created_by: joi_1.string(),
};
