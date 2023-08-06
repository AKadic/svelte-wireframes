import CallToAction from './CallToAction.svelte';

export default {
	component: CallToAction,
	title: 'Call To Action'
};

const Template = (args: any) => ({
	Component: CallToAction,
	props: args
});

export const Default = Template.bind({});
Default.args = {
	title: 'Ready to get started?',
	subtitle:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
};
