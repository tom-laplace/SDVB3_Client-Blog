<script>
/** @type {import('./$types').PageData} */
export let data;
</script>

<div class="flex flex-col items-center justify-center">
	{#each data.props.posts as post}
		<div class="w-1/3 bg-white shadow-md rounded-lg p-4 my-4">
			<h2 class="text-xl font-bold">{post.title}</h2>
			<p class="text-gray-600">{post.content}</p>
			<p class="text-gray-600">{post.commentsCount} {post.commentsCount === 0 ? 'commentaire' : 'commentaires'}
			</p>
		</div>
	{/each}
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
