'use strict';

function StoreSalesGenerator(name, minCust, maxCust, avgSale) {
  this.storeName = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.numCookies = [];
  this.totalSales = 0;
}

var newText = document.createTextNode('text');
var tableRow = document.createElement('tr');
var tableHeader = document.createElement('th');
var tableData = document.createElement ('td');
var position = document.getElementById('sales-estimates');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var storeHour = function(){
  newText = document.createTextNode('');
  tableData.appendChild(newText);
  position.appendChild(tableRow);
  tableRow.appendChild(tableHeader);
  for (var storeHour = 0; storeHour <= hours.length; storeHour++ ) {
    tableHeader = document.createElement ('th');
    newText = document.createTextNode(hours[storeHour]);
    tableHeader.appendChild(newText);
    tableRow.appendChild(tableHeader);
  }
  tableData.appendChild(newText);
  position.appendChild(tableRow);
  tableRow.appendChild(tableHeader);
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

  for (var customers = 0; customers < hours.length; customers++ ) {

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
var capitolHill = new StoreSalesGenerator('Capitol Hill', 20, 38, 2.3);
var alki = new StoreSalesGenerator('Alki', 2, 16, 4.6);

storeHour();
firstAndPike.estimatedCookies();
seaTac.estimatedCookies();
seaCenter.estimatedCookies();
capitolHill.estimatedCookies();
alki.estimatedCookies();

function handleStoreGenerator (event){
  event.preventDefault();
  var form = event.target;
  var storeGeneratorName = form.newStoreName.value;
  var storeGeneratorMinCust = form.newMinCust.value;
  var storeGeneratorMaxCust = form.newMaxCust.value;
  var storeGeneratorAvgSale = form.newAvgSale.value;
  var generatedStore = new StoreSalesGenerator(storeGeneratorName, storeGeneratorMinCust, storeGeneratorMaxCust, storeGeneratorAvgSale);
  generatedStore.estimatedCookies();
}

var storeGeneratorFormSubmit = document. getElementById('store-generator');
storeGeneratorFormSubmit.addEventListener('submit', handleStoreGenerator);
