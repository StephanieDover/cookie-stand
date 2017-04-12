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

var newText = document.createTextNode('text');
var tableRow, tableHeader, tableData;
var position = document.getElementById('sales-estimates');

var storeHour = function(){
  tableRow = document.createElement ('tr');
  position.appendChild(tableRow);
  tableData = document.createElement ('td');
  tableRow.appendChild(tableData);
  tableData = document.createElement ('td');
  for (var hour = 5; hour < 20; hour++ ) {
    tableHeader = document.createElement ('th');
    if (hour < 12 ) {
      newText = document.createTextNode(hour + ' am ');
      tableHeader.appendChild(newText);
      tableRow.appendChild(tableHeader);
    } else if (hour == 12) {
      newText = document.createTextNode('12pm ');
      tableHeader.appendChild(newText);
      tableRow.appendChild(tableHeader);
    } else {
      newText = document.createTextNode((hour-12) + 'pm ');
      tableHeader.appendChild(newText);
      tableRow.appendChild(tableHeader);
    }
  }
  tableHeader = document.createElement ('th');
  newText = document.createTextNode('Daily Location Totals');
  tableHeader.appendChild(newText);
  tableRow.appendChild(tableHeader);
};

StoreSalesGenerator.prototype.estimatedCookies = function(){
  tableRow = document.createElement ('tr');
  var newText = document.createTextNode(this.storeName);
  tableHeader = document.createElement ('th');
  tableHeader.appendChild(newText);
  tableRow.appendChild(tableHeader);

  for (var customers = 0; customers < 14; customers++ ) {

    var randomNum = Math.floor((Math.random()* (this.maxCust - this.minCust) + this.minCust));
    this.numCookies.push(Math.round(randomNum * this.avgSale));
    this.totalSales += this.numCookies[customers];
    tableData = document.createElement ('td');
    newText = document.createTextNode(this.numCookies[customers] + ' cookies');
    tableData.appendChild(newText);
    tableRow.appendChild(tableData);

  }
  tableData = document.createElement ('td');
  newText = document.createTextNode(this.totalSales + ' cookies');
  tableData.appendChild(newText);
  tableRow.appendChild(tableData);
  position.appendChild(tableRow);
};

var firstAndPike = new StoreSalesGenerator('1st and Pike', 23, 65, 6.3);
var seaTac = new StoreSalesGenerator('SeaTac', 3, 24, 1.2);
var seaCenter = new StoreSalesGenerator('Seattle Center', 11, 38, 3.7);
var capitolHill = new StoreSalesGenerator('Capiltol Hill', 20, 38, 2.3);
var alki = new StoreSalesGenerator('Alki', 2, 16, 4.6);

storeHour();
firstAndPike.estimatedCookies();
seaTac.estimatedCookies();
seaCenter.estimatedCookies();
capitolHill.estimatedCookies();
alki.estimatedCookies();
