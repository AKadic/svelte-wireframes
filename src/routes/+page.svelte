<script lang="ts">
	import CallToAction from '$lib/components/CallToAction/CallToAction.svelte';
	import Feature from '$lib/components/Feature/Feature.svelte';
	import Hero from '$lib/components/Hero/Hero.svelte';
	import SocialProof from '$lib/components/SocialProof/SocialProof.svelte';
</script>

<Hero
	title="Value Proposition"
	subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
/>

<SocialProof title="Trusted by the World’s Best Companies" />

<Feature
	title="Feature that is amazing"
	subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
	imageSrc="https://images.pexels.com/photos/12725459/pexels-photo-12725459.jpeg"
/>

<Feature
	reversed
	title="Feature that is amazing"
	subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
	imageSrc="https://images.pexels.com/photos/5025667/pexels-photo-5025667.jpeg"
/>

<CallToAction
	title="Ready to get started?"
	subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
/>
