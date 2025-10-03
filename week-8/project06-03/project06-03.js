"use strict";
/*    JavaScript 7th Edition
    Chapter 6
    Project 06-03

    Script to complete a form containing billing and shipping address information
    Author: William Southard
    Date: 10/2/2025   

    Filename: project06-03.js
*/

// Add the useShip variable
let useShip = document.getElementById("useShip");

// Add an event listener to use the copyShippingToBilling function when clicked
useShip.addEventListener("click", copyShippingToBilling);

// Add functio that copies values from the shipping fields to the corresponding billing fields
function copyShippingToBilling() {
    if (useShip.checked) {
        // Copy the shipping fields if the checkbox is checked
        let firstnameShip = document.getElementById("firstnameShip");
        let lastnameShip = document.getElementById("lastnameShip");
        let address1Ship = document.getElementById("address1Ship");
        let address2Ship = document.getElementById("address2Ship");
        let cityShip = document.getElementById("cityShip");
        let stateShip = document.getElementById("stateShip");
        let countryShip = document.getElementById("countryShip");
        let codeShip = document.getElementById("codeShip");

        let firstnameBill = document.getElementById("firstnameBill");
        let lastnameBill = document.getElementById("lastnameBill");
        let address1Bill = document.getElementById("address1Bill");
        let address2Bill = document.getElementById("address2Bill");
        let cityBill = document.getElementById("cityBill");
        let stateBill = document.getElementById("stateBill");
        let countryBill = document.getElementById("countryBill");
        let codeBill = document.getElementById("codeBill");

        // Set the selectedIndex property of the stateBill to the selectedIndex property of the stateShip
        stateBill.selectedIndex = stateShip.selectedIndex;

        // Set the value of the billing fields to the values of the shipping fields
        firstnameBill.value = firstnameShip.value;
        lastnameBill.value = lastnameShip.value;
        address1Bill.value = address1Ship.value;
        address2Bill.value = address2Ship.value;
        cityBill.value = cityShip.value;
        countryBill.value = countryShip.value;
        codeBill.value = codeShip.value;
    }
}

// Add formElements variable
let formElements = document.querySelectorAll("input[type='text']");

// Add the fieldCount variable
let fieldCount = formElements.length;

// Add the errorBox variable
let errorBox = document.getElementById("errorBox");

// Add event listeners to all form elements for validation
for (let i = 0; i < formElements.length; i++) {
    formElements[i].addEventListener("invalid", showValidationError);
}

// Create the showValidationError(evt) function
function showValidationError(evt) {
    evt.preventDefault();
    errorBox.textContent = "Complete all highlighted fields";
}