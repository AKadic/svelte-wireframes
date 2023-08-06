import SocialProof from './SocialProof.svelte';

export default {
	component: SocialProof,
	title: 'Social Proof'
};

const Template = (args: any) => ({
	Component: SocialProof,
	props: args
});

export const Default = Template.bind({});
Default.args = {
	title: 'Trusted by the World’s Best Companies'
};
