'use strict';

//  Array to hold all items
SaleItem.allItems = [];
var clickCount = 0;

// create objects
function SaleItem(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.justshown = false;
  this.prevShown = false;
  this.totalShown =0;
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
imgContainer.addEventListener('click', itemClick);
imgContainer2.addEventListener('click', itemClick);
imgContainer3.addEventListener('click', itemClick);

// display random Item images - 3
function randomItem() {
  var randomIdx = Math.floor(Math.random() * SaleItem.allItems.length);
  while ((SaleItem.allItems[randomIdx].justshown === true) || (SaleItem.allItems[randomIdx].prevShown === true)) {
    randomIdx = Math.floor(Math.random() * SaleItem.allItems.length);
  }
  SaleItem.allItems[randomIdx].justshown = true;
  SaleItem.allItems[randomIdx].totalShown += 1;
  return randomIdx;
}


// get random item that was not justshown
function nextThreeItems() {
  if (clickCount < 25) {
    var firstItemNum = randomItem();
    imgContainer.src = SaleItem.allItems[firstItemNum].filepath;
    var secondItemNum = randomItem();
    imgContainer2.src = SaleItem.allItems[secondItemNum].filepath;
    var thirdItemNum = randomItem();
    imgContainer3.src = SaleItem.allItems[thirdItemNum].filepath;
    SaleItem.allItems[firstItemNum].justshown =false;
    SaleItem.allItems[secondItemNum].justshown =false;
    SaleItem.allItems[thirdItemNum].justshown =false;
    resetPrevShown();
    SaleItem.allItems[firstItemNum].prevShown =true;
    SaleItem.allItems[secondItemNum].prevShown =true;
    SaleItem.allItems[thirdItemNum].prevShown =true;
  }
  else {
    console.log('Number of clicks ', clickCount);
  }
  clickCount++;
}

function resetPrevShown() {
  for (var i = 0;i<SaleItem.allItems.length;i++){
    SaleItem.allItems[i].prevShown =false;
  }
}

function itemClick() {
  // console.log('imgContainer.src',imgContainer.src);
  // var ind = SaleItem.allItems.findIndex(x => x.includes(imgContainer.src) === true);
  // console.log('ind',ind);
  // clickCount++;
  nextThreeItems();
  console.log(clickCount);
}

nextThreeItems();


