<script lang="ts">
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	import Hero from '$lib/components/Hero/Hero.svelte';
	import Text from '$lib/components/Text/Text.svelte';
	import StemSvg from '$lib/assets/Rose/Stem.svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const lines = gsap.utils.toArray<HTMLElement>('.line');

		lines.map((line) =>
			gsap.fromTo(
				line,
				{
					opacity: 0,
					x: '-5em'
				},
				{
					scrollTrigger: line,
					opacity: 1,
					x: 0
				}
			)
		);
	});
</script>

<Hero title="The Rose That Grew From Concrete" />

<div class="w-3/5 mx-auto h-screen flex justify-around items-center">
	<div class="sticky top-0 h-[480px]">
		<StemSvg />
	</div>

	<div class="flex flex-col gap-5">
		<div class="line">
			<Text>Did you hear about the rose that grew</Text>
		</div>

		<div class="line">
			<Text>from a crack in the concrete?</Text>
		</div>
	</div>
</div>

<Hero
	title="Proving nature's law is wrong it
           learned to walk with out having feet."
/>

<Hero
	title="Funny it seems, but by keeping its dreams,
           it learned to breathe fresh air."
/>

<Hero
	title="Long live the rose that grew from concrete
           when no one else ever cared."
/>

<Hero title="- Tupac Shakur" />
