'use strict';

function StoreSalesGenerator(name, minCust, maxCust, avgSale) {
  this.storeName = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.numCookies = [];
  this.totalSales = 0;
  this.hour = 5;
}
var done = false;
//el.innerHTML += '<table><tr><th></th>';
StoreSalesGenerator.prototype.storeHour = function(){
  for (var customers = 0; customers < 14 && !done; customers++ ) {
    // var randomNum = Math.floor((Math.random()* (this.maxCust - this.minCust) + this.minCust));
    // this.numCookies.push(Math.round(randomNum * this.avgSale));
    // this.totalSales += this.numCookies[customers];
    this.hour++;
    var newEl = document.createElement('th');

    if (customers < 6 ) {
      var newText = document.createTextNode(this.hour + ' am ');
      newEl.appendChild(newText);
      var position = document.getElementById('sales-estimates');
      position.appendChild(newEl);
    } else if (customers == 6) {
      newText = document.createTextNode('12pm ');
      newEl.appendChild(newText);
      position.appendChild(newEl);
    } else {
      newText = document.createTextNode((this.hour-12) + 'pm ');
      newEl.appendChild(newText);
      position.appendChild(newEl);
    }
  }
  done = true;
  newEl = document.createElement('th');
  newText = document.createTextNode('Daily Location Totals');
  newEl.appendChild(newText);
  position.appendChild(newEl);
  //el.innerHTML += '</tr>';
  //el.innerHTML += '<tr><td> total: ' + this.totalSales + ' cookies </td></tr>';
};

StoreSalesGenerator.prototype.estimatedCookies = function(){
  var position = document.getElementById('sales-estimates');
  var newEl = document.createElement('tr');
  done = true;
  newEl = document.createElement('th');
  var newText = document.createTextNode(this.storeName);
  newEl.appendChild(newText);
  position.appendChild(newEl);
  for (var customers = 0; customers < 14 && done; customers++ ) {
    var randomNum = Math.floor((Math.random()* (this.maxCust - this.minCust) + this.minCust));
    this.numCookies.push(Math.round(randomNum * this.avgSale));
    this.totalSales += this.numCookies[customers];

    position = document.getElementById('sales-estimates');
    newEl = document.createElement('td');
    done = true;
    newEl = document.createElement('td');
    newText = document.createTextNode(this.numCookies[customers] + 'cookies');
    newEl.appendChild(newText);
    position.appendChild(newEl);
    if (customers == 13) {
      position.appendChild(newEl);
      newEl = document.createElement('td');
      newText = document.createTextNode(this.totalSales + 'cookies');
      newEl.appendChild(newText);
      position.appendChild(newEl);
      done = true;
    }
  }

};

var firstAndPike = new StoreSalesGenerator('1st and Pike', 23, 65, 6.3);
// var seaTac = new StoreSalesGenerator('SeaTac', 3, 24, 1.2);
// var seaCenter = new StoreSalesGenerator('Seattle Center', 11, 38, 3.7);
// var capitolHill = new StoreSalesGenerator('Capiltol Hill', 20, 38, 2.3);
// var alki = new StoreSalesGenerator('Alki', 2, 16, 4.6);
//
firstAndPike.storeHour();
firstAndPike.estimatedCookies();
// seaTac.storeHour();
// seaCenter.storeHour();
// capitolHill.storeHour();
// alki.storeHour();
