"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    Product.prototype.displayDetails = function () {
        return "".concat(this.sku, " ").concat(this.name, " /\n      ").concat(this.price);
    };
    Product.prototype.getPriceWithTax = function (tax) {
        //a method that calculates the final price of the product with tax.
        return this.price + tax;
    };
    return Product;
}());
exports.Product = Product;
