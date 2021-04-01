import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import Tooltip from "./Tooltip";

export default {
	title: "Dev In Progress/Tooltip",
	component: Tooltip,
	argTypes: {
		color: { control: "color" }
	}
} as Meta;

const Template: Story<any> = (args) => <Tooltip {...args} />;

export const TooltipLeft = Template.bind({});
TooltipLeft.args = {
	children: <div>test</div>
};
