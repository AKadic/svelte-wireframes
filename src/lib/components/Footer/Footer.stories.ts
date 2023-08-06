import Footer from './Footer.svelte';

export default {
	component: Footer,
	title: 'Footer'
};

const Template = (args: any) => ({
	Component: Footer,
	props: args
});

export const Default = Template.bind({});
Default.args = {};
