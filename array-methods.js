var dataset = require('./dataset.json');

/*
  create an array with accounts from bankBalances that are
  greater than 100000
  assign the resulting new array to `hundredThousandairs`
*/
var hundredThousandairs = dataset.bankBalances.filter(function (element) {
  return parseInt(element.amount) >= 100000;
});
//console.log(hundredThousandairs);

/* set sumOfBankBalances to be the sum of all value held at `amount` for each bank object*/

var sumOfBankBalances = null;
sumOfBankBalances = dataset.bankBalances.reduce(function (total, element) {
  return Math.floor(parseInt(total) + parseInt(element.amount));
}, 0);

/*from each of the following states:
  Wisconsin
  Illinois
  Wyoming
  Ohio
  Georgia
  Delaware
take each `amount` and add 18.9% interest to it rounded to the nearest dollar 
and then sum it all up into one value saved to `sumOfInterests`
*/
var sumOfInterests = dataset.bankBalances.filter(function (obj) {
  //console.log(obj)
  var stateStats = ["WI", "IL", "WY", "OH", "GA", 'DE']
  return stateStats.indexOf(obj.state) !== -1
}).reduce(function (total, currentValue) {
  return Math.round(parseInt(total) + parseInt(currentValue.amount) * .189)
}, 0);
/*
  aggregate the sum of bankBalance amounts
  grouped by state
  set stateSums to be a hash table where

  the key is:
    the two letter state abbreviation
  and the value is:
    the sum of all amounts from that state
    the value must be rounded to the nearest dollar

  note: During your summation (
    if at any point durig your calculation where the number looks like `2486552.9779399997`
    round this number to the nearest dollar before moving on.
  )
 */
var stateSums = dataset.bankBalances.reduce(function (previousState, currentState) {
  let key = currentState.state
  let amount = currentState.amount
  if (previousState[key]) {
    previousState[key] += parseInt(currentState.amount)
  } else {
    previousState[key] = parseInt(currentState.amount)
  }
  return previousState;
}, {})
/*
  for all states *NOT* in the following states:
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  sum the amount for each state (stateSum)
  take each `stateSum` and calculate 18.9% interest for that state
  sum the interest values that are greater than 50,000 and save it to `sumOfHighInterests`

  note: During your summation (
    if at any point durig your calculation where the number looks like `2486552.9779399997`
    round this number to the nearest dollar before moving on.
  )
 */
var sumOfHighInterests = null;
var stateVar = Object.entries(stateSums)
console.log(stateVar)
var interest = dataset.bankBalances.filter(function (obj) {
  //console.log(obj)
  var stateStats = ["WI", "IL", "WY", "OH", "GA", 'DE']
  
 },{})


console.log(interest)
/*
  set `lowerSumStates` to be an array of two letter state
  abbreviations of each state where the sum of amounts
  in the state is less than 1,000,000
 */
var lowerSumStates = null;

/*
  aggregate the sum of each state into one hash table
  `higherStateSums` should be the sum of all states with totals greater than 1,000,000
 */
var higherStateSums = null;

/*
  from each of the following states:
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware

  Check if all of these states have a sum of account values
  greater than 2,550,000

  if true set `areStatesInHigherStateSum` to `true`
  otherwise set it to `false`
 */
var areStatesInHigherStateSum = null;

/*
  Stretch Goal && Final Boss

  set `anyStatesInHigherStateSum` to be `true` if
  any of these states:
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  have a sum of account values greater than 2,550,000
  otherwise set it to be `false`
 */
var anyStatesInHigherStateSum = null;


module.exports = {
  hundredThousandairs: hundredThousandairs,
  sumOfBankBalances: sumOfBankBalances,
  sumOfInterests: sumOfInterests,
  sumOfHighInterests: sumOfHighInterests,
  stateSums: stateSums,
  lowerSumStates: lowerSumStates,
  higherStateSums: higherStateSums,
  areStatesInHigherStateSum: areStatesInHigherStateSum,
  anyStatesInHigherStateSum: anyStatesInHigherStateSum
};
