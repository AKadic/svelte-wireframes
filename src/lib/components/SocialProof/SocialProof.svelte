<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import Subtitle from '$lib/components/Subtitle';

	export let title: String;

	const numberOfCircles = 6;
	const animationDuration = 2;

	let container: HTMLElement;
	let circles: HTMLElement[] = new Array(numberOfCircles);

	onMount(() => {
		const containerWidth = container.offsetWidth;
		const spacing = containerWidth / numberOfCircles;
		const fullDuration = animationDuration * numberOfCircles;

		circles.forEach((circle, index) => {
			const timeline = gsap.timeline({ repeat: -1 });
			const initialPosition = (index + 1) * spacing;
			const distanceToTravel = initialPosition + circle.offsetWidth;
			const startPosition = containerWidth + circle.offsetWidth;
			const endPosition = startPosition + circle.offsetWidth;
			const initialMovementDuration = (distanceToTravel / containerWidth) * fullDuration;

			timeline.seek(initialMovementDuration).fromTo(
				circle,
				{ x: startPosition },
				{
					duration: fullDuration,
					x: `-=${endPosition}`,
					ease: 'linear',
					onComplete: () => {
						timeline.seek(0);
					}
				}
			);
		});
	});
</script>

<div class="text-center">
	<Subtitle>{title}</Subtitle>
	<div bind:this={container} class="mt-16 relative w-full h-16 overflow-hidden">
		{#each Array.from({ length: numberOfCircles }) as _, index}
			<div
				bind:this={circles[index]}
				class="absolute bg-black rounded-full h-8 w-8 md:h-16 md:w-16 m-0"
			>
				{index}
			</div>
		{/each}
	</div>
</div>
