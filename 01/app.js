const randomNumber = Math.round(Math.random() * 20)
console.log(randomNumber)

if (randomNumber > 5) {
	console.log('Wypisuję liczby od 5 do ' + randomNumber + ':')
	for (let number = 5; number <= randomNumber; number++) {
		console.log(number)
	}
} else {
	console.log('Wylosowana liczba jest zbyt mała, aby użyć pętli.')
}
