<script>
    export let signin = false;
</script>

<nav class="px-4 py-3 bg-purple-900 text-white">
    <a class="mx-2 hover:underline" data-sveltekit-reload href="/">Home</a>
    <a class="mx-2 hover:underline" data-sveltekit-reload data-sveltekit-preload-data="tap" href="/recipes">Recipes</a>
    {#if signin === false}
        <a class="mx-2 hover:underline" data-sveltekit-reload href="/login">Login</a>
    {/if}
    <a class="mx-2 hover:underline" data-sveltekit-reload href="/about">About</a>
    {#if signin}
        <a class="mx-2 hover:underline" data-sveltekit-reload href="/logout">Logout</a>
    {/if}
</nav>