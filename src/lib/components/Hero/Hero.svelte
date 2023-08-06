<script lang="ts">
	import Link from '$lib/components/Link';
	import Subtitle from '$lib/components/Subtitle';
	import Text from '$lib/components/Text';
	import Title from '$lib/components/Title';

	export let title: String;
	export let subtitle: String;
	export let imageSrc: String | undefined;
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
		<div class="flex flex-col items-center justify-center p-32 h-full">
			<Title>{title}</Title>

			<div class="mt-16 w-1/4 text-center">
				<Text>{subtitle}</Text>
			</div>

			<div class="mt-8 w-1/5">
				<Link>Start free trial</Link>
			</div>
		</div>
	</div>
</div>
