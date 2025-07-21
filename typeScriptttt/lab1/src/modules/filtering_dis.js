"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortProducts = sortProducts;
function sortProducts(products, sortBy) {
    return __spreadArray([], products, true).sort(function (a, b) {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        }
        else {
            return a.price - b.price;
        }
    });
}
