const root = "https://localhost:5000";

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
				method: "GET"
			},
			endpoint: `${root}/details/`
		})
	}
];

export default fetchs;