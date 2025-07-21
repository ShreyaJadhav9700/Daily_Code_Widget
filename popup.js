fetch('questions.json')
  .then(response => response.json())
  .then(data => {
    const today = new Date().toDateString();
    const hash = today.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    const index = hash % data.length;
    const question = data[index];

    document.getElementById('title').textContent = question.title;
    document.getElementById('platform').textContent = `Platform: ${question.platform}`;
    document.getElementById('difficulty').textContent = `Difficulty: ${question.difficulty}`;
    document.getElementById('link').href = question.url;
  });