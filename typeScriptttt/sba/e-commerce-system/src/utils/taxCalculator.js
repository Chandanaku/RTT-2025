"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate_tax = void 0;
var calculate_tax = function (price, category) {
  var taxrate = 0.08;

  return price * taxrate;
};
exports.calculate_tax = calculate_tax;
