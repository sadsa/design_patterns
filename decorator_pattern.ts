
abstract class MartialArtist {
    public firstName: string;
    public lastName: string;
    public style: string;

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }

    get description(): string {
        return `${this.fullName} - ${this.style}`
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
    abstract get description(): string;
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
    get dps(): number {
        let totalDps: number = 0;
        for (let i = 0; i <= this.weapons.length; i++) {
            totalDps += this.weapons[i].damagePerSecond;
        }
        return totalDps;
    };
    get description(): string {
        return this.description + ', with weapons...Look out!'
    }
}

// Decoration

let jackieChan = new KungFuMaster();
jackieChan = new WeaponsMaster(jackieChan); // decorated

