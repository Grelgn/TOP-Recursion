export function fibs(n) {
    if (n < 1) return "Invalid"
    if (n === 1) return [0];
	let fibPrev = 1;
	let fibNow = 1;
	let fibNext;
	const fibsArray = [0, 1];
	for (let i = 0; i < n - 2; i++) {
		fibsArray.push(fibNow);
		fibNext = fibNow + fibPrev;
		fibPrev = fibNow;
		fibNow = fibNext;
	}
	return fibsArray;
}

export function fibsRec(n) {
    if (n < 1) return "Invalid"
	if (n === 1) return [0];
	if (n === 2) return [0, 1];
	const fibPrev = fibsRec(n - 1);
	return [...fibPrev, fibPrev.at(-2) + fibPrev.at(-1)];
}
