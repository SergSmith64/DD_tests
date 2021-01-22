const model = [
	{
		id: 0,
		title: `Title text 1`,
		text: `Some text 1`,
		user: {
			id: 0,
			name: `user 1_Bob`,
		},
	}, {
		id: 1,
		title: `Title text 2`,
		text: `Some text 2`,
		user: {
			id: 1,
			name: `user 2_Den`,
		},
	}, {
		id: 2,
		title: `Title text 3`,
		text: `Some text 3`,
		user: {
			id: 0,
			name: `user 1_Bob`,
		},
	}, {
		id: 3,
		title: `Title text 4`,
		text: `Some text 4`,
		user: {
			id: 2,
			name: `user 3_Jon`,
		},
	}, {
		id: 4,
		title: `Title text 5`,
		text: `Some text 5`,
		user: {
			id: 0,
			name: `user 1_Bob`,
		},
	}

];

// debugger;

const myRes = [];

const myMap = new Map();

const myCollection = (arr) => {

	arr.forEach((obj) => {
		const {
			id: messId,
			title,
			text,
			user: {
				id: userId,
				name
			}
		} = obj;

		const myMess = {
			id: messId,
			title,
			text
		};

		if (!myMap.has(obj.user.id)) {
			myMap.set(obj.user.id, { id: userId, name, messages: [myMess] });
			// console.log(myMap);
		} else {
			myMap.get(obj.user.id).messages.push(myMess);
			// console.log(myMap);
		}
	});

	for (let value of myMap.values()) {
		myRes.push(value);
		// console.log("__массив__", myRes);
	}

	return myRes;
};

console.log(myCollection(model));
