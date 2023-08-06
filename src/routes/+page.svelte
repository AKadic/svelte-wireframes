<script lang="ts">
	import CallToAction from '$lib/components/CallToAction/CallToAction.svelte';
	import Feature from '$lib/components/Feature/Feature.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Hero from '$lib/components/Hero/Hero.svelte';
	import SocialProof from '$lib/components/SocialProof/SocialProof.svelte';

	const heroSubtitle = `DVL Logistics is jouw toonaangevende partner in logistiek. Gevestigd in Helmond, zijn wij gespecialiseerd in het leveren van hoogwaardige Home Delivery en Full Service Fulfillment diensten. Onze toewijding aan kwaliteit, ongeëvenaarde service en ongekende snelheid in transport vormt de kern van alles wat we doen. Bij DVL Logistics streven we ernaar om jouw verwachtingen te overtreffen en tegelijkertijd de normen in de logistieke wereld te bepalen.`;
</script>

<Hero
	blur
	title="Transport- en Koeriersbedrijf DVL Logistics."
	subtitle={heroSubtitle}
	imageSrc="https://images.pexels.com/photos/6347560/pexels-photo-6347560.jpeg"
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

<Footer />
