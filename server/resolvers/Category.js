const Category = {
	animals: (parent, args, { animals }) => {
		let result = animals.filter(animal => {
			return animal.category === parent.id;
		});
		return result;
	},
};

module.exports = Category;
