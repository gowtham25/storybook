import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const TooltipContainer = styled.div`
	.tooltip__tip {
		position: fixed;
		z-index: 999;
		padding: 10px;
		border-radius: 10px;
		background: #000;
		color: #fff;
	}
`;

export interface ITooltipProps
	extends React.BaseHTMLAttributes<HTMLDivElement> {
	addedClassName?: string;
	position?: "top" | "left" | "right" | "bottom";
	text?: string;
	arrow?: boolean;
	children: any;
	content: any;
}
const Tooltip: React.FC<ITooltipProps> = ({
	addedClassName = "",
	position = "top",
	content = "",
	arrow = false,
	children
}) => {
	let timeout: any;
	const toolTipRef: any = useRef();
	const [active, setActive] = useState(false);
	const [tooltipDirection, setTooltipDirection] = useState("top");

	const [tooltipPosition, setTooltipPosition] = useState({});

	useEffect(() => {
		const {
			top = 0,
			left = 0,
			bottom = 0,
			right = 0
		} = toolTipRef.current.getBoundingClientRect();
		if (top > bottom) {
			setTooltipDirection("top");
			setTooltipPosition({ top: top - 50, left });
		} else {
			setTooltipDirection("bottom");
			setTooltipPosition({ top: top + 50, left });
		}
	}, []);
	useEffect(() => {
		// if(hideOnClickEscKey) {
		const handleKeyUp = (e: any) => {
			console.log(toolTipRef.current.getBoundingClientRect());
			const {
				top = 0,
				left = 0,
				height = 0,
				bottom = 0
			} = toolTipRef.current.getBoundingClientRect();
			if (
				(top < 0 || bottom < 0) &&
				(top - height < 0 || bottom - height < 0)
			) {
				console.log(123);
				setActive(false);
			}
			console.log(top, "========", left);
			if (tooltipDirection === "top") {
				setTooltipPosition({ top: top - 50, left });
			} else {
				setTooltipPosition({ bottom: bottom - 50, left });
			}
		};
		window.document.addEventListener("scroll", handleKeyUp);
		return () => window.document.removeEventListener("scroll", handleKeyUp);
		// }
	}, []);

	const showTip = () => {
		const {
			top = 0,
			left = 0,
			bottom = 0,
			right = 0
		} = toolTipRef.current.getBoundingClientRect();
		if (tooltipDirection === "top") {
			setTooltipPosition({ top: top - 50, left });
		} else {
			setTooltipPosition({ bottom: bottom - 50, left });
		}
		// timeout = setTimeout(() => {
		setActive(true);
		// }, 1000);
	};

	const hideTip = () => {
		clearInterval(timeout);
		// setActive(false);
	};

	const findArrowPosition = () => {
		switch (position) {
			case "top":
				return "bottom";
			case "left":
				return "right";
			case "bottom":
				return "top";
			case "right":
				return "left";
		}
	};
	console.log(toolTipRef);
	return (
		<TooltipContainer
			ref={toolTipRef}
			className={`tooltip__container ${addedClassName} tooltip__${tooltipDirection} tooltip_arrow__${findArrowPosition()}`}
			onClick={() => {
				showTip();
			}}
			onMouseEnter={() => {
				showTip();
			}}
			onMouseLeave={() => {
				hideTip();
			}}
		>
			{children}
			{active && (
				<div
					className={`tooltip__tip tooltip__${position}`}
					style={tooltipPosition}
				>
					{content}
				</div>
			)}
		</TooltipContainer>
	);
};

export default Tooltip;
