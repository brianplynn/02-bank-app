export default (state, action) => {
	console.log(action);
	switch (action.type) {
		case "WITHDRAW_MONEY":
			return {
				...state,
				totalAmount: Number(state.totalAmount) - Number(action.payload.amount)
			}
		default:
			return state;
	}
}