"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(id, name, price, category, disco_Percentage) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.disco_Percentage = disco_Percentage;
    }
    Product.prototype.display = function () {
        console.log("Product: ".concat(this.name));
        console.log("Price: $".concat(this.price));
        console.log("Category: ".concat(this.category));
        if (this.disco_Percentage) {
            console.log("Discount: ".concat(this.disco_Percentage, "%"));
        }
    };
    Product.prototype.PricewithDiscount = function () {
        if (this.disco_Percentage) {
            return this.price - (this.price * this.disco_Percentage) / 100;
        }
        return this.price;
    };
    return Product;
}());
exports.Product = Product;
