import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import ExchangeService from "./js/exchangeService";

// Business Logic
function getExchange() {
  let promise = ExchangeService.getExchange();
  promise.then(function(exchangeRate) {
    printElements(exchangeRate);
  }, function(error) {
    printError(error);
  });
}
// UI Logic
function handleFormSubmission(event) {
  event.preventDefault();
  getExchange();
}

function printElements(currencyData) {
  const currency = document.querySelector("#currency").value;
  const amount = document.querySelector("#amount").value;
  const exchangeRate = currencyData[0]["conversion_rates"][currency];
  if (currencyData[0]["conversion_rates"][currency] === "undefined") {
    document.querySelector("#showResults").innerText = "Error Error! unable to find exchange rate at the moment, searching for software update. Human please stand by.";
  } else {
    document.querySelector("#showResults").innerText = `$${amount} USD = ${
      exchangeRate * amount} ${currency}`;
  }
}

function printError(error) {
  const errorType = Object.values(error[1]);
  document.querySelector("#showResults").innerText = `Seems there was an error: ${errorType[3]}`;
}

window.addEventListener("load", function() {
  this.document.querySelector("form").addEventListener("submit", handleFormSubmission);
});