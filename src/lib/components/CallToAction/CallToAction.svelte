<script lang="ts">
	import Link from '$lib/components/Link/Link.svelte';
	import Subtitle from '$lib/components/Subtitle/Subtitle.svelte';
	import Text from '$lib/components/Text/Text.svelte';

	export let title: string | undefined = undefined;
	export let subtitle: string | undefined = undefined;
	export let cta: string | undefined = undefined;
</script>

<div class="flex flex-col items-center w-2/5 text-center mx-auto p-32">
	{#if title}
		<Subtitle>{title}</Subtitle>
	{/if}

	<div>
		{#if subtitle}
			<div class="mt-16">
				<Text>
					{subtitle}
				</Text>
			</div>
		{/if}
	
		{#if cta}
			<div class="mt-8 w-full">
				<Link>{cta}</Link>
			</div>
		{/if}
	</div>
</div>
