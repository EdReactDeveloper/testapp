import axios from 'axios'; 

const baseURL = '/api/list/'
const instance = axios.create({
		headers: {
			'Content-Type': 'application/json'
    }
})


export const getlistApi = async(query) => {
	console.log(query)
  const result = await axios.get(`${baseURL}?query=${query}`)
  return result.data
}

export const addListItemApi = async (payload) => {
	const body = JSON.stringify(payload);
	const result = await instance.post(`${baseURL}add`, body);
	return result.data;
};

export const removeListItemApi = async (id) => {
	const result = await instance.post(`${baseURL}remove/${id}`);
	return result.data;
}

export const updateItemApi = async (payload) => {
	const body = JSON.stringify(payload);
	const result = await instance.post(`${baseURL}update/`, body);
	return result.data;
}


