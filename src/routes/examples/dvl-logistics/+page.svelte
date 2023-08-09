<script lang="ts">
	import CallToAction from '$lib/components/CallToAction/CallToAction.svelte';
	import Feature from '$lib/components/Feature/Feature.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Hero from '$lib/components/Hero/Hero.svelte';
	import Navigation from '$lib/components/Navigation/Navigation.svelte';
	import SocialProof from '$lib/components/SocialProof/SocialProof.svelte';

	const heroSubtitle = `DVL Logistics is jouw toonaangevende partner in logistiek. Gevestigd in Helmond, zijn wij gespecialiseerd in het leveren van hoogwaardige Home Delivery en Full Service Fulfillment diensten. Onze toewijding aan kwaliteit, ongeëvenaarde service en ongekende snelheid in transport vormt de kern van alles wat we doen. Bij DVL Logistics streven we ernaar om jouw verwachtingen te overtreffen en tegelijkertijd de normen in de logistieke wereld te bepalen.`;
</script>

<Navigation />

<Hero
	blur
	title="Transport- en Koeriersbedrijf DVL Logistics."
	subtitle={heroSubtitle}
	imageSrc="https://images.pexels.com/photos/6347560/pexels-photo-6347560.jpeg"
/>

<SocialProof title="Wij werken met trots samen met" />

<Feature
	title="Snel en Gemakkelijk Thuisbezorgd"
	subtitle="Bij DVL Logistics kennen we de kracht van thuisbezorging. Wij hebben ons gespecialiseerd in het bieden van eersteklas Home Delivery, zowel voor particuliere als zakelijke klanten."
	imageSrc="https://images.pexels.com/photos/12725402/pexels-photo-12725402.jpeg"
/>

<Feature
	reversed
	title="Ontketen je E-commerce Groei met  Full Service Fulfillment"
	subtitle="DVL Logistics' Full Service Fulfillment - Jouw Alles-In-Één Oplossing. Laat ons het complete logistieke proces, van orderverwerking tot verzending en retourafhandeling, voor jou beheren, zodat jij je volledig kunt concentreren op het uitbouwen van jouw E-commerce activiteiten."
	imageSrc="https://images.pexels.com/photos/5025667/pexels-photo-5025667.jpeg"
/>

<SocialProof />

<CallToAction
	title="Stap aan Boord en Transformeer Jouw Logistieke Toekomst met DVL Logistics"
	subtitle="Word deel van onze succesvolle reis in de logistieke wereld. Kies voor DVL Logistics en ervaar een nieuwe dimensie van logistieke dienstverlening. Neem vandaag nog contact met ons op om te ontdekken hoe we jouw logistieke uitdagingen kunnen aanpakken en jouw bedrijf naar nieuwe hoogten kunnen brengen."
/>

<Footer />
