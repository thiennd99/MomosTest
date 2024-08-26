import { removeAccents } from '@/utilities/format';
import { z } from 'zod';

export const userSchema = z
	.object({
		first_name: z.string(),
		last_name: z.string(),
		phoneNumber: z.string(),
	})
	.transform(val => {
		const fullName = `${val.first_name} ${val.last_name}`;
		return {
			...val,
			fullName,
			avatarName: `${val.first_name.charAt(0)}${val.last_name.charAt(0)}`,
			removedAccentsFullName: removeAccents(fullName),
		};
	});

export const usersSchema = z.object({
	contacts: z.array(userSchema),
});

export type User = z.infer<typeof userSchema>;
