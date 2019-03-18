interface Toy {
    name: string;
}

interface Order {
    toy: Toy
    idNumber: number;
    recipientName: string;
}

// Subject and Observer

interface Subject {
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
}

interface Observer {
    update(value: Order): void;
}

// Concrete Classes

class SantasWorkshop implements Subject {
    private _orders: Order[] = [];
    private _observers: Observer[] = [];

    public processNewOrder(order: Order) {
        console.log(`\nWorkshop: New order for...${order.recipientName}!!!`);
        this._orders.push(order);
        this.notifyObservers();
    }

    registerObserver(observer: Observer): void {
        this._observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this._observers.indexOf(observer);
        this._observers.splice(index, 1)
    }

    notifyObservers(): void {
        for (let observer of this._observers) {
            observer.update(this._orders[this._orders.length - 1]);
        }
    }
}

class ManagerElf implements Observer {
    private _subject: Subject;

    constructor(santasWorkshop: SantasWorkshop) {
        this._subject = santasWorkshop;
        santasWorkshop.registerObserver(this);
    }

    update(): void {
        console.log("\nManager Elf: We got a new order! GET TO WORK!!!");
    }
}

class WorkerElf implements Observer {
    private _subject: Subject;

    constructor(santasWorkshop: SantasWorkshop) {
        this._subject = santasWorkshop;
        santasWorkshop.registerObserver(this);
    }

    update(): void {
        console.log("\nWorker Elf: Oh goody, more presents to make! New order for...\n");
    }
}

const workshop = new SantasWorkshop();
const santasLittleManager = new ManagerElf(workshop);
const santasLittleHelper = new WorkerElf(workshop);

workshop.processNewOrder({
    idNumber: 1,
    recipientName: "Timmy O`Tool",
    toy: { name: 'piggybank' }
});
