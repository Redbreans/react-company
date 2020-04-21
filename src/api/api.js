import Request from './../../public/js/request.js'

export default {
	/**	
	 * banner列表	
	 * @param {Object} positionCode 位置编码（针对前端时有效）	
	 * @param {Object} size 条数	
	 * @param {Object} sortField 排序字段	
	 * @param {Object} sortType 排序方式，ASC/DESC	
	 * @param {Object} start 开始位置	
	 */	
	apiOnlineOnlineAdResourcesList(data) {
		return Request({
			url:'/online/onlineAdResources/list',
			data:data,
			method:'POST'
		})
	}
}