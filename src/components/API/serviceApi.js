import axios from 'axios'

export const ServiceApi = {
	async getPosts() {
		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
			return response.data
		} catch (e) {
			console.log(e)
		}

	}
}