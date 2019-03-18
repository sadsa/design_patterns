// Concrete Classes
var SantasWorkshop = /** @class */ (function () {
    function SantasWorkshop() {
        this._orders = [];
        this._observers = [];
    }
    SantasWorkshop.prototype.processNewOrder = function (order) {
        console.log("\nWorkshop: New order for..." + order.recipientName + "!!!");
        this._orders.push(order);
        this.notifyObservers();
    };
    SantasWorkshop.prototype.registerObserver = function (observer) {
        this._observers.push(observer);
    };
    SantasWorkshop.prototype.removeObserver = function (observer) {
        var index = this._observers.indexOf(observer);
        this._observers.splice(index, 1);
    };
    SantasWorkshop.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this._observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this._orders[this._orders.length - 1]);
        }
    };
    return SantasWorkshop;
}());
var ManagerElf = /** @class */ (function () {
    function ManagerElf(santasWorkshop) {
        this._subject = santasWorkshop;
        santasWorkshop.registerObserver(this);
    }
    ManagerElf.prototype.update = function () {
        console.log("\nManager Elf: We got a new order! GET TO WORK!!!");
    };
    return ManagerElf;
}());
var WorkerElf = /** @class */ (function () {
    function WorkerElf(santasWorkshop) {
        this._subject = santasWorkshop;
        santasWorkshop.registerObserver(this);
    }
    WorkerElf.prototype.update = function () {
        console.log("\nWorker Elf: Oh goody, more presents to make! New order for...\n");
    };
    return WorkerElf;
}());
var workshop = new SantasWorkshop();
var santasLittleManager = new ManagerElf(workshop);
var santasLittleHelper = new WorkerElf(workshop);
workshop.processNewOrder({
    idNumber: 1,
    recipientName: "Timmy O`Tool",
    toy: { name: 'piggybank' }
});
