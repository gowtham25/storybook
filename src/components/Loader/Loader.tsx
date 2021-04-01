import React from "react";
import Lottie from 'react-lottie';
import styled from "styled-components";
import LoaderJSON from "../../assets/Loader.json";

const LoaderContainer = styled.div`
	&.LoaderContainer {
        width: auto;
	}
`;

export interface ILoaderProps {
	type?: "circular" | "image";
	size?: number;
	children: any;
	addedClassName?: string;
    style?: any;
}

const Loader: React.FC<ILoaderProps> =({
	size = 80,
	children = "Click",
	addedClassName = "",
	type = "circular",
    style={margin: '0'},
	...props
}) => {
    const defaultStyle= {margin: '0', padding: '0'}
    return (
        <LoaderContainer>
            <Lottie
            options={{
                animationData: LoaderJSON,
                rendererSettings: {
                    preserveAspectRatio: 'xMidYMid meet'
                }              
            }}
            height={size}
            width={size}
            style={{...defaultStyle,...style}}
            {...props}
            />
         </LoaderContainer>
    )
}

export default Loader;