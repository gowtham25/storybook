import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import Accordion from "./Accordion";

export default {
	title: "Surfaces/Accordion",
	component: Accordion,
} as Meta;

const Template: Story<any> = (args) => <Accordion {...args} />;

export const MultiSelect = Template.bind({});
MultiSelect.args = {
	accordionList: [
		{
			title: 'Mastree lessons are available for which classes?',
			content: (
				<span>
					The Mastree lessons are distributed across 6 levels, with each level
					correlating to specific grades. Currently, we cater to students of
					KG to Class 12th.
				</span>
			)
		},
		{
			title: 'How is Mastree different from other learning platforms?',
			content: (
				<span>
					Mastree equips your child with world-class English communication skills
					through a series of application-based modules. Our Hands-on Projects
					(publishing a book, building a blog & starting a podcast) allow children
					to start working towards their dreams at a young age.
				</span>
			)
		}
	]
};

