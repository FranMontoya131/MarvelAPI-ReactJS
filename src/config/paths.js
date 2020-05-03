import {publicKey, privateKey} from './keys';
import md5 from 'md5';

export const buildEndpoint = (param) => {
	if(param) {
		const base = 'https://gateway.marvel.com/v1/public/';
		const timestamp = 1;
		const hash = md5(`${timestamp}${privateKey}${publicKey}`);
		const url = `${base}${param}?limit=100&apikey=${publicKey}&ts=${timestamp}&hash=${hash}`
	
		return url;
	}else {
		return "No hay parametro";
	}
	
}

export const getAuth = () => ({
	method: 'GET',
	headers: {
	  'content-type': 'application/json',
	},
});
