let HarvesterMovement = require("./harvesterMovement");
let UpgraderMovement = require("./upgraderMovement");
let MovementEnums = require("./movementEnum");
let UnitMovement = require("./unitMovement");

const unitMovementDictionary = () => {
	const { HARVESTER_MOVEMENT, UPGRADER_MOVEMENT } = MovementEnums;

	let movementDictionary = {};
	movementDictionary[HARVESTER_MOVEMENT] = new HarvesterMovement();
	movementDictionary[UPGRADER_MOVEMENT] = new UpgraderMovement();

	return movementDictionary;
};

const unitMovement = () => {
	return new UnitMovement(unitMovementDictionary());
};

module.exports = {
	unitMovement
};
