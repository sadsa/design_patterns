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
/** Products */
var JetPackModule = (function () {
    function JetPackModule() {
    }
    return JetPackModule;
})();
var LifeSupportModule = (function () {
    function LifeSupportModule() {
    }
    return LifeSupportModule;
})();
var JetPackModuleBuilder = (function () {
    function JetPackModuleBuilder() {
    }
    JetPackModuleBuilder.prototype._refineRawMaterials = function () { };
    ;
    JetPackModuleBuilder.prototype._weldMetalPlating = function () { };
    ;
    JetPackModuleBuilder.prototype._fuelThrusters = function () { };
    ;
    JetPackModuleBuilder.prototype.reset = function () {
        this.product = new JetPackModule();
    };
    ;
    JetPackModuleBuilder.prototype.craftTechnology = function () {
        this._refineRawMaterials();
        this._weldMetalPlating();
        this._fuelThrusters();
        console.log("JetPack Module Constructed");
        return this.product;
    };
    return JetPackModuleBuilder;
})();
var LifeSupportModuleBuilder = (function () {
    function LifeSupportModuleBuilder() {
    }
    LifeSupportModuleBuilder.prototype._decompressOxygen = function () { };
    ;
    LifeSupportModuleBuilder.prototype._setInterface = function () { };
    ;
    LifeSupportModuleBuilder.prototype._connectToNetwork = function () { };
    ;
    LifeSupportModuleBuilder.prototype.reset = function () {
        this.product = new JetPackModule();
    };
    ;
    LifeSupportModuleBuilder.prototype.craftTechnology = function () {
        this._decompressOxygen();
        this._setInterface();
        this._connectToNetwork();
        console.log("Life Support Module Constructed");
        return this.product;
    };
    return LifeSupportModuleBuilder;
})();
var TechnologyModuleDirector = (function () {
    function TechnologyModuleDirector() {
    }
    TechnologyModuleDirector.prototype.constructJetPackModule = function (builder) {
        return builder.craftTechnology();
    };
    TechnologyModuleDirector.prototype.constructLifeSupportModule = function (builder) {
        return builder.craftTechnology();
    };
    return TechnologyModuleDirector;
})();
function client() {
    var director = new TechnologyModuleDirector();
    var jetpackBuilder = new JetPackModuleBuilder();
    var lifeSupportBuilder = new LifeSupportModuleBuilder();
    var jetpack = director.constructJetPackModule(jetpackBuilder);
    var lifeSupportModule = director.constructLifeSupportModule(lifeSupportBuilder);
    console.log(jetpack, lifeSupportModule);
}
client();
