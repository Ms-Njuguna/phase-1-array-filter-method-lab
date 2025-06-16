// Code your solution here
//function that takes an array of drivers' names and a string as arguments, and returns the matching list of drivers

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, value) {
  return array.filter(driver => driver.toLowerCase() === value.toLowerCase());
}

findMatching(drivers, 'Sally');
console.log(findMatching(drivers, 'Sally'));


function fuzzyMatch(array, value) {   
  return array.filter(driver => driver.toLowerCase().startsWith(value.toLowerCase()));
}

fuzzyMatch(drivers, 'A');
console.log(fuzzyMatch(drivers, 'A'));


const driversData = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

function matchName(array, nameString) {
  return array.filter(driver => driver.name.toLowerCase() === nameString.toLowerCase());
}

console.log(matchName(driversData, 'Ann'));