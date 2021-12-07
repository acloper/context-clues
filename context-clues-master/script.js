var friends = ["Aaron", "Kody", "Zach", "Red", "Lucy"];
var locations = ["foyer", "living room", "bedroom", "bathroom", "office", "closet", "basement", "kitchen", "study", "porch"];
var weapons = [
  "gun",
  "knoife",
  "pipe",
  "tire iron",
  "candle stick",
  "moby huge",
  "baseball bat",
  "copier",
  "glizzy",
  "Aaron",
  "plastic fork",
  "plastic spoon",
  "tea cup",
  "pencil",
  "bowie knoife",
  "ray gun",
  "barret 50-cal",
  "hornet nest",
  "dog",
  "sword",
];

for (var i = 0; i < 100; i++) {
  var h3 = $('<h3 id ="' + (i + 1) + '"> Accusation ' + (i + 1) + "</h3>");
  $("body").append(h3);
  var text = "Accusation " + (i + 1) + ": I accuse " + friends[i % friends.length] + ", with the " + weapons[i % weapons.length] + " in the " + locations[i % locations.length] + "!";
  var showMurderer = displayText(text);
  h3.click(showMurderer);
}

function displayText(text) {
  return function () {
    alert(text);
  };
}
