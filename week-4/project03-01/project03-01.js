/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Will Southard
      Date: 8/15/25

      Filename: project03-01.js
*/

// Declare global variables
let menuItems = document.getElementsByClassName("menuItem");
let billTotal = document.getElementById("billTotal");

// Add event handlers for each menu item
for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].onchange = calcTotal;
}

// Function to calculate the total cost of the order
function calcTotal() {
    let orderTotal = 0;

    // Add the cost of each menu item
    for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].checked) {
            orderTotal += Number(menuItems[i].value);
        }
    }

    // Display the total cost
    billTotal.innerHTML = formatCurrency(orderTotal);
}

 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }