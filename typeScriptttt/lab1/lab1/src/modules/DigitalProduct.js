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
exports.DigitalProduct = void 0;
var product_1 = require("../modules/product");
var DigitalProduct = /** @class */ (function (_super) {
    __extends(DigitalProduct, _super);
    function DigitalProduct(sku, name, price, fileSize) {
        var _this = _super.call(this, sku, name, price) || this;
        _this.fileSize = fileSize;
        return _this;
    }
    DigitalProduct.prototype.getPriceWithTax = function (tax) {
        //a method that calculates the final price of the product with tax.
        return this.price + tax;
    };
    Object.defineProperty(DigitalProduct.prototype, "formattedweight", {
        get: function () {
            return "".concat(this.fileSize.toFixed(2), " Mb");
        },
        enumerable: false,
        configurable: true
    });
    return DigitalProduct;
}(product_1.Product));
exports.DigitalProduct = DigitalProduct;
