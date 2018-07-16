// Gets the myBands object from the bands file.
var fun = require("./band.js");

// Loop through band list and print out details
for (var key in fun) {
  console.log("A " + key + " band is " + fun[key] + ".");
}