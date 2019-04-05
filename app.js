'use strict';

//  Array to hold all items
SaleItem.allItems = [];

// create objects
function SaleItem(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.justshown = false;
  SaleItem.allItems.push(this);
}

new SaleItem('bag', 'img/bag.jpg');
new SaleItem('banana', 'img/banana.jpg');
new SaleItem('bathroom', 'img/bathroom.jpg');
new SaleItem('boots', 'img/boots.jpg');
new SaleItem('breakfast', 'img/breakfast.jpg');
new SaleItem('bubblegum', 'img/bubblegum.jpg');
new SaleItem('chair', 'img/chair.jpg');
new SaleItem('cthulhu', 'img/cthulhu.jpg');
new SaleItem('dog-duck', 'img/dog-duck.jpg');
new SaleItem('dragon', 'img/dragon.jpg');
new SaleItem('pen', 'img/pen.jpg');
new SaleItem('pet-sweep', 'img/pet-sweep.jpg');
new SaleItem('scissors', 'img/scissors.jpg');
new SaleItem('shark', 'img/shark.jpg');
new SaleItem('sweep', 'img/sweep.png');
new SaleItem('tauntaun', 'img/tauntaun.jpg');
new SaleItem('unicorn', 'img/unicorn.jpg');
new SaleItem('usb', 'img/usb.gif');
new SaleItem('water-can', 'img/water-can.jpg');
new SaleItem('wine-glass', 'img/wine-glass.jpg');



// Event listenter to track clicks of Item images
var imgContainer = document.getElementById('item-pic');
var imgContainer2 = document.getElementById('item-pic2');
var imgContainer3 = document.getElementById('item-pic3');
imgContainer.addEventListener('click', randomItem);
imgContainer2.addEventListener('click', randomItem);
imgContainer3.addEventListener('click', randomItem);

// display random Item images - 3
function randomItem() {
  var randomIdx = Math.floor(Math.random() * SaleItem.allItems.length);
  imgContainer.src = SaleItem.allItems[randomIdx].filepath;
  SaleItem.allItems[randomIdx].justshown = true;
  randomIdx = Math.floor(Math.random() * SaleItem.allItems.length);
  imgContainer2.src = SaleItem.allItems[randomIdx].filepath;
  SaleItem.allItems[randomIdx].justshown = true;
  randomIdx = Math.floor(Math.random() * SaleItem.allItems.length);
  imgContainer3.src = SaleItem.allItems[randomIdx].filepath;
  SaleItem.allItems[randomIdx].justshown = true;
}
randomItem();
