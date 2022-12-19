<script>
	import '../app.css';
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<Nav signin={data.signin} />
<div class="flex h-screen">
	<div class="m-auto">
		<slot />
	</div>
</div>

<Footer />
