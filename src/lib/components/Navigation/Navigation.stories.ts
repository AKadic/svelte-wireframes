import Navigation from './Navigation.svelte';

export default {
	component: Navigation,
	title: 'Navigation'
};

const Template = (args: any) => ({
	Component: Navigation,
	props: args
});

export const Default = Template.bind({});
Default.args = {};
