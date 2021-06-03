"use strict";

//console window 
console.log("reading from js");
//declare variables 
var art = document.getElementById("art");
var artInfo = document.getElementById("artInfo");
var bee = document.getElementById("bee");
var beeInfo = document.getElementById("beeInfo");
var book = document.getElementById("book");
var bookInfo = document.getElementById("bookInfo");
var card = document.getElementById("card");
var cardInfo = document.getElementById("cardInfo");
var venus = document.getElementById("venus");
var venusInfo = document.getElementById("venusInfo");
//declare closers for overlay
var close = document.getElementById("close");
var close1 = document.getElementById("close1");
var close2 = document.getElementById("close2");
var close3 = document.getElementById("close3");
var close4 = document.getElementById("close4");

//event listeners for each image info
art.addEventListener("click", function() {
    artInfo.style.display = "block";
});
bee.addEventListener("click", function() {
    beeInfo.style.display = "block";
});
book.addEventListener("click", function() {
    bookInfo.style.display = "block";
});
card.addEventListener("click", function() {
    cardInfo.style.display = "block";
});
venus.addEventListener("click", function() {
    venusInfo.style.display = "block";
});


//close info
close.addEventListener("click", function() {
    artInfo.style.display = "none";
});
close1.addEventListener("click", function() {
    beeInfo.style.display = "none";
});
close2.addEventListener("click", function() {
    bookInfo.style.display = "none";
});
close3.addEventListener("click", function() {
    cardInfo.style.display = "none";
});
close4.addEventListener("click", function() {
    venusInfo.style.display = "none";
});
function off() {
    document.getElementById("moonInfo").style.display = "none";
  }
