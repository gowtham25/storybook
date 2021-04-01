import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import AccordionContent from './AccordionContent';
import classnames from 'classnames';

const AccordionContainer = styled.div`
    // margin: auto;
    &.accordion__container {
        .accordion-ind-container{
            .accordion-ind-container-root {
                display: flex;
                padding: 0px 16px;
                min-height: 48px;
                transition: min-height 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                color: inherit;
                border: 0;
                cursor: pointer;
                margin: 0;
                outline: 0;
                position: relative;
                align-items: center;
                user-select: none;
                border-radius: 0;
                vertical-align: middle;
                justify-content: center;
                text-decoration: none;
                background-color: transparent;
                &.accordion-expanded {
                    min-height: 64px;
                    .accordion-title-container { 
                        .arrow {
                            transform: rotate(360deg);
                        }
                    }
                }
                &.accordion-non-expanded {
                    .accordion-title-container { 
                        .arrow {
                            transform: rotate(180deg);
                        }
                    }
                }
                .accordion-title-container {
                    justify-content: space-between;
                    .arrow {
                        width: 13px;
                        height: 13px;
                    }
                }
            }
            .accordion-title-container {
                margin: 12px 0;
                display: flex;
                flex-grow: 1;
                transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            }
            .accordion-secondary-container {
                display: flex;
                flex-direction: column;
                overflow: hidden;
            }
        }
        &.accordion__light {
            .accordion-ind-container {
                &.accordion-expanded-root {
                    background-color: #f9faff !important;
                    border: 1px solid #4066ff !important;
                }
                margin-bottom: 5px;
                box-sizing: border-box;
                min-height: 60px !important;
                position: initial !important;
                background: #fff !important;
                border: 1px solid #b4c2ff !important;
                box-shadow: 0 2px 4px rgba(120,120,120,.12) !important;
                border-radius: 4px !important;
                .accordion-ind-container-root {
                    &.accordion-expanded {
                        .accordion-title-container { 
                            .accordion-title-content {
                                font-family: "Avenir-Heavy" !important;
                                font-weight: 800 !important;
                                font-size: 16px !important;
                                line-height: 22px !important;
                                color: #4066ff !important;
                            }
                        }
                    }
                    .accordion-title-container {
                        .accordion-title-content {
                            margin: 0;
                            color: #272727;
                            font-size: 16px;
                            font-style: normal;
                            font-family: Avenir-Heavy;
                            font-weight: 800;
                            line-height: 22px;
                            letter-spacing: 0.00938em;
                            user-select: text !important;
                        }
                    }
                }
                .accordion-secondary-container{
                    transition: max-height 0.223s ease;
                    &.accordion-content-expanded {
                        margin: 0 14px 14px 14px;
                    }
                    &.accordion-content-non-expanded {
                        margin: 0 14px;
                    }
                    .accordion-secondary-content {
                        color: #272727;
                        font-size: 16px;
                        font-family: Avenir-Medium;
                        font-weight: 500;
                        line-height: 24px;
                        margin: 0;
                    }
                }
            }
        }
        &.accordion__dark {
            .accordion-ind-container {
                border: none !important;
                position: initial !important;
                box-shadow: none !important;
                min-height: 60px !important;
                border-radius: 0px !important;
                margin-bottom: 5px !important;
                background-color: #1d2441 !important;
                .accordion-ind-container-root {
                    &.accordion-expanded {
                        .accordion-title-container { 
                            .accordion-title-content {
                                font-family: "Avenir-Heavy" !important;
                                font-weight: 800 !important;
                                font-size: 16px !important;
                                line-height: 22px !important;
                                color: #fff !important;
                            }
                        }
                    }
                    .accordion-title-container {
                        .accordion-title-content {
                            color: #fff;
                            cursor: pointer !important;
                            margin: 5px 0px;
                            font-size: 16px;
                            font-style: normal;
                            text-align: left;
                            font-family: Avenir-Medium;
                            font-weight: 800;
                            line-height: 22px;
                        }
                    }
                }
                .accordion-secondary-container{
                    transition: max-height 0.223s ease;
                    &.accordion-content-expanded {
                        padding: 8px 16px 16px;
                    }
                    &.accordion-content-non-expanded {
                        margin: 0 14px;
                    }
                    .accordion-secondary-content {
                        color: #FFF;
                        font-size: 16px;
                        font-family: Avenir-Medium;
                        font-weight: 500;
                        line-height: 24px;
                        margin: 0;
                    }
                }
            }
        }
    }
`;

interface IAccordionListProps {
    title: any;
    content: any;
}
export interface IAccordionProps {
    multiOpen: boolean;
    accordionList: IAccordionListProps[];
    theme?: 'light' | 'dark';
    defaultExpand: boolean;
}

const Accordion: React.FC<IAccordionProps> = ({
    multiOpen = false,
    accordionList = [],
    theme = 'dark',
    defaultExpand = false
}) => {
    const [expandedAccordion, setExpandedAccordion] = useState([]);
    useEffect(() => {
        if(defaultExpand) {
            const expandDetails: any = accordionList.map((val: any, index: number) => {
                if(index === 0) {
                    return 1;
                }
                return 0;
            });
            setExpandedAccordion(expandDetails);
        } else {
            const expandDetails: any = accordionList.map((val: any) => 0);
            setExpandedAccordion(expandDetails);
        }
    }, [accordionList, defaultExpand]);

    const handleClickAccordion = (index: number) => {
        const changedExpandDetails: any = expandedAccordion.map((aVal, aIndex) => {
            if(aIndex === index) {
                if(aVal) {
                    return 0;
                } 
                return 1;
            }
            if(multiOpen) {
                if(aIndex !== index) {
                    return aVal;
                }
            } else {
                if(aIndex !== index) {
                    return 0;   
                }
            }
        })
        setExpandedAccordion(changedExpandDetails);
    }
    
    return (
        <AccordionContainer className={classnames('accordion__container', {'accordion__light': theme === 'light', 'accordion__dark': theme === 'dark'})}>
            {accordionList.map(({title, content}, index) => 
                <AccordionContent 
                    key={index} 
                    primaryText={title} 
                    secondaryText={content} 
                    expandedAccordion={expandedAccordion}
                    isOpen={expandedAccordion[index]}
                    handleClickAccordion={handleClickAccordion}
                    index={index}
                    theme={theme}
                />
            )}
            
        </AccordionContainer>
    )
}

export default Accordion;