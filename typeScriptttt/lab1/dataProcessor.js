"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processData = processData;
const lodash_1 = __importDefault(require("lodash"));
function processData(data) {
    const result = data.map((item) => {
        var _a, _b, _c, _d;
        if (!item.id) {
            throw new Error("Data item is missing an id");
        }
        return {
            id: item.id,
            name: (_a = item.name) !== null && _a !== void 0 ? _a : "Unknown",
            price: (_b = item.price) !== null && _b !== void 0 ? _b : 0,
            discountedPrice: (_d = (_c = item.discountedPrice) !== null && _c !== void 0 ? _c : item.price) !== null && _d !== void 0 ? _d : 0,
        };
    });
    return lodash_1.default.orderBy(result, ["discountedPrice"], ["asc"]);
}
