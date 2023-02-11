//import "bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import ExchangeService from "./js/exchangeService";


//Business Logic 

async function getInput(currencyIn, currencyOut, amount) {
  const response = await ExchangeService.exchangeMoney(currencyIn, currencyOut, amount);
  //("response",response);
  if (response.result === "success") {
    printElements(response, currencyIn, currencyOut, amount);
  } else {
    printError(response, currencyIn, currencyOut, amount);
  }
}

function checkInteger(amount) {
  if (isNaN(amount)=== true) {
    return false;
  } else {
    return true;
  }
}

// UI Logic

function printElements(response, currencyIn, currencyOut, amount) {
  document.querySelector("#showResponse").innerText = `One ${currencyIn} has an exchage rate of ${response.conversion_rate} ${currencyOut}.\n
  Your ${amount} ${currencyIn} will be exchanged for ${response.conversion_result} ${currencyOut}.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const amount = parseInt(document.querySelector("#amount").value);
  if (checkInteger(amount) === true) {
    const from = document.getElementById("currencyIn");
    const to = document.getElementById("currencyOut");
    const currencyIn = from.options[from.selectedIndex].value;
    const currencyOut = to.options[to.selectedIndex].value;
    getInput(currencyIn, currencyOut, amount);
  } else {
    document.querySelector("#showResponse").innerText = `ERROR! We can only exchange numbers, You might have more luck trying a word translator site. Please enter a number and try again.`;
  }
}

function printError(error, currencyIn, currencyOut) {
  if (error === "unsupported-code") {
    document.querySelector("#showResponse").innerText = `The currency you selected is invalid, Please try again.\n
    Error details: ${error.stringify(error)}`;
  } else {
    document.querySelector("#showResponse").innerText = `Error in your request for ${currencyIn} to ${currencyOut}: ${error}.`;
  }
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
});