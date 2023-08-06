<script lang="ts">
	export let type: 'primary' | 'secondary' = 'primary';
</script>

{#if type === 'primary'}
	<a class="bg-black rounded-md text-white text-base px-4 py-2 flex justify-center" href="#">
		<slot />
	</a>
{:else if type === 'secondary'}
	<a class="border border-black rounded-md text-base px-4 py-2 flex justify-center" href="#">
		<slot />
	</a>
{/if}
