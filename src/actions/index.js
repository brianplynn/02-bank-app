export const setDollars = (amount) => {
	return {
		type: "WITHDRAW_MONEY",
		payload: {
			amount: amount
		}
	}
}