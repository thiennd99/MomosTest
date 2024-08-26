import { User } from '@/types/schemas/user';

export type UserGroup = ReturnType<typeof groupContacts>[number];

// Function to group contacts by the first letter of their full name
export function groupContacts(contacts: Array<User>) {
	const grouped: Record<string, Array<User>> = {};

	contacts.forEach(contact => {
		const { fullName } = contact;
		const firstLetter = fullName[0].toUpperCase(); // Get the first letter and convert to uppercase
		if (!grouped[firstLetter]) {
			grouped[firstLetter] = [];
		}

		grouped[firstLetter].push(contact);
	});

	// Convert the grouped object into an array of sections
	return Object.keys(grouped)
		.sort()
		.map(letter => ({
			title: letter,
			data: grouped[letter],
		}));
}
