var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function makehitrun() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function makebubble() {
  var clutter = "";

  for (var i = 1; i <= 152; i++) {
    var sl = Math.floor(Math.random() * 10);
    clutter += ` <div class="bubble">${sl} </div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function maketimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval"); //.textContent = timer;
      timerval.textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML = `<h1> Game Over </h1>`;
    }
  }, 1000);
}

// Event bubbling :-

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clickedNum = Number(dets.target.textContent);
  if (clickedNum === hitrn) {
    increaseScore();
    makebubble();
    makehitrun();
  }
});

maketimer();

makebubble();

makehitrun();
