import axios from 'axios'

export const ServiceApi = {
	async getPosts(page = 1, limit = 10) {
		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
				params: {
					_limit: limit,
					_page: page
				}
			})
			return response
		} catch (e) {
			console.log(e)
		}

	}
}