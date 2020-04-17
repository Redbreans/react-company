let request = function(url, data, method) {
	return fetch(url, {
			method: method ? method : 'POST',
			body: JSON.stringify(data || {}),
			headers: {
				"Content-Type": "application/json; charset=utf-8",
				"version": "1.0.0"
			}
		}).then((response) =>{ 
			return response.json();
		})
		.then(data => {
			return data.body;
		}).catch(error => console.error('Error:', error));
}
export default request;