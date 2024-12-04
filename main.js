// KF Panda Search

// HTML Variables
let charNameEl = document.getElementById("char-name");
let charQuoteEl = document.getElementById("char-quote");
let charImgEl = document.getElementById("char-img");
let themeInEl = document.getElementById("theme-in");

document.getElementById("btn").addEventListener("click", btnClicked);
document.getElementById("theme-btn").addEventListener("click", changeTheme);

function btnClicked() {
  // Input
  let name = document.getElementById("char-in").value.toLowerCase();

  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    charNameEl.innerHTML = "Po";
    charQuoteEl.innerHTML = "Buddy, I am the Dragon Warrior!";
    charImgEl.src = "img/po.png";
  } else if (name === "tigress" || name === "master tigress") {
    charNameEl.innerHTML = "Tigress";
    charQuoteEl.innerHTML = "That was hardcore!";
    charImgEl.src = "img/tigress.png";
  } else if (name === "mantis") {
    charNameEl.innerHTML = "Mantis";
    charQuoteEl.innerHTML = "Fear the Bug!";
    charImgEl.src = "img/mantis.png";
  } else if (name === "monkey") {
    charNameEl.innerHTML = "Monkey";
    charQuoteEl.innerHTML = "We should hang out!";
    charImgEl.src = "img/monkey.png";
  } else if (name === "boss wolf" || name === "bosswolf") {
    charNameEl.innerHTML = "Boss Wolf";
    charQuoteEl.innerHTML =
      "It's almost done, Lord Shen, but we've run out of metal.";
    charImgEl.src = "img/boss-wolf.png";
  } else if (name === "crane") {
    charNameEl.innerHTML = "Crane";
    charQuoteEl.innerHTML = "Look, you don't belong here.";
    charImgEl.src = "img/crane.png";
  } else if (name === "croc") {
    charNameEl.innerHTML = "Croc";
    charQuoteEl.innerHTML = "The only hero in this town is a dead one!";
    charImgEl.src = "img/croc.png";
  } else if (name === "kai") {
    charNameEl.innerHTML = "Kai";
    charQuoteEl.innerHTML =
      "I fought by his side. I loved him like a brother. And he... betrayed me. Well, now I will destroy everything he has created!";
    charImgEl.src = "img/kai.png";
  } else if (name === "mr ping" || name === "mrping") {
    charNameEl.innerHTML = "Mr. Ping";
    charQuoteEl.innerHTML =
      "To make something special, you just have to believe it's special.";
    charImgEl.src = "img/mr-ping.png";
  } else if (name === "oogway") {
    charNameEl.innerHTML = "Oogway";
    charQuoteEl.innerHTML =
      "I think they will all lose until they find a battle worth fighting.";
    charImgEl.src = "img/oogway.png";
  } else if (name === "shen") {
    charNameEl.innerHTML = "Shen";
    charQuoteEl.innerHTML =
      "Ah, there you are, Soothsayer. It seems your fortune-telling skills are not as good as you thought.";
    charImgEl.src = "img/Shen.png";
  } else if (name === "shifu") {
    charNameEl.innerHTML = "Shifu";
    charQuoteEl.innerHTML =
      "Well done, students—if you were trying to disappoint me.";
    charImgEl.src = "img/shifu.png";
  } else if (name === "soothsayer") {
    charNameEl.innerHTML = "Soothsayer";
    charQuoteEl.innerHTML =
      "Even with his poor eyesight, he can see the truth. Why is it that you cannot?";
    charImgEl.src = "img/soothsayer.png";
  } else if (name === "storming ox" || name === "stormingox") {
    charNameEl.innerHTML = "Storming Ox";
    charQuoteEl.innerHTML = "You insolent fool!";
    charImgEl.src = "img/storming-ox.png";
  } else if (name === "tai lung" || name === "tailung") {
    charNameEl.innerHTML = "Tai Lung";
    charQuoteEl.innerHTML =
      "Finally, a worthy opponent! Our battle will be legendary!";
    charImgEl.src = "img/tai-lung.png";
  } else {
    charNameEl.innerHTML = "?????";
    charQuoteEl.innerHTML = "---------";
    charImgEl.src = "img/question-mark.png";
  }
}

function changeTheme() {
  let themeValue = themeInEl.value.toLowerCase();
  console.log("CHANGED THEME");
  if (themeValue === "dark" || themeValue === "black") {
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    document.getElementById("header").style.color = "white";
    document.getElementById("para").style.color = "white";
  } else if (themeValue === "light" || themeValue === "white") {
    document.body.style.backgroundColor = "rgba(255,255,255, 0.7)";
    document.getElementById("header").style.color = "black";
    document.getElementById("para").style.color = "black";
  } else if (themeValue === "random") {
    let r1 = Math.round(Math.random() * 255);
    let g1 = Math.round(Math.random() * 255);
    let b1 = Math.round(Math.random() * 255);
    let r2 = Math.round(Math.random() * 255);
    let g2 = Math.round(Math.random() * 255);
    let b2 = Math.round(Math.random() * 255);
    document.body.style.backgroundColor =
      "rgba(" + r1 + "," + g1 + "," + b1 + ", 0.7)";
    document.getElementById("header").style.color =
      "rgb(" + r2 + "," + g2 + "," + b2 + ")";
    document.getElementById("para").style.color =
      "rgb(" + r2 + "," + g2 + "," + b2 + ")";
  }
}
