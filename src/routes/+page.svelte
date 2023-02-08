<script>
/** @type {import('./$types').PageData} */
export let data;

console.log(data)
</script>

<h1 class="text-3xl font-bold underline">Bienvenue sur twister</h1>

<!-- display all the posts -->

{#each data.props.posts as post}
	<div class="bg-white shadow-md rounded-lg p-4 my-4">
		<h2 class="text-xl font-bold">{post.title}</h2>
		<p class="text-gray-600">{post.content}</p>
	</div>
{/each}

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
