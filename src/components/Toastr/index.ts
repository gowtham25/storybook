import { connect } from "react-redux";
import Toastr from "./Toastr";
import { addToast, removeToast } from "../../reducer/reducer";

const reduxConnector = connect(
	(state: any, props: any) => {
		return {
			toastlist: state.toastlist
		};
	},
	{
		addToast,
		removeToast
	}
);

export default reduxConnector(Toastr);
