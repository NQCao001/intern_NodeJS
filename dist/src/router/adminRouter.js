"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
const express_1 = __importDefault(require("express"));
const adminController_1 = __importDefault(require("../controller/adminController"));
exports.adminRouter = (0, express_1.default)();
exports.adminRouter.post('/login', adminController_1.default.login);
//# sourceMappingURL=adminRouter.js.map