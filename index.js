// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * the variable "count" is declared within the first function of counter 1 and outside the function of counter 2.
 * 2. Which of the two uses a closure? How can you tell?
 * the first one uses a closure, because it calls for the return of couunt added, and allows access to the parent scope of the variable while keeping the inner function private.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *counter 1 would be preferrable in a situation that involved counting the variable upwards from self-invokation each time, and counter 2 would be better for counting by just calling the function once and having it reset.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  let teamScore = Math.random();
  if (teamScore < .34) {
    teamScore = 0;
    return teamScore;
  } else if (teamScore >= .34 && teamScore < .67){
    teamScore = 1;
    return teamScore;
  } else {
    teamScore = 2;
    return teamScore;
  }
}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, number){
  let home = 0;
  let away = 0;
  for (i=0; i<number; i++){
   let homeScore = Math.random();
   if (homeScore < .34){
     homeScore = 0;
   } else if (homeScore >= .34 && homeScore < .67){
     homeScore = 1;
     home += homeScore;
   } else {
     homeScore = 2;
     home += homeScore;
   }
   let awayScore = Math.random();
   if (awayScore < .34) {
     awayScore = 0;
   } else if (awayScore >= .34 && awayScore < .67) {
     awayScore = 1;
     away += awayScore;
   } else {
     awayScore = 2;
     away += awayScore;
   }
 }
 return {
     "Home": home,
     "Away": away
   }
}

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(inning, number) {
  let awayTeam = 0;
  let homeTeam = 0;
  let inningScore = "";
  let finalScore = "";
  for (i=0; i<number; i++){
    let awayScore = Math.random();
    let homeScore = Math.random();
    if (awayScore < .34 && homeScore < .34){
      inningScore = `inning ${i + 1}: away - ${awayTeam}, home - ${homeTeam}`;
      console.log(inningScore);
    } else if (awayScore >= .34 && awayScore < .67 && homeScore <.34){
      awayScore = 1;
      awayTeam += awayScore;
      inningScore = `inning ${i + 1}: away - ${awayTeam}, home - ${homeTeam}`;
      console.log(inningScore);
    } else if (awayScore < .34 && homeScore >= .34 && homeScore < .67){
      homeScore = 1;
      homeTeam += homeScore;
      inningScore = `inning ${i + 1}: away - ${awayTeam}, home - ${homeTeam}`;
      console.log(inningScore);
    } else if (awayScore >= .34 && awayScore < .67 && homeScore >= .34 && homeScore < .67){
      awayScore = 1;
      homeScore = 1;
      awayTeam += awayScore;
      homeTeam += homeScore;
      inningScore = `inning ${i + 1}: away - ${awayTeam}, home - ${homeTeam}`;
      console.log(inningScore);
    } else if (awayScore >= .67 && homeScore < .34){
      awayScore = 2;
      awayTeam += awayScore;
      inningScore = `inning ${i + 1}: away - ${awayTeam}, home - ${homeTeam}`;
      console.log(inningScore);
    } else if (awayScore < .34 && homeScore >= .67){
      homeScore = 2;
      homeTeam += homeScore;
      inningScore = `inning ${i + 1}: away - ${awayTeam}, home - ${homeTeam}`;
      console.log(inningScore);
    } else if (awayScore >= .67 && homeScore >= .34 && homeScore < .67){
      homeScore = 1;
      awayScore = 2;
      homeTeam += homeScore;
      awayTeam += awayScore;
      inningScore = `inning ${i + 1}: away - ${awayTeam}, home - ${homeTeam}`;
      console.log(inningScore);
    } else if (awayScore >= .34 && awayScore < .67 && homeScore >= .67){
      homeScore = 2;
      awayScore = 1;
      homeTeam += homeScore;
      awayTeam += awayScore;
      inningScore = `inning ${i + 1}: away - ${awayTeam}, home - ${homeTeam}`;
      console.log(inningScore);
    } else if (awayScore >= .67 && homeScore >= .67){
      homeScore = 2;
      awayScore = 2;
      homeTeam += homeScore;
      awayTeam += awayScore;
      inningScore = `inning ${i + 1}: away - ${awayTeam}, home - ${homeTeam}`;
      console.log(inningScore);
    }
    }
    finalScore = `away: ${awayTeam} - home: ${homeTeam}`;
    return finalScore;

}


