/* Quiz game

Create a quiz game that with 10 questons. Try to use functions where possible.
In the HTML page you should include the title "Welcome to quizGame" and also include a custom created logo of the game(use an online logo creator like Looka).
Deploy your applicaiton to Netlify and share the link.

Rules
For each question the user will have 1 minute.
For each question there are four possible answers. Only one is correct.
For each correct answer the user will get 100 euros.
If the answer is wrong user will get 0 euros
If the answer is out of time user's collected amount will be reduced by 50 euros.
When all questions are done. Show a message on the screen with the bellow message.
If the user answered all the questions correclty, add a bonus question to double or lose his amount.

"Thank you for playing {username}. Your final won amount is {xxx} euros!"
 */

//1.Asking the username for the player
let username = prompt("Give me your name:");

//2. Creating arrays for questions and answers

const questions = [
  `Questions and Answers
What is the capital of Japan?
a. Seoul
b. Tokyo (Correct)
c. Beijing
d. Bangkok`,
  `What is 5 × 6?
a. 28
b. 30 (Correct)
c. 32
d. 35`,
  `Which planet is known as the Red Planet?
a. Venus
b. Mars (Correct)
c. Jupiter
d. Mercury`,
  `What is the largest mammal?
a. African Elephant
b. Blue Whale (Correct)
c. Giraffe
d. Great White Shark`,
  `Which language is primarily spoken in Brazil?
a. Spanish
b. Portuguese (Correct)
c. French
d. Italian`,
  `How many continents are there?
a. 5
b. 6
c. 7 (Correct)
d. 8`,
  `What is the freezing point of water?
a. 0°C (Correct)
b. 10°C
c. -10°C
d. 100°C`,
  `Which organ is responsible for pumping blood in the human body?
a. Liver
b. Lungs
c. Heart (Correct)
d. Brain
`,
  `What is the square root of 81?
a. 7
b. 8
c. 9 (Correct)
d. 10`,
  `What is the chemical symbol for water?
a. O2
b. H2O (Correct)
c. CO2
d. HO2`,
];

const answers = [`b`, `b`, `b`, `b`, `b`, `c`, `a`, `c`, `c`, `b`];

//3. Making a loop with the questions

let score = 0;
for (let i = 0; i < questions.length; ii++) {
  let userAnswer = prompt(questions[i] + `Enter your answer (a, b, c, or d):`);
  if (userAnswer.toLowerCase() === answers[i]) {
    console.log(`Question ${i + 1}: Correct!`);
    score++;
  } else {
    console.log(`Question ${i + 1}: Wrong.`);
  }
}
