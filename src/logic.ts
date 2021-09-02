export interface sudokuField {
	x: number;
	y: number;
	value: number;
}

export interface SettingsI {
	size: number;
	difficulty: number;
}

export const getGame = (size: number, difficulty: number): sudokuField[][] => {
	const result: sudokuField[][] = [];

	for (let i = 0; i < size ** 2; i++) {
		const sectionResult: sudokuField[] = [];
		let availNumbers: number[] =
			size === 2 ? [1, 2, 3, 4] : [1, 2, 3, 4, 5, 6, 7, 8, 9];

		for (let k = 0; k < size ** 2; k++) {
			const newX =
				(i - Math.floor(i / size) * size) * 3 + k - Math.floor(k / size) * size;
			const newY = Math.floor(i / 3) * 3 + Math.floor(k / 3);
			const newValue = createNumber(newX, newY, availNumbers, result);

			availNumbers = availNumbers.filter((evt) => evt !== newValue);
			sectionResult.push({ x: newX, y: newY, value: newValue });
		}
		result.push(sectionResult);
	}

	return result;
};

const createNumber = (
	x: number,
	y: number,
	freeNumbers: number[],
	gameTillNow: sudokuField[][]
): number => {
	let availNbms = freeNumbers;
	let works: boolean = false;
	let resultValue: number = 0;

	while (!works) {
		const chosenNumber: number =
			availNbms[Math.floor(Math.random() * availNbms.length)];
		let failed: boolean = false;

		if (gameTillNow !== undefined) {
			gameTillNow.forEach((e) =>
				e.forEach((evt) => {
					if (evt.x === x || evt.y === y) {
						if (evt.value === chosenNumber) {
							availNbms = availNbms.filter((evt) => evt !== chosenNumber);
							failed = true;
						}
					}
				})
			);
		}

		if (failed === false) {
			works = true;
			resultValue = chosenNumber;
		}
	}

	return resultValue;
};
