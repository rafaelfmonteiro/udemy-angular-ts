"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var MilleniumFalcon = /** @class */ (function (_super) {
    __extends(MilleniumFalcon, _super);
    function MilleniumFalcon() {
        var _this = _super.call(this, 'hyperdrive') || this;
        _this.cargoCointeiners = 4;
        return _this;
    }
    MilleniumFalcon.prototype.jumpIntoHyperSpace = function () {
        var math = Math.random();
        console.log("Chance : " + math);
        if (math >= 0.5) {
            _super.prototype.jumpIntoHyperSpace.call(this);
        }
        else {
            console.log('Falha ao entrar no hyper espaço');
        }
    };
    return MilleniumFalcon;
}(base_ships_1.Spacecraft));
exports.MilleniumFalcon = MilleniumFalcon;
