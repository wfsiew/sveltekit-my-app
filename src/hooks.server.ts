/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  const authCookie = event.cookies.get('token');
  if (authCookie) {
    const sessionUser = {
      id: 1,
      email: 'ben@yopmail.com'
    };
    event.locals.user = sessionUser;
  }

  return await resolve(event);
  // const url = event.url.pathname;
  // if (url === '/login') {
  //   return await resolve(event);
  // }

  // else {
  //   if (purl.some((x) => {
  //     if (url.startsWith(x)) {
  //       return true;
  //     }

  //     return false;
  //   })) {
  //     if (authCookie) {
  //       return await resolve(event);
  //     }
  //   }
  // }

  // throw redirect(302, '/login');
}

// https://www.okupter.com/blog/handling-auth-with-jwt-in-sveltekit