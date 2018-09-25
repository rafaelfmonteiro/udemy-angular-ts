import {Spacecraft, Cargocointeiners} from './base-ships'

export class MilleniumFalcon extends Spacecraft implements Cargocointeiners {

 cargoCointeiners : number
  constructor(){
    super('hyperdrive')
    this.cargoCointeiners = 4
  }

  jumpIntoHyperSpace(){
    var math = Math.random();
    console.log(`Chance : ${math}`)
    if (math >= 0.5){
      super.jumpIntoHyperSpace();
    } else {
      console.log('Falha ao entrar no hyper espaço')
    }
  }
}
