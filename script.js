"use strict";

const submissions = [
    {
        name: "Jane",
        score: 95,
        passed: true,
    },
    {
        name: "Joe",
        score: 77,
        passed: true,
    },
    {
        name: "Jack",
        score: 59,
        passed: false,
    },
    {
        name: "Jill",
        score: 88,
        passed: true,
    },
];

const addSubmission = (array, newName, newScore) => {
    const newPassed = newScore > 60;
    array.push({newName, newScore, newPassed});
};
// addSubmission(submissions, "Jim", 2)
// console.log(submissions);

const deleteSubmissionByIndex = (array, index) => {
    array.splice(index, 1);
};
// deleteSubmissionByIndex(submissions, 4);
// console.log(submissions);

const deleteSubmissionsByName = (array, name) => deleteSubmissionByIndex(array, array.findIndex((student) => student.name === name));
// deleteSubmissionsByName(submissions, "Jill");
// console.log(submissions);

const editSubmission = (array, index, score) => {
    array[index].score = score;
    array[index].passed = score > 60; 
};
// editSubmission(submissions, 3, 2);
// console.log(submissions);
const findSubmissionByName = (array, name) => array.find((student) => student.name === name);
// console.log(findSubmissionByName(submissions, "Jill"))

const findLowestScore = (array) => array.reduce((lowest, student) => lowest < student.score ? lowest : student.score, 100);
// console.log(findLowestScore(submissions));

const findAverageScore = (array) => array.reduce((sum, student) => sum+=student.score,0)/array.length;
// console.log(findAverageScore(submissions));

const filterPassing = (array) => array.filter((student) => student.score>=60);
// console.log(filterPassing(submissions));

const filter90AndAbove = (array) => array.filter((student) => student.score>=90);
// console.log(filter90AndAbove(submissions));

//const createRange = (start, end) => [start].