// Simple dataset of poems/quotes
const poems = {
  rain: [
    "The rain whispers secrets only hearts can hear.",
    "Raindrops paint the earth with silver dreams."
  ],
  happy: [
    "Happiness is a gentle light that never fades.",
    "Joy blooms where gratitude grows."
  ],
  love: [
    "Love is the poetry written on the soul.",
    "Two hearts, one rhythm — forever bound."
  ]
};

document.getElementById("poemForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const keyword = document.getElementById("keyword").value.toLowerCase();
  const resultBox = document.getElementById("resultBox");

  if (poems[keyword]) {
    const options = poems[keyword];
    const randomPoem = options[Math.floor(Math.random() * options.length)];
    resultBox.innerText = randomPoem;
  } else {
    resultBox.innerText = "Sorry 😔 I don’t have inspiration for that word. Try 'rain', 'happy', or 'love'.";
  }
});
