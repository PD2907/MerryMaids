import ACTION_TYPES from '../../actions/actionsType';

const INITIAL_STATE = {
	userName: '',

	signInResponse : ''
}

export default (state = INITIAL_STATE, action) => {

	switch (action.type) {

		case ACTION_TYPES.LOGIN_USER_RES:
		return { ...state, signInResponse: action.payload }

		default:
			return state;
	}

};
