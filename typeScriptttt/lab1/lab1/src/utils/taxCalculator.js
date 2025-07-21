"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taxCalculator = void 0;
// a function calculateTax() that accepts a Product object and returns the price including tax
var taxCalculator = /** @class */ (function () {
    function taxCalculator() {
    }
    taxCalculator.prototype.calculateTax = function (amount) {
        return amount * 0.1;
    };
    return taxCalculator;
}());
exports.taxCalculator = taxCalculator;
