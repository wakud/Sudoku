// JS скрипт, який виводить чи дана головоломка судоку є розв'язувальною.

const N = 9;

// Функція перевірки, чи всі елементи масиву мають значення в діапазоні від 1 до 9.
function isRange(board) {
	for (let i = 0; i < N; i++)	{
		for (let j = 0; j < N; j++)	{
			if (board[i][j] <= 0 || board[i][j] > 9) {
				return false;
			}
		}
	}
	return true;
}

// Функція, яка отримує двовимірний масив, що представляє дошку Судоку, 
// і повертає true, якщо це правильний розв'язок, або false у протилежному випадку.
function validSolution(board)
{
	if (!isRange(board)) {
		return false;
	}

	// перевіряємо, чи в рядку 'i' всі елементи унікальні в межах від 1 до N включно.
	for (let i = 0; i < N; i++) {
		let unique = Array(N + 1).fill(false);
		for (let j = 0; j < N; j++) {
			const Z = board[i][j];
			if (unique[Z]) {
				return false;
			}
			unique[Z] = true;
		}
	}

	// перевіряємо, чи в стовпці 'i' всі елементи унікальні в межах від 1 до N включно.
	for (let i = 0; i < N; i++) {
		let unique = Array(N + 1).fill(false);
		for (let j = 0; j < N; j++) {
			const Z = board[j][i];
			if (unique[Z]) {
				return false;
			}
			unique[Z] = true;
		}
	}

	// перевіряємо чи всі блоки розміром 3х3 містять унікальні елементи в межах від 1 до N включно.
	for (let i = 0; i < N - 2; i += 3) {
		for (let j = 0; j < N - 2; j += 3) {
			let unique = Array(N + 1).fill(false);
			for (let k = 0; k < 3; k++) {
				for (let l = 0; l < 3; l++) {
					const X = i + k;
					const Y = j + l;
					const Z = board[X][Y];
					if (unique[Z]) {
						return false;
					}
					unique[Z] = true;
				}
			}
		}
	}

	return true;
}
