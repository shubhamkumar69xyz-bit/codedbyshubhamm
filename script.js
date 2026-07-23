/* ==========================================================================
   QUIZ GAME ENGINE
   ========================================================================== */

"use strict";

const CONFIG = {
  DEFAULT_LIVES: 3,
  TOTAL_QUESTIONS: 20,
  TIME_PER_QUESTION: 30,
  BASE_SCORE: 10,
  FAST_ANSWER_THRESHOLD: 10,
  COST_HINT: 20,
  COST_5050: 30,
  COST_SKIP: 15,
  XP_PER_CORRECT: 25,
  XP_PER_LEVEL: 500,
  LEADERBOARD_MAX_ENTRIES: 10
};

let gameState = {
  playerName: "Guest",
  difficulty: "medium",
  currentQuestionIndex: 0,
  activeQuestions: [],
  score: 0,
  coins: 0,
  xp: 0,
  level: 1,
  lives: CONFIG.DEFAULT_LIVES,
  streak: 0,
  highestStreak: 0,
  correctAnswersCount: 0,
  wrongAnswersCount: 0,
  timer: null,
  timeLeft: CONFIG.TIME_PER_QUESTION,
  isAnswerLocked: false,
  unlockedBadges: [],
  settings: { sound: true, music: true, darkMode: false }
};

window.QuizQuestionPool = window.QuizQuestionPool || {};

const DOM = {
  loadingScreen: document.getElementById("loading-screen"),
  welcomeScreen: document.getElementById("welcome-screen"),
  quizScreen: document.getElementById("quiz-screen"),
  levelCompleteScreen: document.getElementById("level-complete-screen"),
  gameOverScreen: document.getElementById("game-over-screen"),
  
  loadingProgressFill: document.getElementById("loading-progress-fill"),
  gameSetupForm: document.getElementById("game-setup-form"),
  playerNameInput: document.getElementById("player-name-input"),
  
  headerPlayerName: document.getElementById("header-player-name"),
  currentLevel: document.getElementById("current-level"),
  currentScore: document.getElementById("current-score"),
  currentCoins: document.getElementById("current-coins"),
  livesDisplayContainer: document.querySelector(".lives-display"),
  currentQuestionNum: document.getElementById("current-question-num"),
  totalQuestionsNum: document.getElementById("total-questions-num"),
  quizTimer: document.getElementById("quiz-timer"),
  timerSeconds: document.getElementById("timer-seconds"),
  quizProgressFill: document.getElementById("quiz-progress-fill"),

  questionText: document.getElementById("question-text"),
  answerButtons: document.querySelectorAll("#answer-options .btn-option"),

  btnHint: document.getElementById("btn-lifeline-hint"),
  btn5050: document.getElementById("btn-lifeline-5050"),
  btnSkip: document.getElementById("btn-lifeline-skip"),

  gameFeedback: document.getElementById("game-feedback"),
  feedbackMessage: document.getElementById("feedback-message"),
  feedbackBonusPoints: document.getElementById("feedback-bonus-points"),
  feedbackStreakCount: document.getElementById("feedback-streak-count"),
  feedbackTimeBonus: document.getElementById("feedback-time-bonus"),

  xpText: document.getElementById("xp-text"),
  xpProgressFill: document.getElementById("xp-progress-fill"),
  comboStreakCount: document.getElementById("combo-streak-count"),
  badgesContainer: document.getElementById("badges-container"),

  levelScore: document.getElementById("level-score"),
  levelCoins: document.getElementById("level-coins"),
  levelAccuracy: document.getElementById("level-accuracy"),
  levelContinueBtn: document.getElementById("level-continue-btn"),

  finalScore: document.getElementById("final-score"),
  statCorrectCount: document.getElementById("stat-correct-count"),
  statWrongCount: document.getElementById("stat-wrong-count"),
  statHighestStreak: document.getElementById("stat-highest-streak"),
  playAgainBtn: document.getElementById("play-again-btn"),
  goHomeBtn: document.getElementById("go-home-btn"),

  leaderboardRows: document.getElementById("leaderboard-rows")
};

/* Audio Synth */
class SoundEngine {
  constructor() { this.ctx = null; }
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }
  playTone(freq, type = "sine", duration = 0.15, vol = 0.1) {
    if (!gameState.settings.sound) return;
    try {
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(vol, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.00001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch(e){}
  }
  playClick() { this.playTone(600, "sine", 0.05, 0.05); }
  playCorrect() {
    this.playTone(523.25, "triangle", 0.1, 0.1);
    setTimeout(() => this.playTone(659.25, "triangle", 0.2, 0.1), 100);
  }
  playWrong() {
    this.playTone(220, "sawtooth", 0.15, 0.1);
    setTimeout(() => this.playTone(174.61, "sawtooth", 0.25, 0.1), 120);
  }
}
const soundManager = new SoundEngine();

function fetchAllAvailableQuestions() {
  let combined = [];
  Object.keys(window.QuizQuestionPool).forEach(key => {
    if (Array.isArray(window.QuizQuestionPool[key])) {
      combined.push(...window.QuizQuestionPool[key]);
    }
  });
  return combined;
}

function prepareGameQuestions() {
  let questionPool = fetchAllAvailableQuestions();

  if (questionPool.length === 0) {
    alert("No question files loaded! Make sure gk.js is linked properly.");
    return;
  }

  // Filter by difficulty if enough questions match
  const filtered = questionPool.filter(
    q => q.difficulty && q.difficulty.toLowerCase() === gameState.difficulty.toLowerCase()
  );
  if (filtered.length >= 5) questionPool = filtered;

  const shuffled = shuffleArray([...questionPool]);
  const count = Math.min(shuffled.length, CONFIG.TOTAL_QUESTIONS);

  gameState.activeQuestions = shuffled.slice(0, count).map(q => ({
    ...q,
    shuffledOptions: shuffleArray([...q.options])
  }));
}

function initGameSession() {
  gameState.currentQuestionIndex = 0;
  gameState.lives = CONFIG.DEFAULT_LIVES;
  gameState.streak = 0;
  gameState.highestStreak = 0;
  gameState.correctAnswersCount = 0;
  gameState.wrongAnswersCount = 0;

  prepareGameQuestions();
  updateHUDDisplay();

  if (DOM.totalQuestionsNum) {
    DOM.totalQuestionsNum.textContent = gameState.activeQuestions.length;
  }

  switchScreen(DOM.quizScreen);
  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  stopQuestionTimer();
  gameState.isAnswerLocked = false;
  hideFeedbackOverlay();

  const currentQ = gameState.activeQuestions[gameState.currentQuestionIndex];
  if (!currentQ) {
    handleLevelCompleted();
    return;
  }

  DOM.questionText.textContent = currentQ.question;
  if (DOM.currentQuestionNum) {
    DOM.currentQuestionNum.textContent = gameState.currentQuestionIndex + 1;
  }

  const progressPercent = (gameState.currentQuestionIndex / gameState.activeQuestions.length) * 100;
  if (DOM.quizProgressFill) DOM.quizProgressFill.style.width = `${progressPercent}%`;

  DOM.answerButtons.forEach((btn, idx) => {
    btn.className = "btn btn-option";
    btn.disabled = false;
    btn.style.opacity = "1";
    btn.style.display = "flex";
    
    const optionText = currentQ.shuffledOptions[idx];
    if (optionText !== undefined) {
      btn.textContent = optionText;
      btn.dataset.value = optionText;
    } else {
      btn.style.display = "none";
    }
  });

  resetLifelines();
  startQuestionTimer();
}

function handleAnswerSelection(selectedOption, selectedBtn) {
  if (gameState.isAnswerLocked) return;
  gameState.isAnswerLocked = true;
  stopQuestionTimer();

  const currentQ = gameState.activeQuestions[gameState.currentQuestionIndex];
  const isCorrect = (selectedOption === currentQ.correctAnswer);

  DOM.answerButtons.forEach(btn => btn.disabled = true);

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    soundManager.playCorrect();
    gameState.streak++;
    gameState.correctAnswersCount++;
    if (gameState.streak > gameState.highestStreak) gameState.highestStreak = gameState.streak;

    let points = CONFIG.BASE_SCORE;
    let timeBonus = 0;
    if (gameState.timeLeft > CONFIG.FAST_ANSWER_THRESHOLD) {
      timeBonus = Math.floor(gameState.timeLeft * 0.5);
      points += timeBonus;
    }
    points += Math.floor(gameState.streak * 2);

    gameState.score += points;
    gameState.coins += 5;
    addXP(CONFIG.XP_PER_CORRECT);

    showFeedbackOverlay(true, points, gameState.streak, timeBonus);
  } else {
    selectedBtn.classList.add("wrong");
    soundManager.playWrong();
    gameState.streak = 0;
    gameState.wrongAnswersCount++;
    gameState.lives--;

    DOM.answerButtons.forEach(btn => {
      if (btn.dataset.value === currentQ.correctAnswer) btn.classList.add("correct");
    });

    showFeedbackOverlay(false, 0, 0, 0);
  }

  updateHUDDisplay();

  setTimeout(() => {
    if (gameState.lives <= 0) {
      handleGameOver();
    } else {
      gameState.currentQuestionIndex++;
      if (gameState.currentQuestionIndex >= gameState.activeQuestions.length) {
        handleLevelCompleted();
      } else {
        renderCurrentQuestion();
      }
    }
  }, 1800);
}

function startQuestionTimer() {
  gameState.timeLeft = CONFIG.TIME_PER_QUESTION;
  updateTimerUI();

  gameState.timer = setInterval(() => {
    gameState.timeLeft--;
    updateTimerUI();

    if (gameState.timeLeft <= 0) {
      stopQuestionTimer();
      handleTimeOut();
    }
  }, 1000);
}

function stopQuestionTimer() {
  if (gameState.timer) {
    clearInterval(gameState.timer);
    gameState.timer = null;
  }
}

function updateTimerUI() {
  if (DOM.timerSeconds) DOM.timerSeconds.textContent = gameState.timeLeft;
  if (DOM.quizTimer) {
    if (gameState.timeLeft <= 5) DOM.quizTimer.classList.add("warning");
    else DOM.quizTimer.classList.remove("warning");
  }
}

function handleTimeOut() {
  if (gameState.isAnswerLocked) return;
  gameState.isAnswerLocked = true;
  soundManager.playWrong();

  gameState.lives--;
  gameState.streak = 0;
  gameState.wrongAnswersCount++;

  DOM.answerButtons.forEach(btn => {
    btn.disabled = true;
    const currentQ = gameState.activeQuestions[gameState.currentQuestionIndex];
    if (btn.dataset.value === currentQ.correctAnswer) btn.classList.add("correct");
  });

  showFeedbackOverlay(false, 0, 0, 0);
  updateHUDDisplay();

  setTimeout(() => {
    if (gameState.lives <= 0) handleGameOver();
    else {
      gameState.currentQuestionIndex++;
      if (gameState.currentQuestionIndex >= gameState.activeQuestions.length) handleLevelCompleted();
      else renderCurrentQuestion();
    }
  }, 1800);
}

function addXP(amount) {
  gameState.xp += amount;
  gameState.level = Math.floor(gameState.xp / CONFIG.XP_PER_LEVEL) + 1;
}

function updateHUDDisplay() {
  if (DOM.headerPlayerName) DOM.headerPlayerName.textContent = gameState.playerName;
  if (DOM.currentLevel) DOM.currentLevel.textContent = gameState.level;
  if (DOM.currentScore) DOM.currentScore.textContent = gameState.score;
  if (DOM.currentCoins) DOM.currentCoins.textContent = gameState.coins;

  if (DOM.livesDisplayContainer) {
    let heartsHTML = "";
    for (let i = 0; i < CONFIG.DEFAULT_LIVES; i++) {
      heartsHTML += (i < gameState.lives) 
        ? `<span class="heart-icon">❤️</span>` 
        : `<span class="heart-icon" style="opacity:0.25;">🖤</span>`;
    }
    DOM.livesDisplayContainer.innerHTML = heartsHTML;
  }

  if (DOM.xpProgressFill && DOM.xpText) {
    const currXP = gameState.xp % CONFIG.XP_PER_LEVEL;
    DOM.xpProgressFill.style.width = `${(currXP / CONFIG.XP_PER_LEVEL) * 100}%`;
    DOM.xpText.textContent = `${currXP} / ${CONFIG.XP_PER_LEVEL} XP`;
  }

  if (DOM.comboStreakCount) DOM.comboStreakCount.textContent = gameState.streak;
}

function resetLifelines() {
  if (DOM.btnHint) DOM.btnHint.disabled = (gameState.coins < CONFIG.COST_HINT);
  if (DOM.btn5050) DOM.btn5050.disabled = (gameState.coins < CONFIG.COST_5050);
  if (DOM.btnSkip) DOM.btnSkip.disabled = (gameState.coins < CONFIG.COST_SKIP);
}

function handleGameOver() {
  stopQuestionTimer();
  switchScreen(DOM.gameOverScreen);
  if (DOM.finalScore) DOM.finalScore.textContent = gameState.score;
  if (DOM.statCorrectCount) DOM.statCorrectCount.textContent = gameState.correctAnswersCount;
  if (DOM.statWrongCount) DOM.statWrongCount.textContent = gameState.wrongAnswersCount;
  if (DOM.statHighestStreak) DOM.statHighestStreak.textContent = gameState.highestStreak;
}

function handleLevelCompleted() {
  stopQuestionTimer();
  switchScreen(DOM.levelCompleteScreen);
  const total = gameState.correctAnswersCount + gameState.wrongAnswersCount;
  const accuracy = total > 0 ? Math.round((gameState.correctAnswersCount / total) * 100) : 0;
  if (DOM.levelScore) DOM.levelScore.textContent = gameState.score;
  if (DOM.levelCoins) DOM.levelCoins.textContent = gameState.coins;
  if (DOM.levelAccuracy) DOM.levelAccuracy.textContent = `${accuracy}%`;
}

function switchScreen(screen) {
  [DOM.welcomeScreen, DOM.quizScreen, DOM.levelCompleteScreen, DOM.gameOverScreen].forEach(s => {
    if (s) s.classList.add("hidden");
  });
  if (screen) screen.classList.remove("hidden");
}

function showFeedbackOverlay(isCorrect, points, streak, timeBonus) {
  if (!DOM.gameFeedback) return;
  DOM.gameFeedback.classList.remove("hidden", "status-correct", "status-wrong");
  DOM.gameFeedback.classList.add(isCorrect ? "status-correct" : "status-wrong");
  if (DOM.feedbackMessage) DOM.feedbackMessage.textContent = isCorrect ? "Correct Answer!" : "Wrong Answer!";
  if (DOM.feedbackBonusPoints) DOM.feedbackBonusPoints.textContent = points;
  if (DOM.feedbackStreakCount) DOM.feedbackStreakCount.textContent = streak;
  if (DOM.feedbackTimeBonus) DOM.feedbackTimeBonus.textContent = timeBonus;
}

function hideFeedbackOverlay() {
  if (DOM.gameFeedback) DOM.gameFeedback.classList.add("hidden");
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

document.addEventListener("DOMContentLoaded", () => {
  // Start game form listener
  if (DOM.gameSetupForm) {
    DOM.gameSetupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      soundManager.playClick();
      
      const nameVal = DOM.playerNameInput ? DOM.playerNameInput.value.trim() : "";
      gameState.playerName = nameVal !== "" ? nameVal : "Guest";

      const diff = document.querySelector('input[name="difficulty"]:checked');
      if (diff) gameState.difficulty = diff.value;

      initGameSession();
    });
  }

  // Option buttons listener
  DOM.answerButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.dataset.value) handleAnswerSelection(btn.dataset.value, btn);
    });
  });

  // Screen navigation buttons
  if (DOM.levelContinueBtn) DOM.levelContinueBtn.onclick = () => switchScreen(DOM.welcomeScreen);
  if (DOM.playAgainBtn) DOM.playAgainBtn.onclick = () => initGameSession();
  if (DOM.goHomeBtn) DOM.goHomeBtn.onclick = () => switchScreen(DOM.welcomeScreen);

  // Lifeline listeners
  if (DOM.btnHint) DOM.btnHint.onclick = () => {
    if (gameState.coins < CONFIG.COST_HINT || gameState.isAnswerLocked) return;
    gameState.coins -= CONFIG.COST_HINT;
    updateHUDDisplay();
    const currentQ = gameState.activeQuestions[gameState.currentQuestionIndex];
    DOM.answerButtons.forEach(btn => {
      if (btn.dataset.value !== currentQ.correctAnswer) {
        btn.style.opacity = "0.3";
        btn.disabled = true;
      }
    });
  };

  // Loader bar simulation
  let progress = 0;
  const loadTimer = setInterval(() => {
    progress += 25;
    if (DOM.loadingProgressFill) DOM.loadingProgressFill.style.width = `${progress}%`;
    if (progress >= 100) {
      clearInterval(loadTimer);
      setTimeout(() => {
        if (DOM.loadingScreen) DOM.loadingScreen.classList.add("hidden");
      }, 200);
    }
  }, 100);
});