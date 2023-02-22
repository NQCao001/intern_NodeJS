"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRouter = void 0;
const express_1 = __importDefault(require("express"));
const studentController_1 = __importDefault(require("../controller/studentController"));
exports.studentRouter = (0, express_1.default)();
exports.studentRouter.get('/', studentController_1.default.getAll);
exports.studentRouter.get('/:id', studentController_1.default.findById);
exports.studentRouter.post('/', studentController_1.default.findByName);
exports.studentRouter.post('/', studentController_1.default.createStudent);
exports.studentRouter.put('/:id', studentController_1.default.editStudent);
exports.studentRouter.delete('/:id', studentController_1.default.deleteStudent);
//# sourceMappingURL=studentRouter.js.map