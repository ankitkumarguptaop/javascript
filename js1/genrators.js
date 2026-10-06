function* numberGenerator() {
  console.log("Execution started");
  yield 1; // Pauses here and returns 1
  yield 2; // Resumes, then pauses here and returns 2
  return 3; // Completes the generator
}

const iterator = numberGenerator();

// Calling the generator doesn't run it immediately. 
// You must call .next() to move through the yields.
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: true }


function* infinite() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const generator = infinite(); // "Generator { }"

console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
// …
