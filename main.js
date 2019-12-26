const { unitCreator } = require("harvesterComposer");
const { unitMovement } = require("movementComposer");

module.exports.loop = () => {
	// Game.creeps["e52272e6-d98d-4baa-be8a-f7aab109b001"].role =
	// 	"HARVESTER_MOVEMENT";
	// console.log(
	// 	"Hello: " +
	// 		JSON.stringify(Game.creeps["e52272e6-d98d-4baa-be8a-f7aab109b001"])
	// );

	// Move existing units
	for (let name in Game.creeps) {
		let creep = Game.creeps[name];

		// Game.creeps[name].role = "HARVESTER_MOVEMENT";

		unitMovement().execute(creep);
	}

	// Create new units
	for (let spawn in Game.spawns) {
		unitCreator().execute(Game.spawns[spawn]);
	}

	// Infrastructure
};
