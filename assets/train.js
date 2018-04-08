// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCnFnzZ1FaKZXfU1zxKasTfWFIuDnHxZXk",
    authDomain: "alex-s-first-project.firebaseapp.com",
    databaseURL: "https://alex-s-first-project.firebaseio.com",
    projectId: "alex-s-first-project",
    storageBucket: "alex-s-first-project.appspot.com",
    messagingSenderId: "597228143545"
  };
  firebase.initializeApp(config);
//Create a variable to reference the database
  var database = firebase.database();

  //Values to be captured in the train scheduler

  var name = "";
  var destination = "";
  var traintime = "";
  var randomFormat = "HH:mm:ss";
  var convertedDate = moment(traintime, randomFormat);
  var frequency = ""

  //Time difference calculation
var minutesAway =  moment(convertedDate).diff(moment(), "minutes");



// Capture Button Click
$("#submit-bid").on("click", function() {
    // Don't refresh the page!
    event.preventDefault();

    // YOUR TASK!!!
    // Code in the logic for storing and retrieving the most recent user.
    // Don't forget to provide initial data to your Firebase database.
    name = $("#train-name").val().trim();
    destination = $("#destination-name").val().trim();
    traintime = $("#first-train").val().trim();
    frequency = $("#frequency").val().trim();

    database.ref().push({
      name: name,
      destination: destination,
      traintime: traintime,
      frequency: frequency
    });

  });

  // Firebase watcher + initial loader HINT: .on("value")
  database.ref().on("value", function(snapshot) {

    // Log everything that's coming out of snapshot
    console.log(snapshot.val());
    console.log(snapshot.val().name);
    console.log(snapshot.val().destination);
    console.log(snapshot.val().traintime);
    console.log(snapshot.val().frequency);

    // Change the HTML to reflect
  

    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });