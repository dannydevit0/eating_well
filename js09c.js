"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Chapter case
      
      Eating Well in Season Retrieving Data from Local Storage
      Author: Olivia Gavin
      Date: 05/24/2023  
      
      Filename: js09c.js
 */

// eating well reference keys
 let keys = ["name", "email", "phone", "address", "city", "state", "zip", "allergies", "size"];
      for (let item of keys) {
      let newRow = document.createElement("tr");

       //display the storage key
        let keyCell = document.createElement("td");
       keyCell.textContent = item;
        newRow.appendChild(keyCell);

         // display the key value
       let keyValue = document.createElement("td");
       keyValue.textContent = localStorage.getItem(item);

       // append each keyname pair as a table row
        document.getElementById("prefTable").appendChild(newRow);
      }

// removing eating well keys when the remove preference button is clicked
document.getElementById("removePrefBtn").onclick = function() {
      for (let item of keys) {
            localStorage.removeItem(item);
      }
}