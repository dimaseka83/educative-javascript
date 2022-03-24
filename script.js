class Character{
  constructor(name){
    this.name = name;
    this.health = 100;
  }
}

class Shooter extends Character{
  constructor(name){
    super(name);
  }

  shoot(){
    console.log(`${this.name}: prepare to die!`);
    this.health--;
  }

  getHealth(){
    console.log(this.health);
  }
}

class Caster extends Character{
  constructor(name){
    super(name);
  }

  cast(){
    console.log(`${this.name}: Avada Kedavra`);
    this.health--;
  }

  getHealth(){
    console.log(this.health);
  }
}

Dumbledore = new Caster("Albus Percival Wulfric")
Dumbledore.cast();

DarthVader = new Shooter("Anakin");
DarthVader.shoot();