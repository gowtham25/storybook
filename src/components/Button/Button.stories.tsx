import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Button, { IButtonProps } from "./Button";

export default {
	title: "Inputs/Button",
	component: Button,
} as Meta;

const Template: Story<IButtonProps> = (args: any) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	variant: "primary",
	children: "Button"
};

export const Secondary = Template.bind({});
Secondary.args = {
	...Primary.args,
	variant: "secondary"
};

export const Launch = Template.bind({});
Launch.args = {
	...Primary.args,
	variant: "launch"
};

export const Default = Template.bind({});
Default.args = {
	...Primary.args,
	variant: "default"
};
