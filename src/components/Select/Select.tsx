import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import classnames from 'classnames';

const ErrorContainer = styled.span`
	text-align: center;
	font-size: 12px;
	font-family: "Avenir-Light";
	margin-bottom: 0;
	color: red;
	text-align: left;
`;
const SelectComponent = styled.div`
	font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
	box-sizing: border-box;
	position: relative;
	display: flex;
	border: 1px solid #ccc;
	width: ${({ selectWidth }) => `${selectWidth}`};
	border-radius: 2px;
	padding: 2px 5px;
	flex-direction: row;
	direction: ltr;
	align-items: center;
	cursor: pointer;
	min-height: 36px;
	pointer-events: all;
	align-items: center;
	&.is-error {
		border: 1px solid #ff0000 !important;
	}
	.react-dropdown-select-content {
		display: flex;
		flex: 1;
		flex-wrap: wrap;
		.react-dropdown-select-input {
			outline: none;
			line-height: inherit;
			border: none;
			margin-left: 5px;
			background: transparent;
			padding: 0px;
			flex-grow: 1;
			padding: 8px 0;
			width: ${({ inputWidth }) => `calc(${inputWidth}ch - 5px)`};
			font-size: smaller;
		}
		.chip {
			border-radius: 6px;
			font-size: 13px;
			padding: 4px;
			border: 1px solid #0074d9;
			color: #FFF;
			background: #0074d9;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			margin: 2px;
			.cancelButton {
				transform: rotate(135deg);
				margin-left: 4px;
				font-size: 14px;
				cursor: pointer;
			}
		}
	}
	.react-dropdown-select-dropdown {
		position: absolute;
		top: 43px;
		left: -1px;
		border: 1px solid rgb(204, 204, 204);
		width: ${({ selectWidth }) => `${selectWidth}`};
		padding: 0px;
		display: flex;
		flex-direction: column;
		background: #FFF;
		border-radius: 2px;
		box-shadow: rgb(0 0 0 / 20%) 0px 0px 10px 0px;
		max-height: 200px;
		overflow: auto;
		z-index: 9;
		.react-dropdown-select-item {
			padding: 8px 10px;
			cursor: pointer;
			border-bottom: 1px solid #FFF;
			box-sizing: border-box;
			direction: ltr;
			pointer-events: all;
			text-align: left;
			&.item-selected {
				background: #0074d9;
				color: #FFF;
				border-bottom: 1px solid #FFF;
				padding: 8px 10px;
				cursor: pointer;
				box-sizing: border-box;
			}
			&:hover:not(.item-selected) {
				background: rgba(0, 116, 217, 0.1);
				outline: none;
			}
			&.hover-item {
				background: rgba(0, 116, 217, 0.1) !important;
				outline: none;
				color: #000;
			}
		}
	}
	.react-dropdown-clear-all{
		margin-right: 6px;
		font-size: 20px;
		top: 1px;
		transform: rotate(45deg);
		color: #000;
		font-weight: 400;
		transition: 0.2s;
	}
	.react-dropdown-arrow {
		display: flex;
		.arrow {
			border: solid black;
			border-width: 0 2px 2px 0;
			display: inline-block;
			padding: 3px;
			&.up {
				transform: rotate(-135deg);
			}
			&.down {
				transform: rotate(45deg);
			}
		}
	}
`;

interface IDataProps {
	label: string;
	value: string;
}

export interface SelectProps extends React.BaseHTMLAttributes<HTMLDivElement> {
	options: IDataProps[],
	placeHolder?: string;
	width: string;
	addedClass: string;
	isMulti: boolean;
	selectedOptions: IDataProps[],
	isClearable: boolean;
	onHandleSelect?: any;
	errorMessage?: string;
}
const Select: React.FC<SelectProps> = ({
	options = [],
	placeHolder = "Select",
	width = "100%",
	addedClass = "",
	isMulti = false,
	selectedOptions = [],
	isClearable = false,
	onHandleSelect,
	errorMessage = '',
}) => {
	const [inputWidth, setInputWidth] = useState(14);
	const [showOptions, setShowOptions] = useState(false);
	const [selectedOptionsArr, setSelectedOptionsArr] = useState(selectedOptions);
	const [optionArr, setOptionArr] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');
	const [listOptions, setListOptions] = useState(options);
	const [itemPosition, setItemPosition] = useState(43);
	const [hoveredItem, setHoveredItem] = useState(0);
	const [keyClicked, setKeyClicked] = useState(false);

	const inputEl: any = useRef(null);
	const contentRef: any = useRef(null);
	
	useEffect(() => {
		const updatedSelArr: any = selectedOptions.map((val) => val.label);
		setOptionArr(updatedSelArr);
		!isMulti && setSelectedOptionsArr(selectedOptions);
	}, [isMulti, selectedOptions]);

	useEffect(() => {
		onHandleSelect(selectedOptionsArr);
	}, [onHandleSelect, selectedOptionsArr]);

	useEffect(() => {
		setHoveredItem(-1);
		!isMulti && setKeyClicked(false);
		inputEl.current.focus();
	}, [showOptions]);

	useEffect(() => {
		window.document.addEventListener("click", handleBodyClick);
		return () => {
			window.document.removeEventListener("click", handleBodyClick);
		}
	}, [isMulti]);

	useEffect(() => {
		setItemPosition(contentRef.current.getBoundingClientRect().height + 6);
	}, [optionArr]);

	useEffect(() => {
		const updatedListOptions = options.filter((val) => {
			return val.label.toUpperCase().indexOf(searchQuery.toUpperCase()) !== -1;
		})
		setListOptions(updatedListOptions);
	}, [options, searchQuery]);

	useEffect(() => {
		const elmnt = document.getElementsByClassName("hover-item")[0];
		elmnt && elmnt.scrollIntoView();
	}, [hoveredItem]);
	
	const hasSomeParentTheClass: any = (element: any, classname: string) => {
		if (element.className && element.className.split(' ').indexOf(classname) >= 0) return true;
		return element.parentNode && hasSomeParentTheClass(element.parentNode, classname);
	}

	const handleBodyClick = (e: any) => {
		if((!hasSomeParentTheClass(e.target, 'select-box--container') || e.target.tagName === 'HTML')) {
			setShowOptions(false);
		} 
	};

	const handleInput = (e: any) => {
		if (e.target.value.length > 14) {
			setInputWidth(e.target.value.length);
		}
	};

	const handleItemSelect = (data: IDataProps, isSelected: boolean) => {
		let updatedSelectedOptions;
		if(isMulti) {
			if(isSelected) {
				updatedSelectedOptions = selectedOptionsArr.filter(val => val.label !== data.label);
			} else {
				updatedSelectedOptions =  [...selectedOptionsArr, data];
			}
		} else {
			updatedSelectedOptions =  [data];
		}
		const updatedSelArr: any = updatedSelectedOptions.map((val) => val.label);
		setSelectedOptionsArr(updatedSelectedOptions);
		setOptionArr(updatedSelArr);
		setListOptions(options);
		setSearchQuery('');
	}

	const handleAllclear = () => {
		setSelectedOptionsArr([]);
		setOptionArr([]);
		setListOptions(options);
		if(!isMulti) {
			setSearchQuery('');
		}
	}
	return (
		<div style={{width: width, display: 'flex', flexDirection:'column'}} className={`root-container select-${addedClass}-container`}>
			<SelectComponent
				inputWidth={inputWidth}
				selectWidth={width}
				className={classnames(`select-box--container ${addedClass}`, {'is-error': !!errorMessage})}
				id='selectBoxRoot'
				onKeyUp={(e: any) => {
					if(e.keyCode === 40) { //keydown
						if(hoveredItem < listOptions.length - 1) {
							setHoveredItem((hoveredItem: number) => hoveredItem + 1);			
						} else {
							setHoveredItem(0);
						}
					} else if(e.keyCode === 38) { //keyup
						if(hoveredItem <= 0) {
							setHoveredItem(listOptions.length - 1);
						}else {
							setHoveredItem((hoveredItem: number) => hoveredItem - 1);
						}
					} else if(e.keyCode === 13) {
						const selectedItem = listOptions[hoveredItem];
						if(hoveredItem !== -1) {
							const isSelected: any = selectedOptionsArr.filter((val: any) => val.label === selectedItem.label);
							handleItemSelect(selectedItem, !!isSelected.length);
							!isMulti && setShowOptions(false);
						}
					}
				}}
				ref={contentRef}
				onClick={(e: any) => {
					showOptions && !isMulti ? setShowOptions(false) : setShowOptions(true);
					setListOptions(options);
				}}
			>
				<div
					className="react-dropdown-select-content"
					onClick={(e: { stopPropagation: () => void; }) => {
						e.stopPropagation();
						showOptions && !isMulti ? setShowOptions(false) : setShowOptions(true);
						setListOptions(options);
					}}
				> 
					{isMulti && (
						selectedOptionsArr.map((val: IDataProps, index: number) => {
							return (
								<span key={index} className='chip' style={{fontSize: '13px'}}>{val.label}
									<span 
										className='cancelButton'
										onClick={() => {
											handleItemSelect(val, true);
										}}
									>+</span>
								</span>
							)
						})
					)}
					<input
						type="text"
						className="react-dropdown-select-input"
						placeholder={placeHolder}
						value={!isMulti && !keyClicked ? optionArr[0] : searchQuery}
						ref={inputEl}
						onChange={(e: any) => {
							// !isMulti && e.stopPropagation();
							setSearchQuery(e.target.value);
							handleInput(e);
							setShowOptions(true);
							!isMulti && setKeyClicked(true);
						}}
						onClick={(e: any) => {
							setShowOptions(true);
						}}
					/>
				</div>
				{showOptions && (
					<div className="react-dropdown-select-dropdown" style={{top: `${itemPosition}px`}}>
						{listOptions.length ? listOptions.map((data: IDataProps, index: number) => {
								const {label = ''} = data || {};
								return (
									<span
										key={index}
										className={classnames("react-dropdown-select-item", {'item-selected': optionArr.includes(label), 'hover-item': hoveredItem === index})}
										color="#0074D9"
										onClick={(e) => { handleItemSelect(data, optionArr.includes(label)) }}
									>
										{label}
									</span>
								)
							}) : <span className="react-dropdown-select-item" color="#0074D9">No Matches Found</span>
						}
					</div>
				)}
				{isClearable && selectedOptionsArr.length > 0 && (
					<div className='react-dropdown-clear-all'>
						<i 
							onClick={(e) => {
								e.stopPropagation();
								handleAllclear();
								setKeyClicked(true);
							}}
						>+</i>
					</div>
				)}
				<div className='react-dropdown-arrow'>
					<i className={classnames('arrow', {up: showOptions, down: !showOptions})}
						onClick={(e) => {
							e.stopPropagation();
							showOptions ? setShowOptions(false) : setShowOptions(true);
						}}
					></i>
				</div>
			</SelectComponent>
			{errorMessage && <ErrorContainer className='errorMessage'>{errorMessage}</ErrorContainer>}
		</div>
	);
};

export default Select;