let request = function(param) {
	return fetch(param.url, {
			credentials: 'include',
			method: param.method ? param.method : 'POST',
			body: JSON.stringify(param.data || {}),
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"version": "1.0.0"
			}
		}).then((response) => {
			//			return response.json();
			if(response.ok) {
				return response.json()
			} else {
				// 服务器异常
				throw Error('服务器异常')
			}
		})
		.then(data => {
			return data.body;
		}).catch(error => console.error('Error:', error));
}
export default request;