"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function download(url, filename) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!url || !filename) {
            throw new Error("url and filename are required");
        }
        yield fetch(url, {
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
            },
        })
            .then((response) => response.blob())
            .then((blob) => URL.createObjectURL(blob))
            .then((uril) => {
            let link = document.createElement("a");
            link.href = uril;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });
}
exports.default = download;
