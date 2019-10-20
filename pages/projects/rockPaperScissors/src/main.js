let view = document.getElementById("view");
let result = document.getElementById("result");
let finalScore = document.getElementById("finalScore");
let score = [0, 0];

function pcChoose() {
  let num = Math.floor(Math.random() * 3 + 1);
  if (num == 1) {
    view.style.animation = "flip 1s 1";
    setTimeout(function() {
      view.style.animation = "clear 1s 1";
      view.style.backgroundImage = "url('assets/rock.svg')";
    }, 300);

    return "rock";
  } else if (num == 2) {
    view.style.animation = "flip 1s 1";
    setTimeout(function() {
      view.style.animation = "clear 1s 1";
      view.style.backgroundImage = "url('assets/paper.svg')";
    }, 400);

    return "paper";
  } else if (num == 3) {
    view.style.animation = "flip 1s 1";
    setTimeout(function() {
      view.style.animation = "clear 1s 1";
      view.style.backgroundImage = "url('assets/scissors.svg')";
    }, 300);

    return "scissors";
  } else {
    view.innerText = "error 403";
  }
  // console.log(num);
}

function paper() {
  let ans = pcChoose();
  if (ans == "paper") {
    draw();
  } else if (ans == "rock") {
    win();
  } else if (ans == "scissors") {
    loose();
  }
}

function rock() {
  let ans = pcChoose();
  if (ans == "paper") {
    loose();
  } else if (ans == "rock") {
    draw();
  } else if (ans == "scissors") {
    win();
  }
}

function scissors() {
  let ans = pcChoose();
  if (ans == "paper") {
    win();
  } else if (ans == "rock") {
    loose();
  } else if (ans == "scissors") {
    draw();
  }
}

function win() {
  score[0] += 1;
  result.innerText = "😊";
  finalScore.innerText = score[0] + " : " + score[1];
}
function loose() {
  score[1] += 1;

  result.innerText = "😥";
  finalScore.innerText = score[0] + " : " + score[1];
}
function draw() {
  result.innerText = "🤝";
  finalScore.innerText = score[0] + " : " + score[1];
}
