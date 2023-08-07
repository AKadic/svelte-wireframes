<script lang="ts">
	export let type: 'primary' | 'secondary' | 'nav' = 'primary';
	export let url = '#';
</script>

{#if type === 'primary'}
	<a
		class="bg-black rounded-md overflow-hidden text-white text-base px-4 py-2 flex justify-center"
		href={url}
	>
		<slot />
	</a>
{:else if type === 'secondary'}
	<a
		class="border border-black overflow-hidden rounded-md text-base px-4 py-2 flex justify-center"
		href={url}
	>
		<slot />
	</a>
{:else if type === 'nav'}
	<a class="rounded-md overflow-hidden text-base px-4 py-2 flex justify-center" href={url}>
		<slot />
	</a>
{/if}
