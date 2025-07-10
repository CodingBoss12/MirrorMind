const moodKeywords = {
  happy: ["happy", "excited", "proud", "joy", "accomplished"],
  sad: ["sad", "down", "depressed", "cry", "lonely"],
  anxious: ["nervous", "anxious", "worried", "stressed", "tense"],
  angry: ["mad", "angry", "furious", "annoyed", "irritated"],
  tired: ["tired", "exhausted", "burnt out", "drained", "fatigued"]
};

const rewiringTips = {
  happy: "Reflect on what made you feel good and try to reinforce it tomorrow!",
  sad: "Write 3 things you're grateful for. Even tiny ones help anchor you.",
  anxious: "Try a 4-7-8 breathing cycle or make a plan to handle what’s stressing you.",
  angry: "Take a short walk or write down why you feel angry without judging it.",
  tired: "Drink water, close your eyes for 5 minutes, and stretch a little — it counts."
};

function analyzeEntry() {
  const text = document.getElementById("entry").value.toLowerCase();
  let foundEmotions = [];

  for (let emotion in moodKeywords) {
    for (let word of moodKeywords[emotion]) {
      if (text.includes(word)) {
        foundEmotions.push(emotion);
        break;
      }
    }
  }

  const uniqueEmotions = [...new Set(foundEmotions)];
  let outputDiv = document.getElementById("analysisOutput");
  let responseDiv = document.getElementById("responseOutput");

  if (uniqueEmotions.length === 0) {
    outputDiv.innerHTML = "🤔 No emotions detected. Try describing your mood more deeply!";
    responseDiv.innerHTML = "";
    return;
  }

  outputDiv.innerHTML = "💡 Detected emotions: <strong>" + uniqueEmotions.join(", ") + "</strong>";

  let adviceList = uniqueEmotions.map(emotion => `<p><strong>${emotion.toUpperCase()} tip:</strong> ${rewiringTips[emotion]}</p>`);
  responseDiv.innerHTML = adviceList.join("");
}
