let currentIndex = 0;
let data = [];

fetch('data.json')
  .then(response => response.json())
  .then(json => {
    data = json;
    loadScenario();
  });

function loadScenario() {
  const scenario = data[currentIndex];
  document.getElementById('scenario-title').innerText = scenario.title;
  document.getElementById('scenario-text').innerText = scenario.question;
  const answerDiv = document.getElementById('answer');
  answerDiv.innerText = scenario.answer;
  answerDiv.classList.add('hidden');
}

document.getElementById('reveal-btn').addEventListener('click', () => {
  document.getElementById('answer').classList.remove('hidden');
});

document.getElementById('next-btn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % data.length;
  loadScenario();
});
