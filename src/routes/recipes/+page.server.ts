import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
  const user = event.locals.user;
  if (user) {
    return { user };
  }

  throw redirect(302, '/login');
}