import axios from 'axios';

const url = 'http://api.marcel-schmager.com/api/';

export const sendMail = (data) => {
	axios({
		method: 'post',
		body: JSON.stringify(data),
		url: `${url}sendMail`,
		header: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		data
	})
		.then((result) => {
			console.log(result.data.sent);
		})
		.catch((error) => {
			console.log(error.message);
		});
};

export const getPosts = async () => {
	try {
		const { data } = await axios.get(`${url}posts`);
		return data;
	} catch (error) {
		console.log(error);
	}
};
