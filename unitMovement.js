module.exports = class UnitMovement {
	constructor(unitMovementDictionary) {
		if (unitMovementDictionary === undefined) {
			throw new Error("unitMovementDictionary is undefined.");
		}

		this.unitMovementDictionary = unitMovementDictionary;
	}

	execute(creep) {
		let creepMemory = Memory.creeps[creep.name];
		let unitMovement = this.unitMovementDictionary[creepMemory.role];

		if (!unitMovement) {
			throw new Error(
				`Creep with role '${JSON.stringify(
					creepMemory
				)}' does not have any movement behavior defined.`
			);
		}

		console.log(
			`Moving creep '${JSON.stringify(creep)}'.   ${JSON.stringify(
				unitMovement
			)}`
		);
		unitMovement.execute(creep);
	}
};
