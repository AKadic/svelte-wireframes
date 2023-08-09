<script lang="ts">
	import Link from '$lib/components/Link/Link.svelte';
	import Text from '$lib/components/Text/Text.svelte';
	import Title from '$lib/components/Title/Title.svelte';

	export let title: string | undefined = undefined;
	export let subtitle: string | undefined = undefined;
	export let cta: string | undefined = undefined;
	export let imageSrc: string | undefined = undefined;
	export let blur = false;
</script>

<div class="relative h-screen">
	{#if imageSrc}
		<div
			style={`background-image: url(${imageSrc});`}
			class="absolute left-0 right-0 top-0 bottom-0 bg-cover bg-center"
		/>
	{/if}

	{#if blur}
		<div class="absolute left-0 right-0 top-0 bottom-0 backdrop-blur-sm bg-black/30" />
	{/if}

	<div class="absolute left-0 right-0 top-0 bottom-0">
		<div class="flex flex-col items-center justify-center p-32 h-full" class:text-white={blur}>
			{#if title}
				<Title>{title}</Title>
			{/if}

			{#if subtitle}
				<div class="mt-16 w-1/4 text-center">
					<Text>{subtitle}</Text>
				</div>
			{/if}

			{#if cta}
				<div class="mt-8 w-1/5">
					<Link>{cta}</Link>
				</div>
			{/if}
		</div>
	</div>
</div>
