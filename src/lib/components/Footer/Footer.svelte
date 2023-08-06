<script lang="ts">
	import SocialMedia from '$lib/components/SocialMedia/SocialMedia.svelte';
	import Text from '$lib/components/Text/Text.svelte';
</script>

<div class="flex flex-col justify-center p-16">
	<div class="flex items-center justify-around py-8 w-3/5 mx-auto">
		<div class="flex flex-1 justify-around">
			<div class="font-bold text-lg">
				<Text>Product</Text>
			</div>

			<div class="font-bold text-lg">
				<Text>Features</Text>
			</div>

			<div class="font-bold text-lg">
				<Text>Resources</Text>
			</div>
		</div>

		<div class="font-bold text-3xl uppercase mx-16">
			<Text>Trade</Text>
		</div>

		<div class="flex flex-1 justify-around">
			<div class="font-bold text-lg">
				<Text>About</Text>
			</div>

			<div class="font-bold text-lg">
				<Text>Blog</Text>
			</div>

			<div class="font-bold text-lg">
				<Text>Support</Text>
			</div>
		</div>
	</div>

	<div class="py-8 w-3/4 mx-auto flex justify-center">
		<div class="border-b border-black w-full h-[1px]" />
	</div>

	<div class="py-8">
		<SocialMedia />
	</div>

	<div class="py-8 flex justify-center gap-4">
		<div>© 2010 — 2020</div>
		<div>Privacy — Terms</div>
	</div>
</div>
