let BASE = 'https://demo2494836.mockable.io/api';

export default {
	getProducts: async (search) => {
		let sentence = {};

		if (search !== '') {
			sentence.search = search;
		}

		let queryString = new URLSearchParams(sentence).toString();

		const res = await fetch(BASE + '/products' + queryString);
		const json = await res.json();
		return json;
	},
};
