import store from "../../store/store";

const ADD_TOAST = "add_toast";

export const toastrAction = {
	success: function (data: any) {
		store.dispatch({
			type: ADD_TOAST,
			payload: {
				...data,
				id: Math.floor(Math.random() * 90000) + 10000,
				type: "success"
			}
		});
	},
	warning: function (data: any) {
		store.dispatch({
			type: ADD_TOAST,
			payload: {
				...data,
				id: Math.floor(Math.random() * 90000) + 10000,
				type: "warning"
			}
		});
	},
	error: function (data: any) {
		store.dispatch({
			type: ADD_TOAST,
			payload: {
				...data,
				id: Math.floor(Math.random() * 90000) + 10000,
				type: "error"
			}
		});
	},
	info: function (data: any) {
		store.dispatch({
			type: ADD_TOAST,
			payload: {
				...data,
				id: Math.floor(Math.random() * 90000) + 10000,
				type: "info"
			}
		});
	},
	other: function (data: any) {
		store.dispatch({
			type: ADD_TOAST,
			payload: {
				...data,
				id: Math.floor(Math.random() * 90000) + 10000,
				type: "unknown"
			}
		});
	}
};
