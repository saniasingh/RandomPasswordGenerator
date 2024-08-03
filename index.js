// const heading = document.querySelector(h1);

const passwordBox = document.getElementById("passwrd");
const pressButton = document.getElementById("btn");
const CopyImage = document.getElementById("copyImage");
const passwordLength = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const requiredNumbers = "1234567890";
const specialSymbols = "@#$&*%_+?~!";

const allChars = upperCase + lowerCase + requiredNumbers + specialSymbols;

function generatePassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += specialSymbols[Math.floor(Math.random() * specialSymbols.length)];
  password +=
    requiredNumbers[Math.floor(Math.random() * requiredNumbers.length)];

  while (passwordLength > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
  pressButton.style.backgroundColor = "#1E5128";
}

// function getRandomNum() {
//   const randomNumber = Math.random() * 10;
//   // console.log("Sania Clicked!!");
// }

function copyPassword(){
    passwordBox.select();
    document.execCommand('Copy');
}

pressButton.addEventListener("click", generatePassword);
CopyImage.addEventListener("click", copyPassword);

