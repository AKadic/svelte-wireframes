<script lang="ts">
	import Link from '$lib/components/Link';
	import Subtitle from '$lib/components/Subtitle';
	import Text from '$lib/components/Text';

	export let title: String;
	export let subtitle: String;
</script>

<div class="flex flex-col items-center w-2/5 text-center mx-auto p-32">
	<Subtitle>{title}</Subtitle>
	<div class="mt-16">
		<Text>
			{subtitle}
		</Text>
	</div>

	<div class="mt-8 w-full">
		<Link>Start free trial</Link>
	</div>
</div>
