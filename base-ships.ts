class Spacecraft {

  constructor (public propulsor: string){}

  jumpIntoHyperSpace(){
    console.log(`Entrando no hyperspaco com ${this.propulsor}`);
  }
}

interface Cargocointeiners {
   cargoCointeiners: number
}

export {Spacecraft, Cargocointeiners}
