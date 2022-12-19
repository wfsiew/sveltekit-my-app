import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
  event.cookies.delete('token');
  throw redirect(302, '/login');
}