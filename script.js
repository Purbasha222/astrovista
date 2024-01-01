"use strict";
const submitBttn = document.getElementById("subBttn");
const birthDate = document.getElementById("birthdate");
const answer = document.getElementById("answer");
const userName = document.getElementById("name");
const predictionArea = document.getElementById("prediction");
const allPredictions = {
  generalPredictions: [
    "You will embark on a spontaneous travel adventure to a destination you've never considered before.",
    "An unexpected career opportunity will present itself, leading to a significant positive change.",
    "A new hobby or interest will capture your attention and become a passion.",
    "Financial gains will come from an unexpected source or investment.",
    "A long-lost friend will re-enter your life, bringing a sense of nostalgia and joy.",
    "An opportunity for further education or skill development will arise, enhancing your expertise.",
    "You'll overcome a fear or challenge that has been holding you back for years.",
    "Unexpected circumstances will lead to a positive change in your living situation.",
    "A pet will enter your life, bringing companionship and unconditional love.",
    "Your social circle will expand, introducing you to diverse perspectives and experiences.",
    "A longstanding goal will finally be achieved, bringing a sense of fulfillment and accomplishment.",
    "You'll forge a lasting friendship with someone you meet through an unconventional circumstance.",
    "You'll discover a hidden talent or skill that surprises both you and those around you.",
  ],
};

// const randomColors = ["#00FFFF", "#00FF00", "#FFA500", "#FFFF00"];
const randomColors = ["#000099", " #006600", " #9900ff", " #ff3300"];

submitBttn.addEventListener("click", function () {
  if (userName.value && birthDate.value) {
    const birthData = birthDate.value.split("-");
    const date = Number(birthData[2]);
    const month = Number(birthData[1]);
    const zodiac = findZodiacSign(date, month);
    answer.textContent = zodiac;
    predictionArea.textContent = `"Hi! ${userName.value}, ${findPrediction()}"`;
    predictionArea.style.color = findRandomColor();
  }
});

function findZodiacSign(date, month) {
  switch (month) {
    case 1:
      return date >= 1 && date <= 19 ? "capricornus🐐" : "Aquarius🏺";

    case 2:
      return date >= 1 && date <= 18 ? "Aquarius🏺" : "Pisces🐟";

    case 3:
      return date >= 1 && date <= 20 ? "Pisces🐟" : "Aries🐏";

    case 4:
      return date >= 1 && date <= 19 ? "Aries🐏" : "Taurus🐂";

    case 5:
      return date >= 1 && date <= 20 ? "Taurus🐂" : "Gemini💎";

    case 6:
      return date >= 1 && date <= 21 ? "Gemini💎" : "Cancer🦀";

    case 7:
      return date >= 1 && date <= 22 ? "Cancer🦀" : "Leo🦁";

    case 8:
      return date >= 1 && date <= 22 ? "Leo🦁" : "Virgo♍";

    case 9:
      return date >= 1 && date <= 22 ? "Virgo♍" : "Libra♎";

    case 10:
      return date >= 1 && date <= 23 ? "Libra♎" : "Scorpius🦂";

    case 11:
      return date >= 1 && date <= 21 ? "Scorpius🦂" : "Sagittarius🏹";

    case 12:
      return date >= 1 && date <= 21 ? "Sagittarius🏹" : "Capricornus🐐";
  }
}

function findPrediction() {
  const randomNum = Math.trunc(Math.random() * 13);
  return allPredictions.generalPredictions[randomNum];
}

function findRandomColor() {
  const randomColorNum = Math.trunc(Math.random() * 4);
  return randomColors[randomColorNum];
}

//spin wheel code
const spinBttn = document.querySelector(".spinBttn");
const wheel = document.querySelector(".wheel");
const style = document.querySelector("style");

const keyFrames = [
  `@keyframes rotate {
    0% {
      transform: rotateZ(0deg);
    }
  
    100% {
      transform: rotateZ(2000deg);
    }
  }`,
  `@keyframes rotate {
    0% {
      transform: rotateZ(0deg);
    }
  
    100% {
      transform: rotateZ(2100deg);
    }
  }`,
  `@keyframes rotate {
    0% {
      transform: rotateZ(0deg);
    }
  
    100% {
      transform: rotateZ(2200deg);
    }
  }`,
  `@keyframes rotate {
    0% {
      transform: rotateZ(0deg);
    }
  
    100% {
      transform: rotateZ(2300deg);
    }
  }`,
];

spinBttn.addEventListener("click", () => {
  if (style.innerHTML) {
    style.innerHTML = "";
  } else {
    style.appendChild(document.createTextNode(keyFrames[randomNum()]));
  }
  wheel.classList.toggle("rotateAnimation");
  if (spinBttn.textContent === "Try Again!") {
    spinBttn.textContent = "Spin the wheel!";
  } else {
    spinBttn.textContent = "Try Again!";
  }
});

function randomNum() {
  return Math.trunc(Math.random() * 4);
}
