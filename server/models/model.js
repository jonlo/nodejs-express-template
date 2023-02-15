
const Model = class Model {
	constructor(data) {
		this.id = data.id;
	}

	getId() {
		return this.id;
	}

}

module.exports = {
	Model,
};
