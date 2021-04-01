import React, { useEffect } from "react";
import SVG from "react-inlinesvg";
export interface IToastlistProps {
	id: any;
	title?: string;
	type?: string;
	icon?: any;
	description?: string;
	autoClose?: boolean;
	dismissTime?: number;
	cancelButtonOnTop?: boolean;
}

interface IToastBodyProps {
	toast: IToastlistProps;
	position?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
	deleteToast: (id: number) => void;
}
const ToastBody: React.FC<IToastBodyProps> = ({
	toast = {},
	position,
	deleteToast
}) => {
	const {
		icon,
		description = "",
		id = "",
		dismissTime = 5000,
		type = "unknown",
		autoClose = true,
		cancelButtonOnTop = true
	} = toast || {};

	useEffect(() => {
		if (autoClose) {
			setTimeout(() => {
				deleteToast(id);
			}, dismissTime);
		}
		// return () => {
		//     clearInterval(interval);
		// }
	}, [autoClose, deleteToast, dismissTime, id]);

	return (
		<div className={`notification toast ${position} toastr-${type}`}>
			{icon && (
				<div className="notification-image">
					<SVG src={icon} className="notificatio-icon" />
				</div>
			)}

			<div
				style={{
					display: "flex",
					flexGrow: 1,
					flexDirection: "column",
					alignItems: "flex-end"
				}}
			>
				<p className="notification-message">{description}</p>
				{cancelButtonOnTop && (
					<button onClick={() => deleteToast(id)}>ok</button>
				)}
			</div>
			{!cancelButtonOnTop && (
				<button
					className="cancelButton"
					onClick={() => deleteToast(id)}
				>
					+
				</button>
			)}
		</div>
	);
};

export default ToastBody;
