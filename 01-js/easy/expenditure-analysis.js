/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categorymap = {};

  for(const ind of transactions){
    const category = ind.category;
    const price = ind.price;

    if(!categorymap[category]){
      categorymap[category]=0;
    }
    categorymap[category]+=price;
  }
  return Object.entries(categorymap).map(([category,price])=>({
    category,
    totalSpent,
  }));
}

module.exports = calculateTotalSpentByCategory;
