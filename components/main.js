'use strict';

let allLocations = [];

let hours = ['6 a.m', '7 a.m', '8 a.m', '9 a.m', '10 a.m', '11 a.m', '12 p.m', '1 p.m', '2 p.m', '3 p.m', '4 p.m', '5 p.m', '6 p.m', '7 p.m', 'Total'];

const cookieContainer = document.getElementById('locationNames');

console.log(cookieContainer);

const cookieTable = document.querySelector('table');
console.log(cookieTable);
const cookieBody = document.querySelector('table tbody');
const cookieFoot = document.getElementById('tableFoot');
const cookieHead = document.getElementById('tableHead');

function Cookie(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.dailyTotal = 0;
  allLocations.push(this);
  this.cookiesSoldPerHourArray = [];
  this.getRandomCustomers = function () {
    let cookieMath = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    console.log(cookieMath);
    return cookieMath;
  };
}
function renderHeader() {
  let tr = document.createElement('tr');
  cookieHead.appendChild(tr);
  let thHours = document.createElement('th');
  thHours.textContent = 'Hours';
  tr.appendChild(thHours);
  for (let i = 0; i < hours.length; i++) {
    let th = document.createElement('th');
    th.textContent = hours[i];
    tr.appendChild(th);
    for (let j = 0; j < allLocations.length; j++) {
    }
  }

}

Cookie.prototype.renderTable = function () {
  let tr = document.createElement('tr');
  cookieBody.appendChild(tr);
  let tdName = document.createElement('td');
  tdName.textContent = this.name;
  tr.appendChild(tdName);

  for (let i = 0; i < hours.length -1; i++) {
    console.log(hours.length);
    console.log('JSHFKJH!');
    let cookiesThisHour = Math.ceil(this.getRandomCustomers() * this.avg);
    this.cookiesSoldPerHourArray.push(cookiesThisHour);
    this.dailyTotal = this.dailyTotal + cookiesThisHour;

    console.log(cookiesThisHour, this.dailyTotal);


    let td = document.createElement('td');
    td.textContent = cookiesThisHour;
    tr.appendChild(td);
    // }
  }
  let tdTotal = document.createElement('td');
  tdTotal.textContent = this.dailyTotal;
  tr.appendChild(tdTotal);
};


function renderFooter() {
  let tr = document.createElement('tr');
  tr.id= 'footerRow';
  cookieFoot.appendChild(tr);
  let tdName = document.createElement('td');
  tdName.textContent = 'Totals';
  tr.appendChild(tdName);
  let totalTotals = 0;
  for (let i = 0; i < hours.length -1; i++) {
    let hourlyTotals = 0;
    for (let j = 0; j < allLocations.length; j++) {
      hourlyTotals += (allLocations[j].cookiesSoldPerHourArray[i]);
      totalTotals += (allLocations[j].cookiesSoldPerHourArray[i]);
    }

    let td = document.createElement('td');
    td.textContent = hourlyTotals;
    tr.appendChild(td);

  }
  let grandTotalTd = document.createElement('td');
  grandTotalTd.textContent = totalTotals;
  tr.appendChild(grandTotalTd);
}
renderHeader();

let seattle = new Cookie(
  'Seattle',
  2,
  16,
  4.6
);
seattle.renderTable();

let tokyo = new Cookie(
  'Tokyo',
  3,
  24,
  1.2
);
tokyo.renderTable();

let dubai = new Cookie(
  'Dubai',
  11,
  38,
  3.7
);
dubai.renderTable();

let paris = new Cookie(
  'Paris',
  20,
  38,
  2.3
);
paris.renderTable();

let lima = new Cookie(
  'Lima',
  2,
  16,
  4.6
);
lima.renderTable();



renderFooter();

let form = document.querySelector(`form`);
console.log(form);

let handleSubmit = function(event) {
  event.preventDefault();
  document.getElementById('footerRow').remove();
  console.log('the form submitted');
  let name= event.target.location.value;
  let min = parseInt(event.target.min.value);
  let max = parseInt(event.target.max.value);
  let avg = parseInt(event.target.avg.value);

  let newStore = new Cookie(name, min, max,avg);
  console.log(newStore);
  newStore.renderTable();
  renderFooter();

};

form.addEventListener('submit', handleSubmit);