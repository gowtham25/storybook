import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
	font-family: "Avenir-Medium";
	font-weight: 700;
	border: 0;
	border-radius: 8px;
	cursor: pointer;
	display: inline-block;
	line-height: 1;
	outline: none;
	text-transform: ${({ textTransform }) => `${textTransform}`};
	svg {
		width: 12px;
		height: 7px;
		margin-left: 6px;
	}
	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
	&.storybook-button--primary {
		color: #fff;
		background-color: #4066ff;
		&:hover:not(:disabled) {
			background-color: #2947bf;
		}
	}
	&.storybook-button--launch {
		color: #fff;
		background-color: #765dca;
		&:hover:not(:disabled) {
			background-color: #9e83f7;
		}
	}
	&.storybook-button--secondary {
		color: #4066ff;
		background-color: #fff;
		border: 1px solid #4066ff;
		&:hover:not(:disabled) {
			background-color: #ecf0ff;
		}
	}
	&.storybook-button--default {
		color: #000;
		background-color: #f4f6ff;
		&:hover:not(:disabled) {
			background-color: #ecf0ff;
		}
	}
	&.storybook-button--small {
		font-size: 12px;
		padding: 10px 16px;
	}
	&.storybook-button--medium {
		font-size: 14px;
		padding: 11px 20px;
	}
	&.storybook-button--large {
		font-size: 16px;
		padding: 20px 27px;
	}
	&.storybook-button--radius {
		border-radius: 28px;
		padding: 11px 56px;
	}
`;

export interface IButtonProps {
	variant?: "primary" | "secondary" | "launch" | "default";
	disable?: boolean;
	type?: "button" | "submit";
	isRadius?: boolean;
	size?: "small" | "medium" | "large";
	onClick?: any;
	textTransform?: "upperCase" | "lowerCase" | "capitalize" | "none";
	disabled?: boolean;
	children: any;
	addedClassName?: string;
}

const Button: React.FC<IButtonProps> = ({
	disabled = false,
	textTransform = "none",
	variant = "primary",
	size = "medium",
	isRadius = false,
	children = "Click",
	addedClassName = "",
	type = "button",
	...props
}) => {
	const setRadius = isRadius
		? "storybook-button--radius"
		: "storybook-button--non-radius";
	return (
		<>
			<ButtonContainer
				textTransform={textTransform}
				type={type}
				disabled={disabled}
				className={[
					"storybook-button",
					`storybook-button--${size}`,
					`storybook-button--${variant}`,
					`storybook-button--${textTransform}`,
					setRadius,
					addedClassName,
				].join(" ")}
				{...props}
			>
				{children}
			</ButtonContainer>
		</>
	);
};

export default Button;
