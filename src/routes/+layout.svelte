<script>
    import "../app.css";
    import Nav from '$lib/Nav.svelte';
    import Footer from '$lib/Footer.svelte';
</script>

<Nav />
<div class="flex h-screen">
    <div class="m-auto">
        <slot></slot>
    </div>
</div>

<Footer />