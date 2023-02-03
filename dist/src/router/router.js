"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const studentRouter_1 = require("./studentRouter");
exports.router = (0, express_1.default)();
exports.router.use('/student', studentRouter_1.studentRouter);
//# sourceMappingURL=router.js.map