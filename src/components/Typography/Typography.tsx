import React from 'react';
import styled, { css } from 'styled-components';

export type theme = 'light' | 'dark';

const typographyMap = new Map([
    ['h1', 'h1'],
    ['h2', 'h2'],
    ['h3', 'h3'],
    ['h4', 'h4'],
    ['h5', 'h5'],
    ['h6', 'h6'],
    ['subtitle1', 'h6'],
    ['subtitle2', 'h6'],
    ['body1', 'p'],
    ['body2', 'p'],
    ['button', 'span'],
    ['caption', 'span'],
    ['overline', 'span'],
]);

export type TypographyVariants =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'overline';

export type FontFamily =
    | 'Montserrat'
    | 'Roboto Slab'
    | 'Roboto'
    | 'Open Sans'
    | 'Poppins'
    | 'Helvetica'
    | 'Avenir-Roman'
    | 'Avenir-Black'
    | 'Avenir-Heavy'
    | 'Avenir-Light'
    | 'Avenir-Medium'
    | 'Nunito';

export interface TypographyProps
    extends React.HTMLAttributes<HTMLHeadingElement> {
    variant: TypographyVariants;
    tag?: string;
    font?: FontFamily;
    fontStyle?:
        | 'inherit'
        | 'italic'
        | 'initial'
        | 'normal'
        | 'oblique'
        | 'unset';
    lineHeight?: number;
    size?: number;
    color?: string;
    weight?: number;
    transform?: 'capitalize' | 'uppercase' | 'lowercase' | 'inherit';
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
    gutterBottom?: boolean;
    title?: string;
    theme?: theme;
}

const StyledTag = ({ tag, variant, children, ...props }) => {
    const Component = tag || typographyMap.get(variant);
    const { lineHeight, gutterBottom, ...rest } = props;
    return <Component {...rest}>{children}</Component>;
};

const StyledH1 = styled(StyledTag)`
    margin: unset;
    margin-bottom: ${({ gutterBottom }) => (gutterBottom ? '0.35em' : 0)};
    font-size: ${({ size }) => (size ? `${size}px` : '6rem')};
    line-height: ${({ lineHeight }) => `${lineHeight}px` || '1'};
    font-weight: ${({ weight }) => weight || 300};
    color: ${({ color }) => color || 'inherit'};
    text-align: ${({ align }) => align || 'inherit'};
    font-family: ${({ font }) => `"${font}", Montserrat` || 'inherit'};
    text-transform: ${({ transform }) => transform || 'unset'};
    ${({ fontStyle }) =>
        fontStyle &&
        css`
            font-style: ${fontStyle};
        `}
`;

const StyledH2 = styled(StyledTag)`
    margin: unset;
    margin-bottom: ${({ gutterBottom }) => (gutterBottom ? '0.35em' : 0)};
    font-size: ${({ size }) => (size ? `${size}px` : '3.75rem')};
    line-height: ${({ lineHeight }) => `${lineHeight}px` || '1'};
    color: ${({ color }) => color || 'inherit'};
    font-weight: ${({ weight }) => weight || 300};
    font-family: ${({ font }) => `"${font}", Montserrat` || 'inherit'};
    text-transform: ${({ transform }) => transform || 'unset'};
    font-style: ${({ transform }) => transform || 'unset'};
    ${({ fontStyle }) =>
        fontStyle &&
        css`
            font-style: ${fontStyle};
        `}
`;

const StyledH3 = styled(StyledTag)`
    margin: unset;
    margin-bottom: ${({ gutterBottom }) => (gutterBottom ? '0.35em' : 0)};
    font-size: ${({ size }) => (size ? `${size}px` : '3rem')};
    font-weight: ${({ weight }) => weight || 400};
    color: ${({ color }) => color || 'inherit'};
    line-height: ${({ lineHeight }) => `${lineHeight}px` || '1.04'};
    font-family: ${({ font }) => `"${font}", Montserrat` || 'inherit'};
    text-transform: ${({ transform }) => transform || 'unset'};
    ${({ fontStyle }) =>
        fontStyle &&
        css`
            font-style: ${fontStyle};
        `}
`;

const StyledH4 = styled(StyledTag)`
    margin: unset;
    margin-bottom: ${({ gutterBottom }) => (gutterBottom ? '0.35em' : 0)};
    font-size: ${({ size }) => (size ? `${size}px` : '2.125rem')};
    font-weight: ${({ weight }) => weight || 400};
    line-height: ${({ lineHeight }) => `${lineHeight}px` || '1.17'};
    color: ${({ color }) => color || 'inherit'};
    font-family: ${({ font }) => `"${font}", Montserrat` || 'inherit'};
    text-transform: ${({ transform }) => transform || 'unset'};
    ${({ fontStyle }) =>
        fontStyle &&
        css`
            font-style: ${fontStyle};
        `}
`;

const StyledH5 = styled(StyledTag)`
    margin: unset;
    margin-bottom: ${({ gutterBottom }) => (gutterBottom ? '0.35em' : 0)};
    font-size: ${({ size }) => (size ? `${size}px` : '1.5rem')};
    font-weight: ${({ weight }) => weight || 400};
    line-height: ${({ lineHeight }) => `${lineHeight}px` || '1.33'};
    color: ${({ color }) => color || 'inherit'};
    font-family: ${({ font }) => `"${font}", Montserrat` || 'inherit'};
    text-transform: ${({ transform }) => transform || 'unset'};
    ${({ fontStyle }) =>
        fontStyle &&
        css`
            font-style: ${fontStyle};
        `}
`;

const StyledH6 = styled(StyledTag)`
    margin: unset;
    margin-bottom: ${({ gutterBottom }) => (gutterBottom ? '0.35em' : 0)};
    font-size: ${({ size }) => (size ? `${size}px` : '0.938rem')};
    line-height: ${({ lineHeight }) => `${lineHeight}px` || '2'};
    font-weight: ${({ weight }) => weight || 'bold'};
    color: ${({ color }) => color || 'inherit'};
    text-align: ${({ align }) => align || 'inherit'};
    font-family: ${({ font }) => `"${font}", Montserrat` || 'inherit'};
    text-transform: ${({ transform }) => transform || 'unset'};
    ${({ fontStyle }) =>
        fontStyle &&
        css`
            font-style: ${fontStyle};
        `}
`;

const Subtitle1 = styled(StyledTag)`
    margin-bottom: ${({ gutterBottom }) => (gutterBottom ? '0.35em' : 0)};
    font-size: ${({ size }) => (size ? `${size}px` : '1rem')};
    line-height: ${({ lineHeight }) => `${lineHeight}px` || '1.75'};
    font-weight: ${({ weight }) => weight || 400};
    color: ${({ color }) => color || 'inherit'};
    text-align: ${({ align }) => align || 'inherit'};
    font-family: ${({ font }) => `"${font}", Montserrat` || 'inherit'};
    text-transform: ${({ transform }) => transform || 'unset'};
    ${({ fontStyle }) =>
        fontStyle &&
        css`
            font-style: ${fontStyle};
        `}
`;

const Subtitle2 = styled(StyledTag)`
    margin-bottom: ${({ gutterBottom }) => (gutterBottom ? '0.35em' : 0)};
    font-size: ${({ size }) => (size ? `${size}px` : '0.875rem')};
    line-height: ${({ lineHeight }) => `${lineHeight}px` || '1.57'};
    font-weight: ${({ weight }) => weight || 500};
    color: ${({ color }) => color || 'inherit'};
    text-align: ${({ align }) => align || 'inherit'};
    font-family: ${({ font }) => `"${font}", Montserrat` || 'inherit'};
    text-transform: ${({ transform }) => transform || 'unset'};
    ${({ fontStyle }) =>
        fontStyle &&
        css`
            font-style: ${fontStyle};
        `}
`;

const Body1 = styled(StyledTag)`
    margin-bottom: ${({ gutterBottom }) => (gutterBottom ? '0.35em' : 0)};
    font-size: ${({ size }) => (size ? `${size}px` : '1rem')};
    line-height: ${({ lineHeight }) => `${lineHeight}px` || '1.5'};
    font-weight: ${({ weight }) => weight || 400};
    color: ${({ color }) => color || 'inherit'};
    text-align: ${({ align }) => align || 'inherit'};
    font-family: ${({ font }) => `"${font}", Montserrat` || 'inherit'};
    text-transform: ${({ transform }) => transform || 'unset'};
    ${({ fontStyle }) =>
        fontStyle &&
        css`
            font-style: ${fontStyle};
        `}
`;

const Body2 = styled(StyledTag)`
    margin-bottom: ${({ gutterBottom }) => (gutterBottom ? '0.35em' : 0)};
    font-size: ${({ size }) => (size ? `${size}px` : '0.875rem')};
    line-height: ${({ lineHeight }) => `${lineHeight}px` || '2'};
    font-weight: ${({ weight }) => weight || 500};
    color: ${({ color }) => color || 'inherit'};
    text-align: ${({ align }) => align || 'inherit'};
    font-family: ${({ font }) => `"${font}", Montserrat` || 'inherit'};
    text-transform: ${({ transform }) => transform || 'unset'};
    ${({ fontStyle }) =>
        fontStyle &&
        css`
            font-style: ${fontStyle};
        `}
`;

const ButtonText = styled(StyledTag)`
    margin-bottom: ${({ gutterBottom }) => (gutterBottom ? '0.35em' : 0)};
    font-size: ${({ size }) => (size ? `${size}px` : '0.875rem')};
    line-height: ${({ lineHeight }) => `${lineHeight}px` || '1.75'};
    text-transform: ${({ transform }) => transform || 'uppercase'};
    font-weight: ${({ weight }) => weight || 500};
    color: ${({ color }) => color || 'inherit'};
    text-align: ${({ align }) => align || 'inherit'};
    font-family: ${({ font }) => `"${font}", Montserrat` || 'inherit'};
    ${({ fontStyle }) =>
        fontStyle &&
        css`
            font-style: ${fontStyle};
        `}
`;

const Caption = styled(StyledTag)`
    margin-bottom: ${({ gutterBottom }) => (gutterBottom ? '0.35em' : 0)};
    font-size: ${({ size }) => (size ? `${size}px` : '0.75rem')};
    line-height: ${({ lineHeight }) => `${lineHeight}px` || '1.66'};
    text-transform: ${({ transform }) => transform || 'unset'};
    font-weight: ${({ weight }) => weight || 400};
    color: ${({ color }) => color || 'inherit'};
    text-align: ${({ align }) => align || 'inherit'};
    font-family: ${({ font }) => `"${font}", Montserrat` || 'inherit'};
    display: block;
    ${({ fontStyle }) =>
        fontStyle &&
        css`
            font-style: ${fontStyle};
        `}
`;

const OverlineText = styled(StyledTag)`
    margin-bottom: ${({ gutterBottom }) => (gutterBottom ? '0.35em' : 0)};
    font-size: ${({ size }) => (size ? `${size}px` : '0.75rem')};
    line-height: ${({ lineHeight }) => `${lineHeight}px` || '2.66'};
    text-transform: ${({ transform }) => transform || 'uppercase'};
    font-weight: ${({ weight }) => weight || 400};
    color: ${({ color }) => color || 'inherit'};
    text-align: ${({ align }) => align || 'inherit'};
    font-family: ${({ font }) => `"${font}", Montserrat` || 'inherit'};
    ${({ fontStyle }) =>
        fontStyle &&
        css`
            font-style: ${fontStyle};
        `}
`;

const Typography: React.FC<TypographyProps> = ({
    children,
    font = 'Montserrat',
    ...rest
}) => {
    const { variant, theme, color: tColor } = rest;
    const color = tColor || (theme === 'dark' ? '#fff' : '#1D1E39');
    const props = { ...rest, font, color };
    switch (variant) {
        case 'h1':
            return <StyledH1 {...props}>{children}</StyledH1>;
        case 'h2':
            return <StyledH2 {...props}>{children}</StyledH2>;
        case 'h3':
            return <StyledH3 {...props}>{children}</StyledH3>;
        case 'h4':
            return <StyledH4 {...props}>{children}</StyledH4>;
        case 'h5':
            return <StyledH5 {...props}>{children}</StyledH5>;
        case 'h6':
            return <StyledH6 {...props}>{children}</StyledH6>;
        case 'subtitle1':
            return <Subtitle1 {...props}>{children}</Subtitle1>;
        case 'subtitle2':
            return <Subtitle2 {...props}>{children}</Subtitle2>;
        case 'body1':
            return <Body1 {...props}>{children}</Body1>;
        case 'body2':
            return <Body2 {...props}>{children}</Body2>;
        case 'button':
            return <ButtonText {...props}>{children}</ButtonText>;
        case 'caption':
            return <Caption {...props}>{children}</Caption>;
        case 'overline':
            return <OverlineText {...props}>{children}</OverlineText>;
        default:
            return <p>{children}</p>;
    }
};

export default Typography;