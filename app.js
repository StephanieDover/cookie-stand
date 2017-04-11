'use strict';

var el = document.getElementById('sales-estimates');
function StoreSalesGenerator(Name, minCust, maxCust, avgSale) {
  this.storeName = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.numCookies = [];
  this.totalSales = 0;
  this.hour = 5;
}

StoreSalesGenerator.prototype.customerNumber = function(){
  el.innerHTML += '<h3>' + this.storeName + '</h3> \n <ul>Estimated Sales</ul>';
  for (var customers = 0; customers < 15 ; customers++ ) {
    var randomNum = Math.floor((Math.random()* (this.maxCust - this.minCust) + this.minCust));
    this.numCookies.push(Math.round(randomNum * this.avgSale));
    this.totalSales += this.numCookies[customers];
    this.hour++
    if (customers < 7 ) {
      el.innerHTML += '<li>' + this.hour + 'am: ' + this.numCookies[customers] + ' cookies' + '</li>';
    } else {
      el.innerHTML += '<li>' + (this.hour-12) + 'pm: ' + this.numCookies[customers] + ' cookies' + '</li>';
    }
  }
  el.innerHTML += '<li> total: ' + this.totalSales + ' cookies';
}

var firstAndPike = new StoreSalesGenerator('1st and Pike', 23, 65, 6.3);
var seaTac = new StoreSalesGenerator('SeaTac', 3, 24, 1.2);
var seaCenter = new StoreSalesGenerator('Seattle Center', 11, 38, 3.7);
var capitolHill = new StoreSalesGenerator('Capiltol Hill', 20, 38, 2.3);
var alki = new StoreSalesGenerator('Alki', 2, 16, 4.6);

firstAndPike.customerNumber();
seaTac.customerNumber();
seaCenter.customerNumber();
capitolHill.customerNumber();
alki.customerNumber();
