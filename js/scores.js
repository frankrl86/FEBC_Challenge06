var player = {
  initials: "",
  points: 0,
};
var playersCount = 0;

var clearBtn = document.querySelector("#clear");
var playersList = document.querySelector("#highscoresList");

clearBtn.addEventListener("click", function () {
  localStorage.clear();
  playersCount = 0;
  setList();
});

function setList() {
  playersCount = localStorage.getItem("playersCount");
  console.log("Players count: " + playersCount);
  playersList.innerHTML = "";

  let listItem;
  for (let i = 1; i <= playersCount; i++) {
    player = JSON.parse(localStorage.getItem("player" + i));

    console.log("Player to visualize:" + JSON.stringify(player));
    listItem = document.createElement("li");
    listItem.appendChild(
      document.createTextNode(player.initials + ":  " + player.points)
    );
    playersList.appendChild(listItem);
  }
}

setList();
