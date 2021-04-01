import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import SVG from "react-inlinesvg";
import Arrow from '../../assets/svg/arrowLight.svg';
import DarkArrow from '../../assets/svg/darkArrow.svg'

interface IAccordionContentProps {
    primaryText: string;
    secondaryText: string;
    index: number;
    handleClickAccordion: (val: number) => void;
    expandedAccordion: Array<string>;
    isOpen: boolean;
    theme: 'dark' | 'light';
}
const AccordionContent: React.FC<IAccordionContentProps> = ({
    primaryText = '', 
    secondaryText = '', 
    index = 0,
    handleClickAccordion,
    expandedAccordion = [],
    isOpen = false,
    theme,
}) => {

    const [contentHeight, setContentHeight] = useState("0px");
    const content: any = useRef(null);

    useEffect(() => {
        setContentHeight(!isOpen ? "0px" : `${content.current.scrollHeight}px`);
    }, [isOpen]);

    const toggleAccordion = () => {
        setContentHeight(
            !isOpen ? "0px" : `${content.current.scrollHeight}px`
        );
    }
    return (
        <div 
            className={classnames('accordion-ind-container', {'accordion-expanded-root': expandedAccordion[index]})}
            onClick={() => {
                handleClickAccordion(index);
                toggleAccordion();
            }}
        >
            <div className={classnames('accordion-ind-container-root', {'accordion-expanded': expandedAccordion[index], 'accordion-non-expanded': !expandedAccordion[index]})}>
                <div className='accordion-title-container'>
                    <p className='accordion-content accordion-title-content'>
                        {primaryText}
                    </p>
                    {theme === 'light' ? <SVG src={Arrow} className='arrow'/> : <SVG src={DarkArrow} className='arrow dark'/>}
                </div>
            </div>
            <div 
                ref={content}
                style={{ maxHeight: `${contentHeight}`}}
                className={classnames('accordion-secondary-container', {'accordion-content-expanded': expandedAccordion[index], 'accordion-content-non-expanded': !expandedAccordion[index]})}
                onClick={(e) => {e.stopPropagation();}}
            >
                {theme === 'light' ? (
                    <p className='accordion-content accordion-secondary-content'>
                        {secondaryText}
                    </p>
                ) : (
                    <div>{secondaryText}</div>
                )}
            </div>
        </div>
    )
}

export default AccordionContent;