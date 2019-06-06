// This is the business logic
function multiply(a, b){
  return a*b;
};

function divide(a,b) {
  return a/b;
};

function add(a,b){
  return a+b;
};

function subtract(a,b) {
  return a-b;
}


// This is the UI logic
$(document).ready(function() {

// This is how the lesson says we should do it, by triggering below when the form is submitted
// OR, you can tie it to a button click, which is in the current code
// $("form#calculator").submit(function(event) {
$("button#submit-button").click(function(event) {
  event.preventDefault();
  var number1 = parseInt($("#input1").val());
  var number2 = parseInt($("#input2").val());
  // "operator" refers to what radio button is clicked -- "in an input with the type radio, find ones named "operator" and whichever one is checked
  var operator = $("input:radio[name=operator]:checked").val();
  console.log(operator)
  var result;
  if (operator === "add") {
    result = add(number1, number2);
  } else if (operator === "subtract") {
    result = subtract(number1, number2);
  } else if (operator === "multiply") {
    result = multiply(number1, number2);
  } else if (operator === "divide") {
    result = divide(number1, number2);
  }
  $("#output").text(result);


});







});
