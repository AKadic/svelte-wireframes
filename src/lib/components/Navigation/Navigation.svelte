<script lang="ts">
	import Link from '$lib/components/Link/Link.svelte';
	import Text from '$lib/components/Text/Text.svelte';

	const amountOfLinks = 4;
</script>

<div class="w-full px-16 py-4">
	<div class="flex items-center justify-start">
		<div class="font-bold text-3xl uppercase">
			<Text>Trade</Text>
		</div>

		<div class="ml-auto flex gap-4">
			{#each new Array(amountOfLinks).fill(amountOfLinks).map((_, i) => i) as index}
				<Link type="nav" url="#">{`Link ${index + 1}`}</Link>
			{/each}
		</div>

		<div class="ml-4">
			<Link type="secondary"><span class="px-8">Sign Up</span></Link>
		</div>
	</div>
</div>
