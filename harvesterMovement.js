module.exports = class HarvesterMovement {
	execute(creep) {
		const roomName = creep.room.name;
		const room = Game.rooms[roomName];

		if (creep.store === undefined || creep.store.getFreeCapacity() > 0) {
			const sources = room.find(FIND_SOURCES);
			if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
				creep.moveTo(sources[0]);
			}
		} else {
			const spawn = Game.rooms[roomName].find(FIND_MY_SPAWNS);

			if (spawn.length === 0) {
				throw new Error(
					`Harvester creep ${JSON.stringify(
						creep
					)} does not have any nearby spawns to offload minerals.`
				);
			}

			if (creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
				creep.moveTo(spawn);
			}
		}
	}
};
