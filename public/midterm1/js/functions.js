/* global localStorage*/
/* global $ */
/* global _ */



//-------------------------------------Beginning of Lab 3 functions for calculating the correct answers and displaying a score-----------------------------------------------

$(document).ready(function() {
 var score = 0;
 var attempts = localStorage.getItem("total_attempts");

 $("button").on("click", gradeQuiz);
 //function
 function isFormValid() {
  let isValid = true;
  if ($("#q1").val() == "") {
   isValid = false;
   $("#validationFdbk").html("Question 1 was not answered");
  }
  return isValid;
 }

 function rightAnswer(index) {
  $(`#q${index}Feedback`).html("Correct!");
  $(`#q${index}Feedback`).attr("class", "bg-success text-white");
  $(`#markImg${index}`).html("<img src='img/checkmark.png'>");
  if (index > 5) {
   score += 12.50;
  } else {
   score += 20;
  }
}

 function wrongAnswer(index) {
  $(`#q${index}Feedback`).html("Incorrect!");
  $(`#q${index}Feedback`).attr("class", "bg-warning text-white");
  $(`#markImg${index}`).html("<img src='img/xmark.png'>");
 }

 function displayQ4Choices() {
  let q4Choices = ["Maine", "Rhode Island", "Maryland", "Delaware"];
  q4Choices = _.shuffle(q4Choices);


  q4Choices.forEach(function(i) {
   $("#q4Choices").append(`<input type="radio" name="q4" id="${i}"value="${i}"> <label for="${i}">${i} </label>`);
  })
 } //displayQ4Choices

 displayQ4Choices();


 function gradeQuiz() {
  $("#validationFdbk").html(""); //resets validation feedback
  if (!isFormValid()) {
   return;
  }
  //variables
  score = 0;
  let q1Response = $("#q1").val().toLowerCase();
  let q2Response = $("#q2").val();
  let q4Response = $("input[name=q4]:checked").val();

  //Question 1
  if (q1Response == "sacramento") {
   rightAnswer(1);
  } else {
   wrongAnswer(1);
  }

  //Question 2
  if (q2Response == "mo") {
   rightAnswer(2);
  } else {
   wrongAnswer(2);
  }
  //Question 3
  if ($("#Jefferson").is(":checked") && $("#Roosevelt").is(":checked") && !$("#Jackson").is(":checked") && !$("#Franklin").is(":checked")) {
   rightAnswer(3);
  } else {
   wrongAnswer(3);
  }
  //Question 4
  if (q4Response == "Rhode Island") {
   rightAnswer(4);
  } else {
   wrongAnswer(4);
  }



  $("#totalScore").html(`Total Score: ${score}`);
  //Here I check if the score is less than 80. If it is, I will show score in yellow
  if (score < 80) {
   $("#totalScore").attr("class", "bg-danger text-white");
  } else {
   $("#congratulations").html("Congratulations! That's an impressive score! You know your US History very well!")
   $("#congratulations").attr("class", "bg-success text-white");

  }
  $("#totalAttempts").html(`Total Attempts: ${++attempts}`);
  localStorage.setItem("total_attempts", attempts);
 } //gradeQuiz


})
//-------------------------------------End of Lab 3 functions for calculating the correct answers and displaying a score-----------------------------------------------


