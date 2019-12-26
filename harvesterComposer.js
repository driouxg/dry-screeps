let HarvesterCreator = require("./harvesterCreator");
let EnergyValidator = require("./energyValidator");
let GuidGenerator = require("./guidGenerator");
let MovementEnum = require("movementEnum");

const unitCreator = () => {
	let harvesterCreator = new HarvesterCreator(
		new GuidGenerator(),
		MovementEnum
	);
	let energyValidator = new EnergyValidator(harvesterCreator);

	return energyValidator;
};

module.exports = {
	unitCreator
};
