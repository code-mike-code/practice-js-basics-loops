const x = 10;
let iteration = 0;
let randomNumber = -1;

while(randomNumber !== x) {
    randomNumber = Math.round(Math.random() * 10);
    iteration++;
}
console.log(`Wylosowano liczbę ${x} po ${iteration} próbach`);
