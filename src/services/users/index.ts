import { instance } from '@/services/instance';
import { usersSchema } from '@/types/schemas/user';

export async function fetchUsers() {
	const response = await instance.get('contacts').json();
	return usersSchema.parse(response);
}
