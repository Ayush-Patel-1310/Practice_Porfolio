const phrases = ["I am IRON MAN", "I am AYUSH PATEL"];
let phraseIndex = 0;
let letterIndex = 0;
let currentPhrase = [];
let isDeleting = false;
let typingEffectElement = document.querySelector('.typing-effect');

function type() {
  if (isDeleting) {
    if (letterIndex <= 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, 500);
      return;
    }
    currentPhrase.pop();
    letterIndex--;
  } else {
    if (letterIndex === phrases[phraseIndex].length) {
      if (phraseIndex === phrases.length - 1) {
        setTimeout(type, 5000); // Pause at the end
        return;
      }
      isDeleting = true;
      setTimeout(type, 1500); // Delay at the end of a phrase
      return;
    }
    currentPhrase.push(phrases[phraseIndex][letterIndex]);
    letterIndex++;
  }

  typingEffectElement.textContent = currentPhrase.join("");
  const typingSpeed = isDeleting ? 100 : 200; // Speed of typing
  setTimeout(type, typingSpeed);
}

type();

