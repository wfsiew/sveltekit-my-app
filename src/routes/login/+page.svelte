<script>
	import { enhance } from '$app/forms';

	/** @type {import('./$types').ActionData} */
	export let form;
</script>

{#if form?.error}
	<div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
		<p class="font-bold">Error</p>
		{#each form?.errors as e}
			<p class="text-red-700">{e.message}</p>
		{/each}
	</div>
{/if}
<div class="flex justify-center">
	<form method="POST" class="p-4 mt-20 rounded-lg border m-auto" use:enhance>
		<h1 class="text-center text-xl">Login</h1>
		<div class="my-5 w-full">
			<label for="email">Email</label>
			<input
				type="email"
				id="email"
				name="email"
				class="p-2 rounded w-full border text-sm"
				placeholder="Email Address"
				value={form?.email ?? ''}
			/>
		</div>

		<div class="my-5 w-full">
			<label for="password">Password</label>
			<input
				type="password"
				id="password"
				name="password"
				class="p-2 rounded w-full border text-sm"
				placeholder="Password"
			/>
		</div>

		<div class="my-5 w-full">
			<button type="submit" class="p-2 w-full bg-purple-700 text-white hover:bg-purple-900 rounded">Submit</button>
		</div>
	</form>
</div>