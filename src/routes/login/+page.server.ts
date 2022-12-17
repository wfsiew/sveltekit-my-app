import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');
        if (!email && !password) {
            return fail(400, { email, missing: true, message: ['Email field is required.', 'Password field is required.']})
        }

        if (!email) {
            return fail(400, { email, missingEmail: true, message: 'Email field is required.' });
        }

        if (!password) {
            return fail(400, { email, missingPw: true, message: 'Password field is required.' });
        }

        throw redirect(302, '/');

        // return {
        //     Headers: { Location: '/' },
        //     status: 302
        // }
    }
}