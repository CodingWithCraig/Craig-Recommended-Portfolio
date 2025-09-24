const words = ["Technology", "Web Development", "Software Engineering"];
let currentWordIndex = 0;
let letterIndex = 0;
let isDeleting = false;
const typeSpeed = 100;
const eraseSpeed = 60;
const delayBetweenWords = 1500;
const element = document.getElementById("positions");

function type() {
  const currentWord = words[currentWordIndex];
  const visibleText = isDeleting
    ? currentWord.substring(0, letterIndex--)
    : currentWord.substring(0, letterIndex++);

  element.textContent = visibleText;

  if (!isDeleting && letterIndex === currentWord.length + 1) {
    isDeleting = true;
    setTimeout(type, delayBetweenWords);
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    currentWordIndex = (currentWordIndex + 1) % words.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? eraseSpeed : typeSpeed);
  }
}

type();
