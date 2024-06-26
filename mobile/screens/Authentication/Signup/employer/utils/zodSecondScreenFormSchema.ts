import * as z from 'zod';

export const zodSecondScreenFormSchema = z
	.object({
		email: z.string().email({
			message: 'Please enter a valid email address.',
		}),
		password: z.string().min(8, {
			message: 'Your password must be of at least 8 characters.',
		}),
		confirmPassword: z.string().min(8, {
			message: 'Your password must be of at least 8 characters.',
		}),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords do not match, please check again.',
		path: ['confirmPassword'],
	});
