import Feature from './Feature.svelte';

export default {
	component: Feature,
	title: 'Feature'
};

const Template = (args: any) => ({
	Component: Feature,
	props: args
});

export const Default = Template.bind({});
Default.args = {
	title: 'Feature that is amazing',
	subtitle:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
};
