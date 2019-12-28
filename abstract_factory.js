var Mandarin = (function () {
    function Mandarin() {
        this.name = "Mandarin";
    }
    Mandarin.prototype.releaseJuice = function () {
        console.log(this.name + " juice being released!");
    };
    return Mandarin;
})();
var Apple = (function () {
    function Apple() {
        this.name = "Apple";
    }
    Apple.prototype.releaseJuice = function () {
        console.log(this.name + " juice being released!");
    };
    return Apple;
})();
var AppleFactory = (function () {
    function AppleFactory() {
    }
    AppleFactory.prototype.createFruit = function () {
        var apple = new Apple();
        console.log(apple.name + " created!");
        return apple;
    };
    return AppleFactory;
})();
var MandarinFactory = (function () {
    function MandarinFactory() {
    }
    MandarinFactory.prototype.createFruit = function () {
        var mandarin = new Mandarin();
        console.log(mandarin.name + " created!");
        return mandarin;
    };
    return MandarinFactory;
})();
function main() {
    var appleFactory = new AppleFactory();
    var mandarinFactory = new MandarinFactory();
    var apple = appleFactory.createFruit();
    var mandarin = mandarinFactory.createFruit();
    apple.releaseJuice();
    mandarin.releaseJuice();
}
main();
