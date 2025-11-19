/**
 * @author Bianca Boo
 * @version 1.0.0
 * @date 2025-11-14
 * @fileoverview This program will calculate change in coins
 */

package main

import "fmt"

func main() {
    // DECLARE variables
    var inputCents int
    var cents int
    var toonies int
    var dollars int
    var quarters int
    var dimes int
    var nickels int
    var pennies int

    // INITIALIZE variables
    inputCents = 0
    cents = 0
    toonies = 0
    dollars = 0
    quarters = 0
    dimes = 0
    nickels = 0
    pennies = 0

    // GET input value
    inputCents = 163

    // INITIALIZE working variable
    cents = inputCents

    // PROCESS - calculate coins
    toonies = cents / 200
    cents = cents % 200

    dollars = cents / 100
    cents = cents % 100

    quarters = cents / 25
    cents = cents % 25

    dimes = cents / 10
    cents = cents % 10

    nickels = cents / 5
    cents = cents % 5

    pennies = cents

    // OUTPUT - display result
    fmt.Printf("Your change is: %d toonies, %d dollars, %d quarters, %d dimes, %d nickels and %d pennies.\n",
        toonies, dollars, quarters, dimes, nickels, pennies)

    fmt.Println("\nDone")
}