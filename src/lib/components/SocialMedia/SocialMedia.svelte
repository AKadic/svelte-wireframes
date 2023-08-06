<div class="flex justify-between w-1/5 mx-auto">
	{#each new Array(5).fill(5).map((_, i) => i) as index}
		<div class="border border-black rounded-full h-8 w-8" />
	{/each}
</div>
