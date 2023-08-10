<script lang="ts">
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	import Hero from '$lib/components/Hero/Hero.svelte';
	import Text from '$lib/components/Text/Text.svelte';
	import ConcreteRose from '$lib/assets/Rose/ConcreteRose.svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const lines = gsap.utils.toArray<HTMLElement>('.line');

		lines.map((line) =>
			gsap
				.timeline({
					scrollTrigger: {
						trigger: line,
						scrub: true
					}
				})
				.from(line, {
					opacity: 0,
					x: '-4em'
				})
				.to(
					line,

					{
						opacity: 1,
						x: 0
					}
				)
				.to(
					line,

					{
						opacity: 0,
						x: 0
					}
				)
		);

		const stem = document.getElementById('Stem')!;
		const crack = document.getElementById('Crack_Base')!;
		const crackBackground = document.getElementById('Crack_Background')!;
		const plant = document.getElementById('Plant')!;
		const leaf = document.getElementById('Leaf')!;
		const qLeaf = gsap.utils.selector(leaf);
		const leafPath = qLeaf('path');
		const q = gsap.utils.selector(crack);
		const crackSegemnts = q('path');

		gsap
			.timeline({
				scrollTrigger: {
					trigger: stem,
					scrub: true
				}
			})
			.fromTo(
				plant,
				{
					transformOrigin: 'bottom',
					opacity: 0.5,
					scale: 0.35
				},
				{
					opacity: 1,
					scale: 0.45
				}
			)
			.fromTo(
				crack,
				{
					transformOrigin: '65px 36px',
					opacity: 0.1,
					scale: 0.15,
					rotate: -24
				},
				{
					opacity: 1,
					scale: 0.35
				},
				'<'
			)
			.to(plant, {
				scale: 1
			})
			.to(
				crack,
				{
					rotate: 0,
					scale: 1
				},
				'<'
			)
			.from(
				crackSegemnts,
				{
					fill: '#b57b18'
				},
				'<'
			)
			.from(
				leafPath,
				{
					fill: '#fff'
				},
				'<'
			)
			.from(
				leaf,
				{
					transformOrigin: 'center right',
					opacity: 0,
					rotate: 120,
					scale: 0
				},
				'<'
			)
			.from(
				crackBackground,
				{
					transformOrigin: '85px 36px',
					opacity: 0,
					scale: 0.75
				},
				'<'
			);
	});
</script>

<Hero title="The Rose That Grew From Concrete" />

<div class="w-3/5 mx-auto flex justify-around items-start">
	<div class="flex gap-16">
		<div>
			<div class="sticky top-1/4">
				<div class="svg h-[480px] flex justify-center svg">
					<ConcreteRose />
				</div>
			</div>
		</div>

		<div>
			<div class="h-screen flex flex-col justify-around items-start gap-8">
				<div class="line">
					<Text>Did you hear about the rose that grew</Text>
				</div>

				<div class="line">
					<Text>from a crack in the concrete?</Text>
				</div>
			</div>

			<div class="h-screen flex flex-col justify-around items-start gap-8">
				<div class="line">
					<Text>Proving nature's law is wrong it</Text>
				</div>

				<div class="line">
					<Text>learned to walk with out having feet.</Text>
				</div>
			</div>

			<div class="h-screen flex flex-col justify-around items-start gap-8">
				<div class="line">
					<Text>Funny it seems, but by keeping its dreams,</Text>
				</div>

				<div class="line">
					<Text>it learned to breathe fresh air.</Text>
				</div>
			</div>

			<div class="h-screen flex flex-col justify-around items-start gap-8">
				<div class="line">
					<Text>Long live the rose that grew from concrete</Text>
				</div>

				<div class="line">
					<Text>when no one else ever cared.</Text>
				</div>
			</div>
		</div>
	</div>
</div>

<Hero title="- Tupac Shakur" />
