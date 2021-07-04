"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentValidation = void 0;
var joi_1 = require("joi");
exports.commentValidation = {
    my_comment: joi_1.string(),
    created_by: joi_1.string(),
};
