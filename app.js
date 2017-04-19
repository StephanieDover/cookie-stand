'use strict'


var el = document.getElementById('sales-estimates');
var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  numCookies: [],
  totalSales: 0,
  hour: 5,
  customerNumber: function(){
    el.innerHTML += '<h3>1st and Pike</h3> \n <ul>Estimated Sales</ul>';
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
}

var seaTac = {
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  numCookies: [],
  totalSales: 0,
  hour: 5,
  customerNumber: function(){
    el.innerHTML += '<h3>SeaTac Airport</h3> \n <ul>Estimated Sales</ul>';
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
}

var seaCenter = {
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  numCookies: [],
  totalSales: 0,
  hour: 5,
  customerNumber: function(){
    el.innerHTML += '<h3>Seattle Center</h3> \n <ul>Estimated Sales</ul>';
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
}

var capitolHill = {
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  numCookies: [],
  totalSales: 0,
  hour: 5,
  customerNumber: function(){
    el.innerHTML += '<h3>Capitol Hill</h3> \n <ul>Estimated Sales</ul>';
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
    el.innerHTML += '<li> total: ' + this.totalSales + ' cookies </li>';
  }
}

var alki = {
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  numCookies: [],
  totalSales: 0,
  hour: 5,
  customerNumber: function(){
    el.innerHTML += '<h3>Alki</h3> \n <ul>Estimated Sales</ul>';
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
}
firstAndPike.customerNumber();
seaTac.customerNumber();
seaCenter.customerNumber();
capitolHill.customerNumber();
alki.customerNumber();
