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
exports.dif_err = exports.err_app = void 0;
var err_app = /** @class */ (function (_super) {
    __extends(err_app, _super);
    function err_app(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "error occured in app";
        return _this;
    }
    return err_app;
}(Error));
exports.err_app = err_app;
var dif_err = function (err) {
    if (err instanceof err_app) {
        console.error(err.message);
    }
    else {
        console.error(err);
    }
};
exports.dif_err = dif_err;
