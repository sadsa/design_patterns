var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MartialArtist = /** @class */ (function () {
    function MartialArtist() {
    }
    MartialArtist.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    MartialArtist.prototype.getDescription = function () {
        return this.getFullName() + " - " + this.style;
    };
    return MartialArtist;
}());
// Concrete Classes
var Grappler = /** @class */ (function (_super) {
    __extends(Grappler, _super);
    function Grappler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.firstName = 'Josh';
        _this.lastName = 'Biddick';
        _this.style = 'Jiu Jitsu';
        return _this;
    }
    return Grappler;
}(MartialArtist));
var KungFuMaster = /** @class */ (function (_super) {
    __extends(KungFuMaster, _super);
    function KungFuMaster() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.firstName = 'Josh';
        _this.lastName = 'Biddick';
        _this.style = 'Jiu Jitsu';
        return _this;
    }
    return KungFuMaster;
}(MartialArtist));
// Decorators
var MartialArtistOptions = /** @class */ (function (_super) {
    __extends(MartialArtistOptions, _super);
    function MartialArtistOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MartialArtistOptions;
}(MartialArtist));
var Weapon = /** @class */ (function () {
    function Weapon() {
    }
    return Weapon;
}());
var WeaponsMaster = /** @class */ (function (_super) {
    __extends(WeaponsMaster, _super);
    function WeaponsMaster(martialArtist) {
        var _this = _super.call(this) || this;
        _this.martialArtist = martialArtist;
        return _this;
    }
    WeaponsMaster.prototype.getDps = function () {
        var totalDps = 0;
        for (var i = 0; i <= this.weapons.length; i++) {
            totalDps += this.weapons[i].damagePerSecond;
        }
        return totalDps;
    };
    ;
    WeaponsMaster.prototype.getDescription = function () {
        return this.martialArtist.getDescription() + ', now with weapons...Look out!';
    };
    return WeaponsMaster;
}(MartialArtistOptions));
// Decoration
var jackieChan = new KungFuMaster();
console.log(jackieChan.getDescription());
jackieChan = new WeaponsMaster(jackieChan); // decorated
console.log(jackieChan.getDescription());
