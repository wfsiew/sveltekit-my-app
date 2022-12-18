<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1 class="text-2xl text-center mb-10">Food Recipes</h1>

<div class="grid grid-cols-4 gap-4">
	{#each data.recipes as item}
		<a class="relative text-center" data-sveltekit-preload-data="tap" href={`/recipes/${item.id}`}>
			<img class="rounded-lg shadow-md" src={item.image} alt={item.title} />
			<p class="text-sm absolute z-20 top-0 mt-20 text-center inset-x-0 text-white">{item.title}</p>
		</a>
	{/each}
</div>
