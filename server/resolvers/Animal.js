const Animal = {
	category: (parent, args, { categories }) => {
		let result = categories.find(category => {
			return category.id === parent.category;
		});
		return result;
	},
};

module.exports = Animal;
