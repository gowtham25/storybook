import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Modal, { IModalProps } from './Modal';

export default {
	title: 'Utils/Modal',
	component: Modal,
	argTypes: {
		color: { control: 'color' },
	},
} as Meta;

const Template: Story<IModalProps> = (args) => <Modal {...args} />;

export const Modal1 = Template.bind({});
Modal1.args = {
    children: <div>test</div>,
	hideOnClickEscKey: true,
	hideClickOnOutside: true,
};