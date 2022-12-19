/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
  const user = event.locals.user;
  if (user) {
    return {
      signin: true
    }
  }

  return {
    signin: false
  }
}