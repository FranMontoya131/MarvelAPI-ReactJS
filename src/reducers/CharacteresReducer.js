const initialState = [{
	key: '',
	name: '',
	description: ''
}];

export default (state = initialState, action) => {
	switch (action.type) {
	  case 'SET_CHARACTERES':
		return action.payload;
  
	  default:
		return state;
	}
};