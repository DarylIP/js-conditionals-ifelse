//In this mini project, you will get to review JavaScript fundamentals like functions, variables, conditionals and more by building a gradebook app.

function getAverage(scores) {
  //declares a constant variable score that represents the value of each element in the array scores during each iteration.
  //The for...of syntax loops through the values in the scores array.
  //Each iteration provides one element from the array scores.
  let sum = 0;
  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

//this is another solution for getting the average
// function getAverage(scores) {
//   let sum = 0; // array[92, 88, 12], sum =0(initial value), 0+92=92, 92+88=180,180+12=192

//   // Loop through each score and add it to the sum
//   for (let i = 0; i < scores.length; i++) { //goes thru each element of the array // i < scores.length: Loop runs as long as i is less than the number of elements in the array.
//     sum += scores[i];
//   }

//   // Calculate the average
//   let average = sum / scores.length;// for this eg has 10 numbers of element hence divide by 10

//   return average;
// }

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])); // 71.7
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95])); // 85.4

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F"; //checks if the grade is not "F", returning true for passing grades and false otherwise.
}

function studentMsg(totalScores, studentScore) {
  if (hasPassingGrade(studentScore)) {
    return (
      "Class average: " +
      getAverage(totalScores) +
      ". Your grade: " +
      getGrade(studentScore) +
      ". You passed the course."
    );
  } else {
    return (
      "Class average: " +
      getAverage(totalScores) +
      ". Your grade: " +
      getGrade(studentScore) +
      ". You failed the course."
    );
  }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
