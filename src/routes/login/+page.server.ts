import { fail, redirect } from '@sveltejs/kit';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().trim().email({ message: 'Email is invalid.' }).min(1, { message: 'Email field is required.' }),
  password: z.string().trim().min(1, { message: 'Password field is required.' })
});

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
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
    // if (!email && !password) {
    //     return fail(400, { email, missing: true, message: ['Email field is required.', 'Password field is required.']})
    // }

    // if (!email) {
    //     return fail(400, { email, missingEmail: true, message: 'Email field is required.' });
    // }

    // if (!password) {
    //     return fail(400, { email, missingPw: true, message: 'Password field is required.' });
    // }

    throw redirect(302, '/');

    // return {
    //     Headers: { Location: '/' },
    //     status: 302
    // }
  }
}