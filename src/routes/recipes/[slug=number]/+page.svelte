<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<h1 class="text-2xl text-center mb-10">{data.recipe.title}</h1>

<div class="flex justify-between">
    <img width="200" class="rounded-lg shadow-md" src={data.recipe.image} alt={data.recipe.title}>

    <div>
       <div>
            <h2 class="text-xl font-bold">Ingredients</h2>
            {#each data.recipe.extendedIngredients as ingredient}
                <p class="text-gray-600 text-sm">{ingredient.name}</p>
            {/each}
        </div>

        <div>
            <h2 class="text-xl font-bold">Cuisines</h2>
            {#each data.recipe.cuisines as cuisines}
                <p class="text-gray-600 text-sm">{cuisines}</p>
            {/each}
        </div>
    </div>
</div>