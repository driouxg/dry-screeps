module.exports = class EnergyValidator {
	constructor(commandHandler) {
		this.commandHandler = commandHandler;
	}

	execute(command) {
		if (command.room.energyAvailable < 300) {
			console.log("The energy level must be higher than 300!");
			return;
		}

		this.commandHandler.execute(command);
	}
};
