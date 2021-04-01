import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import Select, { SelectProps } from "./Select";

export default {
	title: "Inputs/Select",
	component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const MultiSelect = Template.bind({});
MultiSelect.args = {
	options : [
		{label: 'India', value: 'India'},
		{label: 'Australia', value: 'Australia'},
		{label: 'Japan', value: 'Japan'},
		{label: 'Germany', value: 'Germany'},
		{label: 'France', value: 'France'},
		{label: 'Russia', value: 'Russia'},
		{label: 'Spain', value: 'Spain'},
		{label: 'Portugal', value: 'Portugal'},
		{label: 'Brazil', value: 'Brazil'},
		{label: 'Singapore', value: 'Singapore'},
		{label: 'Malasiya', value: 'Malasiya'},
		{label: 'NKorea', value: 'NKorea'},
		{label: 'Israel', value: 'Israel'}
	],
	placeHolder: "Select Value",
	width: "400px",
	addedClass: "myClass",
	isMulti: true,
	selectedOptions: [
		{
			label: 'Singapore',
			value: 'Singapore'
		},
		{
			label: 'Malasiya',
			value: 'Malasiya'
		}
	]
};

export const SingleSelect = Template.bind({});
SingleSelect.args = {
	options : [
		{label: 'India', value: 'India'},
		{label: 'Australia', value: 'Australia'},
		{label: 'Japan', value: 'Japan'},
		{label: 'Germany', value: 'Germany'},
		{label: 'France', value: 'France'},
		{label: 'Russia', value: 'Russia'},
		{label: 'Spain', value: 'Spain'},
		{label: 'Portugal', value: 'Portugal'},
		{label: 'Brazil', value: 'Brazil'},
		{label: 'Singapore', value: 'Singapore'},
		{label: 'Malasiya', value: 'Malasiya'},
		{label: 'NKorea', value: 'NKorea'},
		{label: 'Israel', value: 'Israel'}
	],
	placeHolder: "Select Country",
	width: "400px",
	addedClass: "myClass",
	isMulti: false,
	selectedOptions:[
		{
			label: 'Singapore',
			value: 'Singapore'
		}
	],
	errorMessage: 'Please select the country'
};
