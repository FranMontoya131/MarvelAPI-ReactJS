import { buildEndpoint, getAuth } from '../config/paths';

const useHandleData = (param) => {

	const fetchFunction = async () => {
		console.log("Entre una ves");
		try {
			const url = (param) ? buildEndpoint(param) : buildEndpoint(null);
			
			const response = await fetch(url, getAuth());
			const data = await response.json();
			
			for (const key in data) {
				if(key === "data"){
					for (const key2 in data["data"]) {
						if(key2 === "results"){
							return data["data"]["results"];
						}
					}
				}	
			}

			// return data;
		} catch (error) {
			console.log("Fallo: ", error);
			return null;
		}
	}

	return fetchFunction;
}

export default useHandleData;