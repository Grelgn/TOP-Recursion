export default function fibs(n) {
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
	console.log(fibsArray);
}
