"use strict";

//Create an array of 10 strings.
var friends = ["Jillian", "Nick", "Azeem", "Morgan", "Anna", "Mona", "Stephen", "Leann", "Kerry", "Andrew"];

//Randomize the array and select a friend
function randomSort() {
  var result = [];
  for (var i = friends.length - 1; i >= 0; i--) {
    var r = Math.floor(Math.random() * (i + 1));
    for (var j = 0, k = 0; j <= friends.length - 1; j++) {
      if (result[j] === undefined) {
        if (k === r) {
          result[j] = friends[i];
          break;
        }
        k++;
      }
    }
  }
  return friends[0];
};