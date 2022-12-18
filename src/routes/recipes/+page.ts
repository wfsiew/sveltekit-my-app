import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load() {
  const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;
  const res = await fetch(url);
  const { results } = await res.json();
  if (res.ok) {
    return {
      recipes: results
    }
  }

  throw error(404, 'Cannot fetch recipes.');
}
//51.44