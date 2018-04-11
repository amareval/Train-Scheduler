//interval id

var intervalId;

//Defining the variable that will decrease the minutes away

var timer;
var diffTime;

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
  var randomFormat = "HH:mm";
  var convertedDate = moment(traintime, randomFormat);
  var frequency = ""

  //Time difference calculation
var minutesAway =  moment(convertedDate).diff(moment(), "minutes");
console.log(moment(convertedDate).format("HH:mm"));



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

    var convertedDate = moment(traintime, randomFormat);

    console.log(convertedDate);

    //Conduct calculations for the next arrival time and the time until the arrival

    var currentTime = moment();

    console.log(currentTime)

    console.log("Current Time :" + moment(currentTime).format("hh:mm"));


  


      diffTime = moment().diff(moment(convertedDate),"minutes")



    console.log("Difference in Time " + diffTime);

    //Time Apart (remainder)
    var tRemainder = diffTime % frequency;

    console.log(tRemainder)
    
    // Minute Until Train

    var tMinutesTillTrain = frequency - tRemainder;
    console.log("Minutes Till Train: " + tMinutesTillTrain);

    //Minutes until the next train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");

    // console.log(nextTrain);
    // console.log(moment(nextTrain).format("hh:mm"));

    //the next train after the beginning time
    var nextTime = moment(nextTrain).format("hh:mm")
    


    database.ref().push({

      name: name,
      destination: destination,
      traintime: traintime,
      frequency: frequency,
      nextTrain: tMinutesTillTrain,
      minutesAway: diffTime,
      nextTime: nextTime


    });

  
    timer = diffTime;
//Clear the values in the submit form
    $('input').val('');

    // var ref = firebase.database().ref().child("alex-s-first-project/minutesAway");
    // var obj = (2);
  
    // ref.update(obj);

    var ref = firebase.database().ref();
        ref.child("/alex-s-first-project/").orderByChild("minutesAway").equalTo(minutesAway).once("value", function(snapshot) {
        snapshot.forEach(function(child) {
        child.ref.update(obj);
    });
});

  });




  

//   //  The stop function
//   function stop() {

//     //  Clears our intervalId
//     //  We just pass the name of the interval
//     //  to the clearInterval function.
//     clearInterval(intervalId);
//   }

//   //The run functions sets an interval, clearing the intervalID prior to our new interval will not allow multiple instances
// function run() {
//     clearInterval(intervalId);
//     intervalId = setInterval(decrement, 1000);
//   }

// //Set the timer to start decrementing (Function 1)
// function decrement() {

//     timer--;

//     console.log(timer);
    
//     if (timer === 0) {
        

//         //  ...run the stop function.
//         stop();

//       }

//     };

    

    // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
    database.ref().on("child_added", function(childSnapshot, prevChildKey) {



        // Log everything that's coming out of snapshot
        console.log(childSnapshot.val().name);
        console.log(childSnapshot.val().destination);
        console.log(childSnapshot.val().traintime);
        console.log(childSnapshot.val().frequency);
        console.log(childSnapshot.val().nextTime);
        console.log(childSnapshot.val().minutesAway);
        console.log(childSnapshot.val().nextTrain);

        // Append all the items to the train list
      $("#new-train").append("<div class='well'> " + childSnapshot.val().name + "</div>");
      $("#new-des").append("<div class='well'><span class='member-name'> " + childSnapshot.val().destination + "</div>");
      $("#new-freq").append("<div class='well'><span class='member-name'> " + childSnapshot.val().frequency + "</div>");
      $("#new-arrival").append("<div class='well'><span class='member-name'> " + childSnapshot.val().traintime + "</div>");
      $("#new-min").append("<div class='well'><span class='member-name'> " + ((childSnapshot.val().minutesAway) * -1) + "</div>");

  
      // Handle the errors
      }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });

//   decrement();

//     run();
  



//Problems:
//Need to decrement the minutes remaining 
//need to set the next arrival after the time has been reached
