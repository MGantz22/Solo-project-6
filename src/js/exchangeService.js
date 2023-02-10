export default class ExchangeService {
  static getExchange() {
    return new Promise(function(resolve,reject){
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
      request.addEventListener("loadend", function() {
        const responce = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([responce]);
        } else {
          reject([this,responce]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}