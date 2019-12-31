/**
 * Builder Pattern
 *
 * Problem: When creating complex "objects" with many moving parts
 * or "objects" that require a step-by-step initialisation, many
 * developers choose to initialise the "object" by placing many
 * parameters in the Class' constructor or by extending a superclass
 * with specific features. i.e. House -> HouseWithGardenAndMailbox.
 * This is obviously unsustainable as the amount of possible variations
 * could be enormous.
 *
 * Solution: Create "Builder" objects that are resposible for product
 * creation and a simple interface that all "Builders" follow, outlining
 * the steps invloved to build such product. To make matters simpler,
 * we can assign a "Director", who's job is to accept a "Builder" and
 * delegate the construction to the builder.
 */

/** Materials */
interface ISteelPlate {}
interface INanoTube {}
interface IElectricalWire {}
interface IOxygenTank {}

/** Product Interface */
interface ITechnologyModule {}

/** Products */
class JetPackModule implements ITechnologyModule {}
class LifeSupportModule implements ITechnologyModule {}

interface IModuleBuilder<TProduct> {
  reset(): void;
  craftTechnology(): TProduct;
}

class JetPackModuleBuilder implements IModuleBuilder<JetPackModule> {
  private product: JetPackModule;

  private _refineRawMaterials(): void {};
  private _weldMetalPlating(): void {};
  private _fuelThrusters(): void {};
  
  reset(): void {
    this.product = new JetPackModule();
  };
  
  craftTechnology(): JetPackModule {
    this._refineRawMaterials();
    this._weldMetalPlating();
    this._fuelThrusters();
    console.log("JetPack Module Constructed");
    return this.product;
  }
}

class LifeSupportModuleBuilder implements IModuleBuilder<LifeSupportModule> {
  private product: LifeSupportModule;

  private _decompressOxygen(): void {};
  private _setInterface(): void {};
  private _connectToNetwork(): void {};
  
  reset(): void {
    this.product = new JetPackModule();
  };
  
  craftTechnology(): LifeSupportModule {
    this._decompressOxygen();
    this._setInterface();
    this._connectToNetwork();
    console.log("Life Support Module Constructed");
    return this.product;
  }
}

class TechnologyModuleDirector {
  constructJetPackModule(builder: IModuleBuilder<JetPackModule>): JetPackModule {
    return builder.craftTechnology();
  }
  constructLifeSupportModule(builder: IModuleBuilder<LifeSupportModule>): LifeSupportModule {
    return builder.craftTechnology();
  }
}

function client() {
  const director = new TechnologyModuleDirector();
  const jetpackBuilder = new JetPackModuleBuilder();
  const lifeSupportBuilder = new LifeSupportModuleBuilder();
  const jetpack = director.constructJetPackModule(jetpackBuilder);
  const lifeSupportModule = director.constructLifeSupportModule(lifeSupportBuilder);
  console.log(jetpack, lifeSupportModule);
}

client()