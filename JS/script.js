const img = document.querySelector("#img");
const passInp = document.querySelector("#password");
const strength = document.querySelector("#strength");
const eye = document.querySelector("#eye");

function checkStrength() {
  let password = passInp.value;
  let length = password.length;

  let hasUppercase = /[A-Z]/.test(password);
  let hasLowercase = /[a-z]/.test(password);
  let hasNumber = /[0-9]/.test(password);
  let hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

  let isRepetitive = /(.)\1{2,}/.test(password);

  let strengthLevel = 0;

  if (length === 0) {
    strengthLevel = 0;
  } else if (length <= 2) {
    strengthLevel = 1;
  } else if (length <= 4) {
    strengthLevel = 2;
  } else if (length <= 6) {
    strengthLevel = 3;
  } else if (length <= 8) {
    strengthLevel = 4;
  } else {
    strengthLevel = 5;
  }

  let varietyScore = 0;
  if (hasUppercase) varietyScore++;
  if (hasLowercase) varietyScore++;
  if (hasNumber) varietyScore++;
  if (hasSpecialChar) varietyScore++;

  if (isRepetitive) {
    strengthLevel = Math.max(strengthLevel - 2, 1);
  }

  if (varietyScore >= 3) {
    strengthLevel = Math.min(strengthLevel + 1, 5);
  }

  switch (strengthLevel) {
    case 0:
      img.src =
        "https://static.wikia.nocookie.net/the-uncanny-incredible/images/6/60/Ezgif-frame-001.png";
      strength.innerHTML = "Strength:";
      break;
    case 1:
      img.src =
        "https://static.wikia.nocookie.net/the-uncanny-incredible/images/6/60/Ezgif-frame-001.png";
      strength.innerHTML = 'Strength: <span style="color:red">Weakest</span>';
      break;
    case 2:
      img.src =
        "https://static.wikia.nocookie.net/the-uncanny-incredible/images/1/19/Ezgif-frame-001_1.png";
      strength.innerHTML =
        'Strength: <span style="color:rgb(247, 56, 56);">Weak</span>';
      break;
    case 3:
      img.src =
        "https://static.wikia.nocookie.net/the-uncanny-incredible/images/a/ad/7hd.png";
      strength.innerHTML =
        'Strength: <span style="color:yellow">Average</span>';
      break;
    case 4:
      img.src =
        "https://static.wikia.nocookie.net/the-uncanny-incredible/images/2/26/Phase_2.jpg";
      strength.innerHTML =
        'Strength: <span style="color:lightgreen">Strong</span>';
      break;
    case 5:
      img.src =
        "https://static.wikia.nocookie.net/the-uncanny-incredible/images/e/ee/Phase_1.jpg";
      strength.innerHTML =
        'Strength: <span style="color:green;">Perfect </span>';
      break;
  }
}

function showPass() {
  if (passInp.type === "password") {
    passInp.type = "text";
    eye.style.color = "orange";
  } else {
    passInp.type = "password";
    eye.style.color = "black";
  }
}

passInp.addEventListener("input", checkStrength);
eye.addEventListener("click", showPass);
