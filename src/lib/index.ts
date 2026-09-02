const BIRTHDAY = new Date('2008-03-21');

export function age(today = new Date()) {
	let years = today.getFullYear() - BIRTHDAY.getFullYear();
	const beforeBirthday =
		today.getMonth() < BIRTHDAY.getMonth() ||
		(today.getMonth() === BIRTHDAY.getMonth() && today.getDate() < BIRTHDAY.getDate());
	return beforeBirthday ? years - 1 : years;
}
