import React from 'react';
import styled, { css } from 'styled-components';

export type GridType = 'grid' | 'flex';

export type AlignItems =
    | 'baseline'
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'inherit'
    | 'initial'
    | 'left'
    | 'normal'
    | 'right'
    | 'safe'
    | 'self-end'
    | 'self-start'
    | 'start'
    | 'stretch';

export type JustifyContent =
    | 'baseline'
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'inherit'
    | 'initial'
    | 'left'
    | 'normal'
    | 'right'
    | 'safe'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'start'
    | 'stretch';

export type DirectionType = 'row' | 'column';

interface GridProps extends React.BaseHTMLAttributes<HTMLDivElement> {
    container?: boolean;
    item?: boolean;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    grow?: boolean;
    shrink?: boolean;
    flex?: number | string;
    spacing?: number;
    gap?: number;
    gutter?: number;
    wrap?: 'wrap' | 'nowrap';
    direction?: DirectionType;
    justify?: JustifyContent;
    alignItems?: AlignItems;
    breakpoint?: string;
    basis?: string;
    type?: GridType;
    grid?: boolean;

    justifySelf?: JustifyContent;
    alignSelf?: AlignItems;
    placeSelf?: AlignItems;
}


const StyledGrid = styled.div`
    height: inherit;
    ${({ justify }) =>
		justify &&
        `
        justify-content: ${justify};
    `}
    ${({ alignItems }) =>
		alignItems &&
        `
        align-items: ${alignItems};
    `}

    ${({ item }) =>
		item &&
        css`
            ${({ justifySelf }) => justifySelf && `justify-self: ${justifySelf};`}
            ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf};`}
            ${({ placeSelf }) => placeSelf && `place-self: ${placeSelf};`}
        `}

    ${({ type }) =>
		type === 'flex' &&
        css`
			& {
				flex-grow: ${({ grow }) => (grow ? 1 : 'unset')};
				flex-shrink: ${({ shrink }) => (shrink ? 1 : 'unset')};
				flex-basis: ${({ basis }) => basis};
				${({ item, gutter, spacing }) => item &&
                    `
                    margin: ${gutter * 4}px;
                    padding: ${spacing * 4}px;
                `}
                ${({ flex }) => flex &&`flex: ${flex};`}
                ${({ container, breakPoint, direction, justify, alignItems, spacing, gutter, gap, wrap,}) => container &&
                    `
                        display: flex;
                        flex-wrap: ${wrap};
                        flex-direction: ${direction};
                        >.mt-grid-item {
                            flex-basis: ${breakPoint > 0 ? gap ? `calc(${(breakPoint / 12) * 100}% - ${gap * 4 * 2}px)`: `${(breakPoint / 12) * 100}%`: 'unset'};
                            height: ${breakPoint > 0 ? 'min-content' : 'unset'};
                        }
                        >.mt-grid-item {
                            margin: ${gap * 4}px;
                            padding: ${spacing * 4}px;
                        }
                    `}
                    ${({ container, gap }) => container && gap &&
                        `
                        & {
                            margin: 0 -${gap * 4}px;
                        }
                    `}
            }
    `}
`;

const Grid: React.FC<GridProps> = ({
	container,
	item,
	children,
	className,
	xs,
	sm,
	md,
	lg,
	xl,
	spacing = 0,
	gutter = 0,
	gap = 0,
	direction = 'row',
	wrap,
	breakpoint,
	basis,
	type = 'flex',
	...props
}) => {
	className = className ? `${className} mt-grid` : 'mt-grid';
	className = item ? `${className} mt-grid-item` : className;
	className = container ? `${className} mt-grid-container` : className;

	const getDeviceInfo = () => {
		const { innerWidth } = window;
		if (innerWidth >= 320 && innerWidth <= 480) {return 'xs';}
		if (innerWidth >= 481 && innerWidth <= 767) {return 'sm';}
		if (innerWidth >= 768 && innerWidth <= 1024) {return 'md';}
		if (innerWidth >= 1025 && innerWidth <= 1280) {return 'lg';}
		if (innerWidth >= 1281) {return 'xl';}
		return 'xl';
	};

	const device = getDeviceInfo();
	const breakPoint = (() => {
		switch (device) {
			case 'xs':
				return xs || -1;
			case 'sm':
				return sm || xs || -1;
			case 'md':
				return md || sm || -1;
			case 'lg':
				return lg || md || sm || xs || -1;
			case 'xl':
				return xl || lg || md || sm || xs || -1;
			default:
				return -1;
		}
	})();

	return (
		<StyledGrid
			className={`${className} dmt-${breakPoint}`}
			item={item}
			container={container}
			direction={direction}
			spacing={spacing}
			gutter={gutter}
			gap={gap}
			breakPoint={breakPoint}
			basis={basis}
			wrap={wrap || (breakPoint === -1 ? 'nowrap' : 'wrap')}
			type={type}
			{...props}
		>
			{children}
		</StyledGrid>
	);
};

export default Grid;