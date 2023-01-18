const list = document.querySelector(".quinto");
const navb = document.querySelector(".nav");
window.onscroll = () => {
  if (window.scrollY > 400) {
    navb.classList.add("nav-scroll");
    list.classList.add("quinto-scroll");
  } else {
    navb.classList.remove("nav-scroll");
    list.classList.remove("quinto-scroll");
  }
};

let m = document.querySelectorAll("svg g[stroke-linecap='butt'] "); //seleziono tutte e m e le salvo in una variabile//

let tempo = setInterval(() => {
  let numeroAcaso = Math.floor(Math.random() * m.length);
  let mAcaso = m[numeroAcaso];
  mAcaso.style.transition = "0.2s";

  if (mAcaso.getAttribute("opacity") === 1) {
    mAcaso.setAttribute("opacity", "0");
  } else {
    mAcaso.setAttribute("opacity", "1");
  }
}, 50); //millisecondi//*/

const stop = () => {
  clearInterval(tempo);
};
