
const poems = {
  rain: [
    "The rain whispers secrets only hearts can hear.",
    "Raindrops paint the earth with silver dreams."
  ],
  happy: [
    "Happiness is a gentle light that never fades.",
    "Joy blooms where gratitude grows."
  ],
  sad: [
    "Sadness is a shadow that teaches us to value the light.",
    "Even the heaviest rain eventually clears into sunshine."
  ],
  demotivated: [
    "Every setback is just a pause, not the end of your story.",
    "When strength seems gone, remember even small steps count."
  ],
  depressed: [
    "Dark nights can’t erase the certainty of dawn.",
    "Even broken stars still shine in the sky."
  ],
  love: [
    "Love is the poetry written on the soul.",
    "Two hearts, one rhythm — forever bound."
  ],
  romantic: [
    "In your eyes, I find galaxies untold.",
    "Your presence turns ordinary moments into eternal memories."
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
    resultBox.innerText = "Sorry 😔 I don’t have inspiration for that word. Try 'rain', 'happy', 'sad', 'love', or 'romantic'.";
  }
});
