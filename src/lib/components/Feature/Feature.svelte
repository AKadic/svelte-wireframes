<script lang="ts">
	import Link from '$lib/components/Link';
	import Subtitle from '$lib/components/Subtitle';

	export let title: String;
	export let subtitle: String;

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

	<div class="flex flex-1 justify-center items-center h-[600px] bg-black">
		<div class="bg-white w-1/2 h-1/2" />
	</div>
</div>
