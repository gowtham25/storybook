import React from "react";
import styled from "styled-components";
import ToastBody, { IToastlistProps } from "./ToastBody";

const ToastrContainer = styled.div`
	&.notification-container {
		font-family: Nunito;
		line-height: 19px;
		font-size: 14px;
		box-sizing: border-box;
		position: fixed;
		z-index: 999999;
		border-radius: 8px;
		&.top-right {
			top: 12px;
			right: 12px;
			transition: transform 1s ease-in-out;
			animation: toast-in-right 1s;
		}
		&.bottom-right {
			bottom: 12px;
			right: 12px;
			transition: transform 1s ease-in-out;
			animation: toast-in-right 1s;
		}
		&.top-left {
			top: 12px;
			left: 12px;
			transition: transform 1s ease-in;
			animation: toast-in-left 1s;
		}
		&.bottom-left {
			bottom: 12px;
			left: 12px;
			transition: transform 1s ease-in;
			animation: toast-in-left 1s;
		}
		button {
			font-size: 12px;
			font-weight: 100;
			display: flex;
			color: #fff;
			outline: none;
			border: none;
			text-shadow: 0 1px 0 #fff;
			opacity: 1;
			line-height: 1;
			padding: 0;
			cursor: pointer;
			background: 0 0;
			border: 0;
		}
		.notification {
			display: flex;
			flex-direction: row;
			background: #fff;
			transition: 0.3s ease;
			position: relative;
			pointer-events: auto;
			overflow: hidden;
			padding: 30px;
			margin-bottom: 15px;
			width: 300px;
			border-radius: 3px 3px 3px 3px;
			box-shadow: 0 0 10px #999;
			color: #000;
			opacity: 1;
			background-position: 15px;
			background-repeat: no-repeat;
			&.toastr-success {
				background: #1a846a;
			}
			&.toastr-warning {
				background: #fe8947;
			}
			&.toastr-info {
				background: #1868fb;
			}
			&.toastr-error {
				background: #d1345b;
			}
			&.toastr-unknown {
				background: #000;
			}
			&.toast {
				color: #fff;
				padding: 16px;
				border-radius: 8px;
			}
			.cancelButton {
				font-family: "Avenir-Heavy";
				position: absolute;
				font-size: 20px;
				top: 1px;
				right: 4px;
				transform: rotate(45deg);
				z-index: 20000;
				color: #ccc;
				transition: 0.2s;
			}
		}
		.notification-title {
			font-weight: 700;
			font-size: 16px;
			text-align: left;
			margin-top: 0;
			margin-bottom: 6px;
			width: 300px;
		}

		.notification-message {
			margin: 0;
			text-align: left;
			margin-left: -1px;
			margin-right: 0.3rem;
		}

		.notification-image {
			float: left;
			margin-right: 15px;
			.notificatio-icon {
				width: 30px;
				height: 30px;
			}
		}
	}
	@keyframes toast-in-right {
		from {
			transform: translateX(100%);
		}
		to {
			transform: translateX(0);
		}
	}

	@keyframes toast-in-left {
		from {
			transform: translateX(-100%);
		}
		to {
			transform: translateX(0);
		}
	}
`;
export interface IToastrProps extends React.HTMLAttributes<HTMLDivElement> {
	toastlist?: IToastlistProps[];
	position?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
	removeToast: (id: number) => void;
}

const Toastr: React.FC<IToastrProps> = ({
	toastlist = [],
	position = "top-right",
	removeToast
}) => {
	return (
		<ToastrContainer className={`notification-container ${position}`}>
			{toastlist.map((toast: IToastlistProps, i: number) => {
				return (
					<ToastBody
						toast={toast}
						key={i}
						position={position}
						deleteToast={removeToast}
					/>
				);
			})}
		</ToastrContainer>
	);
};

export default Toastr;
