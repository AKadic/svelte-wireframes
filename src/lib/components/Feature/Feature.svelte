<script lang="ts">
	import Link from '$lib/components/Link/Link.svelte';
	import Subtitle from '$lib/components/Subtitle/Subtitle.svelte';

	export let title: string;
	export let subtitle: string;
	export let imageSrc: string | undefined = undefined;
	export let reversed = false;
</script>

<div class="flex py-16" class:flex-row-reverse={reversed}>
	<div class="flex-1 flex" class:pr-32={!reversed} class:pl-32={reversed}>
		<div
			class="flex flex-col items-start justify-center w-3/5 ml-auto"
			class:ml-auto={!reversed}
			class:mr-auto={reversed}
		>
			<Subtitle>{title}</Subtitle>
			<p class="mt-16">{subtitle}</p>
			<div class="mt-8 w-1/3">
				<Link type="secondary">Learn More</Link>
			</div>
		</div>
	</div>

	<div
		class="flex flex-1 justify-center items-center min-h-[600px]"
		class:bg-black={!imageSrc}
		class:relative={imageSrc}
	>
		{#if imageSrc}
			<div class="h-auto w-full">
				<div
					style={`background-image: url(${imageSrc});`}
					class="absolute left-0 right-0 top-0 bottom-0 bg-cover bg-center"
				/>
			</div>
		{:else}
			<div class="bg-white w-1/2 h-1/2" />
		{/if}
	</div>
</div>
