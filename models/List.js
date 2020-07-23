const mongoose = require('mongoose');

const { Schema } = mongoose;

const List = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	list: [
		{
			mail: {
				type: String,
			},
			firstName: {
				type: String
			},
			lastName: {
				type: String
			}
		}
	]
});

List.methods.queryList = function(query) {
	const searchItem = new RegExp(query.trim(), 'gi');
	const list = this.list.filter((item) => {
		if (item.lastName.match(searchItem) || item.firstName.match(searchItem) || item.mail.match(searchItem)) {
			return item;
		}
	});
	return list;
};

List.methods.addItem = function(payload) {
	const { firstName, lastName, email } = payload;
	const list = [ ...this.list ];
	list.unshift({ firstName, lastName, mail: email });
	this.list = [ ...list ];
	return this.save();
};

List.methods.removeItem = function(id) {
	const updatedList = this.list.filter((item) => item._id != id);
	this.list = updatedList;
	return this.save();
};

List.methods.updateItem = function(payload) {
	const { firstName, lastName, email, id } = payload;
	const updatedList = this.list.map(
		(item) => (item._id == id ? (item = { ...item.toObject(), firstName, lastName, mail: email }) : item)
	);
	this.list = updatedList;
	debugger;

	return this.save();
};

module.exports = mongoose.model('List', List);
