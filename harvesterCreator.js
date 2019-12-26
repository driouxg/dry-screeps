module.exports = class HarvesterCreator {
	constructor(guidGenerator, movementEnum) {
		if (guidGenerator === undefined) {
			throw new Error("guidGenerator is undefined.");
		}
		if (movementEnum === undefined) {
			throw new Error("movementEnum is undefined.");
		}

		this.guidGenerator = guidGenerator;
		this.movementEnum = movementEnum;
	}

	execute() {
		let spawns = Game.spawns;
		for (let name in spawns) {
			let spawn = Game.spawns[name];

			console.log(
				`Creating harvester at spawn '${JSON.stringify(spawn)}'`
			);

			let creepId = this.guidGenerator.generateGuid();

			console.log(
				"The HARVESTER_MOVEMENT is: " +
					this.movementEnum.HARVESTER_MOVEMENT
			);

			// const memory = {};

			// console.log("HARVESTER_MOVEMENT: " + JSON.stringify(memory));

			spawn.spawnCreep([WORK, CARRY, MOVE], creepId, {
				memory: {
					role: this.movementEnum.HARVESTER_MOVEMENT
				}
			});
		}
	}
};
