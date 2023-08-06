import Hero from './Hero.svelte';

export default {
	component: Hero,
	title: 'Hero'
};

const Template = (args: any) => ({
	Component: Hero,
	props: args
});

export const Default = Template.bind({});
Default.args = {
	title: 'Value Proposition',
	subtitle:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	imageSrc: `https://placehold.co/${1080}x${860}`
};
