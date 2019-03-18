
abstract class MartialArtist {
    public firstName: string;
    public lastName: string;
    public style: string;

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }

    getDescription(): string {
        return `${this.getFullName()} - ${this.style}`
    }
}

// Concrete Classes

class Grappler extends MartialArtist {
    public firstName = 'Josh';
    public lastName = 'Biddick';
    public style = 'Jiu Jitsu';
}

class KungFuMaster extends MartialArtist {
    public firstName = 'Josh';
    public lastName = 'Biddick';
    public style = 'Jiu Jitsu';
}

// Decorators

abstract class MartialArtistOptions extends MartialArtist {
    martialArtist: MartialArtist;
    abstract getDescription(): string;
}

class Weapon {
    public name: string;
    public damagePerSecond: number;
}

class WeaponsMaster extends MartialArtistOptions {
    martialArtist: MartialArtist;
    weapons: Weapon[];
    constructor(martialArtist: MartialArtist) {
        super();
        this.martialArtist = martialArtist;
    }
    getDps(): number {
        let totalDps: number = 0;
        for (let i = 0; i <= this.weapons.length; i++) {
            totalDps += this.weapons[i].damagePerSecond;
        }
        return totalDps;
    };
    getDescription(): string {
        return this.martialArtist.getDescription() + ', now with weapons...Look out!'
    }
}

// Decoration

let jackieChan = new KungFuMaster();
console.log(jackieChan.getDescription());
jackieChan = new WeaponsMaster(jackieChan); // decorated
console.log(jackieChan.getDescription());

