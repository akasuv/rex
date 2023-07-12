"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
}
exports.default = copyToClipboard;
