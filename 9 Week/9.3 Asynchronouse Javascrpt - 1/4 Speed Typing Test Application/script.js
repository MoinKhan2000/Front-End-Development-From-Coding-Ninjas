const sentences =
    `The quick brown fox jumps over the lazy dog.
  Sphinx of black quartz, judge my vow.
  Pack my box with five dozen liquor jugs.
  How vexingly quick daft zebras jump!`;

let timerInterval;

function startTest() {
    const inputField = document.getElementById('input');
    const startBtn = document.getElementById('start-btn');
    const sentence = document.getElementById('sentence');
    const timer = document.getElementById('timer');
    const resultDiv = document.getElementById('result');

    inputField.removeAttribute('disabled');
    inputField.value = '';
    sentence.textContent = sentences;
    startBtn.setAttribute('disabled', true);
    resultDiv.style.display = 'none';

    let timeLeft = 30;
    timer.textContent = `${timeLeft}`;

    timerInterval = setInterval(() => {
        timeLeft--;
        timer.textContent = `${timeLeft}`;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            showResult();
        }
    }, 1000);
}

function showResult() {
    const inputField = document.getElementById('input');
    const startBtn = document.getElementById('start-btn');
    const resultDiv = document.getElementById('result');
    const speedSpan = document.getElementById('speed');
    const accuracySpan = document.getElementById('accuracy');

    inputField.setAttribute('disabled', true);
    startBtn.removeAttribute('disabled');

    const typedText = inputField.value.trim();
    const wordsArray = sentences.split(' ');
    const typedWordsArray = typedText.split(' ');

    const typedCharacters = typedText.length;
    const totalCharacters = sentences.length;
    const correctWords = typedWordsArray.filter((word, index) => word === wordsArray[index]).length;
    // Calculate speed (WPM) and accuracy
    const speed = Math.round((correctWords / 30) * 60);
    const accuracy = ((correctWords / typedWordsArray.length) * 100).toFixed(2);

    speedSpan.textContent = speed;
    accuracySpan.textContent = accuracy;

    resultDiv.style.display = 'block';
}

function retryTest() {
    const inputField = document.getElementById('input');
    const resultDiv = document.getElementById('result');
    inputField.value = '';
    resultDiv.style.display = 'none';

    timer.innerText = ""
    clearInterval(timerInterval);
}

document.getElementById('start-btn').addEventListener('click', startTest);
document.getElementById('retry-btn').addEventListener('click', retryTest);
