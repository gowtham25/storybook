import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Typography, { TypographyProps } from './Typography';

export default {
	title: 'DataDisplay/Typography',
	component: Typography,
	argTypes: {
		color: { control: 'color' },
	},
} as Meta;

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const h1 = Template.bind({});
h1.args = {
	variant: 'h1',
	children: 'type h1'
};

export const h2 = Template.bind({});
h2.args = {
	variant: 'h2',
	children: 'type h2'
};

export const h3 = Template.bind({});
h3.args = {
	variant: 'h3',
	children: 'type h3'
};

export const h4 = Template.bind({});
h4.args = {
	variant: 'h4',
	children: 'type h4'
};

export const h5 = Template.bind({});
h5.args = {
	variant: 'h5',
	children: 'type h5'
};

export const h6 = Template.bind({});
h6.args = {
	variant: 'h6',
	children: 'type h6'
};

export const subtitle1 = Template.bind({});
subtitle1.args = {
	variant: 'subtitle1',
	children: 'type subtitle1'
};

export const subtitle2 = Template.bind({});
subtitle2.args = {
	variant: 'subtitle2',
	children: 'type subtitle2'
};

export const body1 = Template.bind({});
body1.args = {
	variant: 'body1',
	children: 'type body1'
};

export const body2 = Template.bind({});
body2.args = {
	variant: 'body2',
	children: 'type body2'
};

export const button = Template.bind({});
button.args = {
	variant: 'button',
	children: 'type button'
};

export const caption = Template.bind({});
caption.args = {
	variant: 'caption',
	children: 'type caption'
};

export const overline = Template.bind({});
overline.args = {
	variant: 'overline',
	children: 'type overline'
};