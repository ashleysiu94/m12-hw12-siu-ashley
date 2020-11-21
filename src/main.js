//Create an array of 10 strings.
var friends = ["Jillian", "Nick", "Azeem", "Morgan", "Anna", "Mona", "Stephen", "Leann", "Kerry", "Andrew"]

//Randomize the array and select a friend
function randomSort() {
  const result = [];
  for (let i = friends.length-1; i >= 0; i--) {
    const r = Math.floor(Math.random()*(i+1));
    for (let j = 0, k = 0; j <= friends.length-1; j++) {
      if(result[j] === undefined) {
        if(k === r) {
          result[j] = friends[i];
          break;
        }
        k++
      }
    }
  }
  return result;
};

//Adds first item of shuffled list of friends to the page
function printName() {
  document.getElementById("friend-list").innerHTML = randomSort()[0];
};

//Working Button
this.button = document.getElementById("button");
this.button.addEventListener("click", this.printName);
