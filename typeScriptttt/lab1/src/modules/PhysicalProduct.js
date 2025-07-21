"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalProduct = void 0;
var product_1 = require("../modules/product");
var PhysicalProduct = /** @class */ (function (_super) {
    __extends(PhysicalProduct, _super);
    function PhysicalProduct(sku, name, price, weight) {
        var _this = _super.call(this, sku, name, price) || this;
        _this.weight = weight;
        return _this;
    }
    PhysicalProduct.prototype.getPriceWithTax = function () {
        //a method that calculates the final price of the product with tax.
        var taxrate = 0.1;
        return this.price + taxrate;
    };
    Object.defineProperty(PhysicalProduct.prototype, "formattedweight", {
        get: function () {
            return "".concat(this.weight.toFixed(1), " kg");
        },
        enumerable: false,
        configurable: true
    });
    // discount
    PhysicalProduct.prototype.applyDiscount = function (dsperce) {
        var discount = (this.price * dsperce) / 100;
        this.price -= discount;
        return this.price;
    };
    // Bulk Discounts
    PhysicalProduct.prototype.applyBulkDiscount = function (priceThreshold) {
        var p = " ";
        var weightThreshold = 100;
        if (this.price >= priceThreshold || this.weight >= weightThreshold) {
            p = "".concat(this.applyDiscount(30)); // apply 30% discount
        }
        else {
            p = "".concat(this.price, " Discounts are avialable over 100 kg");
        }
        return p;
    };
    return PhysicalProduct;
}(product_1.Product));
exports.PhysicalProduct = PhysicalProduct;
