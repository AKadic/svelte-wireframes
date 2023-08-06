<script lang="ts">
	import Link from '$lib/components/Link/Link.svelte';
	import Subtitle from '$lib/components/Subtitle/Subtitle.svelte';

	export let title: String;
	export let subtitle: String;
	export let imageSrc: String | undefined = undefined;
	export let reversed = false;
</script>

<div class="flex" class:flex-row-reverse={reversed}>
	<div class="flex flex-col items-start flex-1 p-32">
		<Subtitle>{title}</Subtitle>
		<p class="mt-16">{subtitle}</p>
		<div class="mt-8 w-1/3">
			<Link type="secondary">Learn More</Link>
		</div>
	</div>

	<div
		class="flex flex-1 justify-center items-center h-[600px]"
		class:bg-black={!imageSrc}
		class:relative={imageSrc}
	>
		{#if imageSrc}
			<div
				style={`background-image: url(${imageSrc});`}
				class="absolute left-0 right-0 top-0 bottom-0 bg-cover bg-center"
			/>
		{:else}
			<div class="bg-white w-1/2 h-1/2" />
		{/if}
	</div>
</div>
