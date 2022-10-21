
/*
 * Prompt 1:
 *  A variable called myFavoriteNumber has been declared on one line; assign it a value on the next line.
 */

const { subset } = require("semver");

let myFavoriteNumber = 26;

// console.log("My favorite number is " + myFavoriteNumber)

/*
 * Prompt 2:
 *
 * Three variables have been declared. The first one should be a string data type, the second should be a boolean data type, and the third one should be a number data type.
 */

let myFirstVariable = "Twenty six"
let mySecondVariable = "true"
let myThirdVariable = 26

// console.log(myFirstVariable)
// console.log(mySecondVariable)
// console.log(myThirdVariable)

/*
 * Prompt 3:
 *
 * Create a variable and assign a number to it. On a separate line for each:
 *   - add a number to your variable
 *   - subtract a number from your variable
 *   - multiply your variable by 3
 *   - divide your variable by 7
 *   - calculate the remainder of dividing your variable by 2
 */

let myNumber = 27

let add = myNumber + 1
// console.log(add)

let subtract = myNumber - 1 
// console.log(subtract)

let multiply = myNumber * 2
// console.log(multiply)

let divide = myNumber / 2
// console.log(divide)

let remainder = myNumber % 2 
// console.log(remainder)

/*
 * Prompt 4:
 *
 * Create a variable called firstName and assign it to a string of your first
 * name. Create a variable called lastName and assign it to a string of your
 * last name.
 *
 * Create a variable called fullName and use addition to combine your firstName
 * and lastName variables. Be sure to add a space between the first and last names.
 */

let firstName = "Chloe"
let lastName = "Wigsten"
let fullName = firstName + " " + lastName

console.log(fullName)

/*
 * Prompt 5:
 *
 * Create a variable called hello and assign it the string 'hello'; create
 * a variable called world and assign it the string 'world'.
 *
 * Create a variable called message and use string interpolation to assign it
 * the value 'hello world!'.
 */

let hello = "hello"
let world = "world"
let message = `${hello} ${world}`

console.log(message)