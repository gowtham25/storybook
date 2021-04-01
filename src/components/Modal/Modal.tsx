import React, { useEffect } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
	&.mt_modal_container {
		z-index: 9999;
		position: fixed;
		inset: 0px;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		-webkit-tap-highlight-color: transparent;
	}
`;

export interface IModalProps {
	children?: any;
	hideOnClickEscKey?: boolean;
	hideClickOnOutside?: boolean;
	onRequestClose: () => void;
	open: boolean;
}

const Modal: React.FC<IModalProps> = ({
	children,
	hideOnClickEscKey = true,
	hideClickOnOutside = true,
	onRequestClose,
	open = true
}) => {
	useEffect(() => {
		if (hideOnClickEscKey) {
			const handleKeyUp = ({ keyCode }: { keyCode: number }) => {
				if (keyCode === 27) {
					onRequestClose();
				}
			};
			window.document.addEventListener("keyup", handleKeyUp);
			return () =>
				window.document.removeEventListener("keyup", handleKeyUp);
		}
	}, [hideOnClickEscKey, onRequestClose]);
	return (
		<>
			{open && (
				<ModalContainer
					className="mt_modal_container"
					onClick={(e: any) => {
						hideClickOnOutside &&
							e.target.classList.contains("mt_modal_container") &&
							onRequestClose();
					}}
				>
					{children}
				</ModalContainer>
			)}
		</>
	);
};

export default Modal;
