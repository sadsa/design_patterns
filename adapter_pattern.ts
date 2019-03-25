/**
 * TOFO: Redo with EnemyRobot example: https://www.youtube.com/watch?v=qG286LQM6BU
 */

interface EnemyVehicle {
    lockOnTarget(targetName: string): void;
    driveForward(): void;
    shootMissiles(): void;
}

interface EnemyRobot {
    locateObjective(objectiveName: string): void;
    walkStraightAhead(): void;
    smashWithHands(): void;
}

class DestroyerTank implements EnemyVehicle {
    private _turrets: any[];
    private _passengerCapacity: number;
    private _maxMoveDistance: number = 4;
    private _damage: number = 20;

    lockOnTarget(targetName: string): void {
        console.log(`Lock on Target: ${targetName}`);
    }
    driveForward(): void {
        console.log(`Driving forward ${this._maxMoveDistance} spaces`);
    }
    shootMissiles(): void {
        console.log(`Firing Missiles!!! ${this._damage} damage dealt`);
    }
}

class SuperRobot implements EnemyRobot {
    private _maxMoveDistance: number = 2;
    private _damage: number = 10;

    locateObjective(objectiveName: string): void {
        console.log(`Objective identified as ${objectiveName}`);
    }
    walkStraightAhead(): void {
        console.log(`Moving forward ${this._maxMoveDistance} spaces`);
    }
    smashWithHands(): void {
        console.log(`Hulk Smash!!! ${this._damage} damage dealt`);
    }

}

class RobotToVehicleAdapter implements EnemyVehicle {
    private _robot: EnemyRobot;

    constructor(robot: EnemyRobot) {
        this._robot = robot;
    }

    lockOnTarget(targetName: string): void {
        this._robot.locateObjective(targetName);
    }
    driveForward(): void {
        this._robot.walkStraightAhead();
    }
    shootMissiles(): void {
        this._robot.smashWithHands();
    }

}

const terminator = new SuperRobot();
const terminatorTank = new RobotToVehicleAdapter(terminator);
terminatorTank.lockOnTarget('Sarah Connor');
terminatorTank.driveForward();
terminatorTank.shootMissiles();  
