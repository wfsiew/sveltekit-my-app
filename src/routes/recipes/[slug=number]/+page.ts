import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
  const url = `https://api.spoonacular.com/recipes/${params.slug}/information?apiKey=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();
  if (res.ok) {
    return {
      recipe: data
    }
  }

  throw error(404, 'Cannot fetch recipe.');
}