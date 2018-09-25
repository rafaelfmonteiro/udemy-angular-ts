//npm init -f
//npm install --save lodash
//npm install --save-dev @types/lodash

import {Spacecraft, Cargocointeiners} from './base-ships'
import {MilleniumFalcon} from './startfighters'
import * as _ from 'lodash' // _ padrao para usar o lodas asssim como $ é para jquery

console.log(_.pad("Typescript Examples",40,"="))
let ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperSpace();



let falcon = new MilleniumFalcon()
falcon.jumpIntoHyperSpace()

let goodForTheJob = (aa: Cargocointeiners) => aa.cargoCointeiners > 2
console.log(`Boa para carga ${goodForTheJob (falcon) ? 'YES': 'NO'}`)
