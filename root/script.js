const TOTAL = 5; // 組數

const img = document.getElementById("randomImage");
const audio = document.getElementById("audioPlayer");

function randomIndex() {
  return String(Math.floor(Math.random() * TOTAL) + 1).padStart(2, "0");
}

function loadRandom() {
  const index = randomIndex();
  img.src = `images/${index}.png`;
  audio.src = `sounds/${index}.wav`;
}

function playAudio() {
  audio.play().catch(() => {
    // 手機會失敗，等第一次點擊
  });
}

// 初始
loadRandom();
playAudio();

// 播完自動換下一組
audio.addEventListener("ended", () => {
  loadRandom();
  playAudio();
});

// 手機第一次點畫面後解鎖聲音
document.body.addEventListener("click", () => {
  playAudio();
}, { once: true });

