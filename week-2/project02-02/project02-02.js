/*    JavaScript 7th Edition
    Chapter 2
    Project 02-02

    Application to test for completed form
    Author: Will Southard
    Date:   8/15/25

    Filename: project02-02.js
*/

// form
function verifyForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    // Conditional to check for blank fields
    let output = name && email && phone ? "Thank you!" : "Please fill in all fields";
    window.alert(output);
}

//listener
const button = document.getElementById("submit");
button.addEventListener("click", verifyForm);
