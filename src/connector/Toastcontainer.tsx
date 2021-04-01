import React from "react";
import { Provider } from "react-redux";
import Toastr from "../components/Toastr";
import store from "../store/store";

const ToastrContainer: React.FC<any> = (props) => {
	return (
		<Provider store={store}>
			<Toastr {...props} />
		</Provider>
	);
};

export default ToastrContainer;
