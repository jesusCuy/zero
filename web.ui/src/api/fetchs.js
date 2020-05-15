const root = "https://covid-zero.azurewebsites.net/api"; 
// const root = "http://localhost:7071/api"; 

/**
 * Contains the information for create all the API calls
 * Estructure:
 * {
 *     name: "Name of the method",
 *     build: (params, options) => {
 *         // This method process the params and the option to build the required enpoint and the request options
 *         return {
 *             options: {}
 *             endpoint: ""
 *         }
 * 	   }
 * }
 */

const fetchs = [
	{
		name: "getDashboardDetails",
		build: () => ({
			options: {
				method: "GET",
				headers: {
					'Content-Type': 'application/json'
				}
			},
			endpoint: `${root}/MaskLogFunction?sector=1`
		})
	},
	{
		name: "sendMaskLog",
		build: (model) => ({
			options: {
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(model)
			},
			endpoint: `${root}/MaskLogFunction?sector=1`
		})
	},
];

export default fetchs;