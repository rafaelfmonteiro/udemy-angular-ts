"use strict";
//npm init -f
//npm install --save lodash
//npm install --save-dev @types/lodash
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var startfighters_1 = require("./startfighters");
var _ = require("lodash"); // _ padrao para usar o lodas asssim como $ é para jquery
console.log(_.pad("Typescript Examples", 40, "="));
var ship = new base_ships_1.Spacecraft('hyperdrive');
ship.jumpIntoHyperSpace();
var falcon = new startfighters_1.MilleniumFalcon();
falcon.jumpIntoHyperSpace();
var goodForTheJob = function (aa) { return aa.cargoCointeiners > 2; };
console.log("Boa para carga " + (goodForTheJob(falcon) ? 'YES' : 'NO'));
