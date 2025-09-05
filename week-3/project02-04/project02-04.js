/*    JavaScript 7th Edition
    Chapter 2
    Project 02-04

    Application to calculate the cost of a restaurant order plus tax
    Author: Will Southard
    Date: 8/15/25

    Filename: project02-04.js
*/

// declare global constants for the application
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.055;

// Event handler for the form
document.getElementById("chicken").onchange = calcTotal;
document.getElementById("halibut").onchange = calcTotal;
document.getElementById("burger").onchange = calcTotal;
document.getElementById("salmon").onchange = calcTotal;
document.getElementById("salad").onchange = calcTotal;

// Calculate the total cost of the items
function calcTotal() {
  let cost = 0;
  let buyChicken = document.getElementById("chicken").checked;
  let buyHalibut = document.getElementById("halibut").checked;
  let buyBurger = document.getElementById("burger").checked;
  let buySalmon = document.getElementById("salmon").checked;
  let buySalad = document.getElementById("salad").checked;

  // Add the cost of the items
  if (buyChicken) cost += CHICKEN_PRICE;
  if (buyHalibut) cost += HALIBUT_PRICE;
  if (buyBurger) cost += BURGER_PRICE;
  if (buySalmon) cost += SALMON_PRICE;
  if (buySalad) cost += SALAD_PRICE;

  // Display the total cost
  document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

  // Add the sales tax to the total cost
  let tax = cost * SALES_TAX;
  document.getElementById("foodTax").innerHTML = formatCurrency(tax);

  // Add the total cost and tax to get the final bill
  let totalCost = cost + tax;
  document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}

// Function to display a numeric value as a text string in the format $##.## 
function formatCurrency(value) {
    return "$" + value.toFixed(2);
}
