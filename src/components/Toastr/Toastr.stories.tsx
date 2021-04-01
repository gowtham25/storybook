import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { IToastrProps } from "./Toastr";
import Toastr from "./index";
import store from "../../store/store";
import { Provider } from "react-redux";

const ADD_TOAST = "add_toast";

export default {
	title: "Info/Toastr",
	component: Toastr
} as Meta;

const Template: Story<IToastrProps> = (args) => (
	<Provider store={store}>
		<Toastr {...args} />
	</Provider>
);

store.dispatch({
	type: ADD_TOAST,
	payload: {
		id: 1,
		type: "success",
		description:
			"Success alerts could be of this color code and we can add more text.",
		dismissTime: 2000
	}
});
store.dispatch({
	type: ADD_TOAST,
	payload: {
		id: 2,
		type: "info",
		description:
			"Informative alerts could be of this color code and we can add more text.",
		dismissTime: 4000
	}
});

store.dispatch({
	type: ADD_TOAST,
	payload: {
		id: 3,
		type: "warning",
		description:
			"Warning alerts could be of this color code and we can add more text.",
		dismissTime: 6000,
		cancelButtonOnTop: false
	}
});
store.dispatch({
	type: ADD_TOAST,
	payload: {
		id: 4,
		type: "error",
		description:
			"Error alerts could be of this color code and we can add more text.",
		dismissTime: 8000,
		cancelButtonOnTop: false
	}
});
store.dispatch({
	type: ADD_TOAST,
	payload: {
		id: 5,
		description:
			"Unknown alerts could be of this color code and we can add more text.",
		dismissTime: 10000
	}
});

export const TopLeft = Template.bind({});
TopLeft.args = {
	toastlist: store.getState().toastlist,
	position: "top-left"
};

export const TopRight = Template.bind({});
TopRight.args = {
	toastlist: store.getState().toastlist,
	position: "top-right"
};

export const BottomRight = Template.bind({});
BottomRight.args = {
	toastlist: store.getState().toastlist,
	position: "bottom-right"
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
	toastlist: store.getState().toastlist,
	position: "bottom-left"
};
