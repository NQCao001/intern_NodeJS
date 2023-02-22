"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const studentRouter_1 = require("./studentRouter");
const adminRouter_1 = require("./adminRouter");
exports.router = (0, express_1.default)();
exports.router.use('/student', studentRouter_1.studentRouter);
exports.router.use('/admin', adminRouter_1.adminRouter);
//# sourceMappingURL=router.js.map