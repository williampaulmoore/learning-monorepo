"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
function Button(props) {
    const { label, onClick } = props;
    return ((0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: onClick }, { children: label })));
}
exports.Button = Button;
exports.default = Button;
