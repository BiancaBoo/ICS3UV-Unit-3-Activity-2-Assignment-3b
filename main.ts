/**
 * @author Bianca Boo
 * @version 1.0.0
 * @date 2025-11-14
 * @fileoverview This program will calculate change in coins
 */

// DECLARE variables
let inputCents: number;
let cents: number;
let toonies: number;
let dollars: number;
let quarters: number;
let dimes: number;
let nickels: number;
let pennies: number;

// INITIALIZE variables
inputCents = 0;
cents = 0;
toonies = 0;
dollars = 0;
quarters = 0;
dimes = 0;
nickels = 0;
pennies = 0;

// GET input value
inputCents = 163;

// INITIALIZE working variable
cents = inputCents;

// PROCESS - calculate coins
toonies = Math.floor(cents / 200);  
cents = cents % 200;

dollars = Math.floor(cents / 100); 
cents = cents % 100;

quarters = Math.floor(cents / 25); 
cents = cents % 25;

dimes = Math.floor(cents / 10);     
cents = cents % 10;

nickels = Math.floor(cents / 5);   
cents = cents % 5;

pennies = cents;               

// OUTPUT 
console.log(`Your change is: ${toonies} toonies, ${dollars} dollars, ${quarters} quarters, ${dimes} dimes, ${nickels} nickels and ${pennies} pennies.`);

console.log("\nDone");