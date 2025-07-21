"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate_discount = void 0;
var calculate_discount = function (price, disc_prize) {
    if (!disc_prize)
        return 0;
    return (price * disc_prize) / 100;
};
exports.calculate_discount = calculate_discount;
