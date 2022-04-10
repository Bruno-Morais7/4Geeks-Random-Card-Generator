/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  randomCardContent();
};
//document.getElementById("btn").addEventListener("click", randomCardContent());

const suit = ["♥", "♦", "♣", "♠"];
const nums = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function randomNumber() {
  let randomNums = Math.floor(Math.random() * nums.length);
  return randomNums;
}
function randomSuit() {
  let randomSuit = Math.floor(Math.random() * suit.length);
  return randomSuit;
}

let rdSuit = suit[randomSuit(suit)];
let rdNums = nums[randomNumber(nums)];

function randomCardContent() {
  let symbols = document.getElementsByClassName("suit");
  if (rdSuit == "♥" || rdSuit == "♦") {
    symbols[0].style.color = "red";
    symbols[1].style.color = "red";
  } else {
    symbols[1].style.color = "black";
    symbols[0].style.color = "black";
  }
  symbols[0].innerHTML = rdSuit;
  symbols[1].innerHTML = rdSuit;
  document.getElementById("num").innerHTML = rdNums;
}
