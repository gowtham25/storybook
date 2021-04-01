import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Loader from "./Loader";

export default {
	title: "Info/Loader",
	component: Loader,
	argTypes: {
		color: { control: "color" }
	}
} as Meta;

const Template: Story<any> = (args: any) => <Loader {...args} />;

export const Circular = Template.bind({});
Circular.args = {
	type: 'circular',
	size: 100,
	style: {}
};

