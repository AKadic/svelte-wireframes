<script lang="ts">
	import CallToAction from '$lib/components/CallToAction/CallToAction.svelte';
	import Feature from '$lib/components/Feature/Feature.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Hero from '$lib/components/Hero/Hero.svelte';
	import Navigation from '$lib/components/Navigation/Navigation.svelte';
	import SocialProof from '$lib/components/SocialProof/SocialProof.svelte';
</script>

<Navigation />

<Hero
	title="Rapidly Prototype Websites with Svelte Wireframes"
	subtitle="Let us help you design beatiful modern websites"
/>

<SocialProof title="Made with Svelte Wireframes" />

<Feature
	title="Powered by Svelte"
	subtitle="Use Svelte to prototype modern designs using the latest browser features."
/>

<Feature
	reversed
	title="Choose from 20+ ready made Wireframes and Components and their variations."
	subtitle="Pick and Choose from over 20+ ready made Components to quickly sketch out your ideas and see what works and doesnt. The components are optimized and lightweight, meaning you don't have to worry about the workings under the hood."
/>

<CallToAction
	title="Let us handle the bulk of the work, you focus on designing"
	subtitle="Let us handle the bulk of the work while you keep your focus on design."
/>

<Footer />
