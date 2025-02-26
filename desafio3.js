class hero {
  constructor(nameHero, ageHero, typeHero){
    this.nameHero = nameHero
    this.ageHero = ageHero
    this.typeHero = typeHero
   
  }
  action() {
    let attack = "";
if(this.typeHero === "espadachin"){
  attack = "espada";
  }
else if(this.typeHero === "mago"){
  attack = "magia";
  } 
else if (this.typeHero === "monge"){
  attack = "artes marciais";
  }
else if (this.typeHero === "ninja"){
  attack = "shuriken";
  }
console.log(`O ${this.typeHero} atacou usando ${attack}`)
  }
}
  
let dadosHero = new hero ("Battosai", 25, "espadachin");

dadosHero.action();