import { fail, redirect } from '@sveltejs/kit';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().trim().email({ message: 'Email is invalid.' }).min(1, { message: 'Email field is required.' }),
  password: z.string().trim().min(1, { message: 'Password field is required.' })
});

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
  const user = event.locals.user;
  if (user) {
    throw redirect(302, '/');
  }
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async (event) => {
    const data = await event.request.formData();
    const x = Object.fromEntries(data);
    const a = await loginSchema.safeParseAsync(x);
    const email = data.get('email');
    const password = data.get('password');
    if (!a.success) {
      const errors = a.error.errors.map((e) => {
        return {
          field: e.path[0],
          message: e.message
        };
      });
      return fail(400, { email, error: true, errors });
    }

    event.cookies.set('token', 'aaa', {
      httpOnly: true,
			path: '/',
			secure: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24
    });
    throw redirect(302, '/');

    // return {
    //     Headers: { Location: '/' },
    //     status: 302
    // }
  }
}