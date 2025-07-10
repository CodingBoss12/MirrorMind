function analyze() {
  const text = document.getElementById('entry').value.toLowerCase();
  const responseDiv = document.getElementById('responseOutput');

  const patterns = [
    {
      triggers: ["i don't know", "lost", "confused", "i'm unsure", "uncertain"],
      mood: "confused",
      response: "🌫️ You’re in a fog right now — that’s okay. You don’t need clarity yet, just presence. What’s *one* small thing you do know today?"
    },
    {
      triggers: ["i should", "but i", "i feel guilty", "i'm failing"],
      mood: "guilt spiral",
      response: "🌀 Sounds like you’re carrying guilt. Can you forgive yourself for being human today?"
    },
    {
      triggers: ["it's whatever", "i'm fine", "idc", "don’t care"],
      mood: "emotional shutdown",
      response: "🧊 That sounds like masking. Try asking yourself: what emotion would you express if it were safe?"
    },
    {
      triggers: ["angry", "mad", "furious", "rage"],
      mood: "anger",
      response: "🔥 That anger is trying to protect you. Ask yourself: what boundary was crossed, and how can you reclaim it?"
    },
    {
      triggers: ["anxious", "worried", "nervous", "panicked", "stressed"],
      mood: "anxiety",
      response: "🫨 Anxiety is your brain’s smoke alarm — not always a fire. What’s a concrete step you can take *right now*?"
    },
    {
      triggers: ["tired", "exhausted", "burnt out", "drained", "fatigued"],
      mood: "burnout",
      response: "😴 Burnout isn’t weakness. You weren’t built to run endlessly. Your rest is *productive* too."
    },
    {
      triggers: ["sad", "lonely", "empty", "crying", "depressed"],
      mood: "sadness",
      response: "🌧️ You’re feeling a heaviness. That’s valid. Can you hold space for it without judging it?"
    }
  ];

  let matched = null;

  for (let pattern of patterns) {
    for (let word of pattern.triggers) {
      if (text.includes(word)) {
        matched = pattern;
        break;
      }
    }
    if (matched) break;
  }

  if (matched) {
    responseDiv.innerHTML = `<p><strong>MirrorMind:</strong> ${matched.response}</p>`;
  } else {
    responseDiv.innerHTML = `<p><strong>MirrorMind:</strong> ✨ I’m still learning from your words. Try expressing your emotions in raw terms, and I’ll reflect it back to you.</p>`;
  }
}

let patterns = [];

fetch("patterns.json")
  .then(res => res.json())
  .then(data => patterns = data);

function analyze() {
  const text = document.getElementById('entry').value.toLowerCase();
  const responseDiv = document.getElementById('responseOutput');

  let matched = null;

  for (let pattern of patterns) {
    for (let clue of pattern.clues) {
      if (text.includes(clue)) {
        matched = pattern;
        break;
      }
    }
    if (matched) break;
  }

  if (matched) {
    responseDiv.innerHTML = `<p><strong>MirrorMind:</strong> ${matched.response}</p>`;
  } else {
    responseDiv.innerHTML = `<p><strong>MirrorMind:</strong> 🤖 I’m still processing what you shared. Could you try expressing it a bit more openly?</p>`;
  }
}
