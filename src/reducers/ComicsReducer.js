const initialState = [{
	key: '',
	number: '',
	name: '',
	description: '',
	format: ''
}];

export default (state = initialState, action) => {
	switch (action.type) {
	  case 'SET_COMICS':
		return action.payload;
  
	  default:
		return state;
	}
};