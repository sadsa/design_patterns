/**
 * Abstract Factory Pattern
 * 
 * Problem: When creating multiple real-world "objects" 
 * that share similar traits and/or functions and may
 * belong to a similar lineage or family. The creation of
 * such objects produces copy/pasted code and or is 
 * unique to each and every "object". i.e. They don't share
 * any common set of regulations (a.k.a interface).
 * 
 * Solution: Build Factory classes that inherit from a common
 * abstract interface, which enforces how a factory should
 * operate and what types of "objects" it deals with.
 * Each "object" also complies to an interface that describes
 * it's family. e.g. Madarin extends ICitrusFruit.  
 */
interface IFruitFactory {
  createFruit(): IFruit;
}

interface IFruit {
  geneology: string;
  name: string;
  phLevel: number
  releaseJuice(): void;
}

class Mandarin implements IFruit {
  geneology: string;  
  name: string = "Mandarin";
  phLevel: number;

  releaseJuice(): void {
    console.log(`${this.name} juice being released!`);
  }
}
class Apple implements IFruit {
  geneology: string;  
  name: string = "Apple";
  phLevel: number;

  releaseJuice(): void {
    console.log(`${this.name} juice being released!`);
  }
}

class AppleFactory implements IFruitFactory {
  createFruit(): IFruit {
    const apple: IFruit = new Apple();
    console.log(apple.name + " created!");
    return apple;
  }

}

class MandarinFactory implements IFruitFactory {
  createFruit(): IFruit {
    const mandarin: IFruit = new Mandarin();
    console.log(mandarin.name + " created!");
    return mandarin;
  }
}


function main() {
  const appleFactory: IFruitFactory = new AppleFactory(); 
  const mandarinFactory: IFruitFactory = new MandarinFactory(); 
  const apple: IFruit = appleFactory.createFruit();
  const mandarin: IFruit = mandarinFactory.createFruit();
  apple.releaseJuice();
  mandarin.releaseJuice();
}

main();