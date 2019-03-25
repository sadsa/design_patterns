/**
 * TOFO: Redo with EnemyRobot example: https://www.youtube.com/watch?v=qG286LQM6BU
 */
var DestroyerTank = /** @class */ (function () {
    function DestroyerTank() {
        this._maxMoveDistance = 4;
        this._damage = 20;
    }
    DestroyerTank.prototype.lockOnTarget = function (targetName) {
        console.log("Lock on Target: " + targetName);
    };
    DestroyerTank.prototype.driveForward = function () {
        console.log("Driving forward " + this._maxMoveDistance + " spaces");
    };
    DestroyerTank.prototype.shootMissiles = function () {
        console.log("Firing Missiles!!! " + this._damage + " damage dealt");
    };
    return DestroyerTank;
}());
var SuperRobot = /** @class */ (function () {
    function SuperRobot() {
        this._maxMoveDistance = 2;
        this._damage = 10;
    }
    SuperRobot.prototype.locateObjective = function (objectiveName) {
        console.log("Objective identified as " + objectiveName);
    };
    SuperRobot.prototype.walkStraightAhead = function () {
        console.log("Moving forward " + this._maxMoveDistance + " spaces");
    };
    SuperRobot.prototype.smashWithHands = function () {
        console.log("Hulk Smash!!! " + this._damage + " damage dealt");
    };
    return SuperRobot;
}());
var RobotToVehicleAdapter = /** @class */ (function () {
    function RobotToVehicleAdapter(robot) {
        this._robot = robot;
    }
    RobotToVehicleAdapter.prototype.lockOnTarget = function (targetName) {
        this._robot.locateObjective(targetName);
    };
    RobotToVehicleAdapter.prototype.driveForward = function () {
        this._robot.walkStraightAhead();
    };
    RobotToVehicleAdapter.prototype.shootMissiles = function () {
        this._robot.smashWithHands();
    };
    return RobotToVehicleAdapter;
}());
var terminator = new SuperRobot();
var terminatorTank = new RobotToVehicleAdapter(terminator);
terminatorTank.lockOnTarget('Sarah Connor');
terminatorTank.driveForward();
terminatorTank.shootMissiles();
