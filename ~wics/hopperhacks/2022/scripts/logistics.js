//Copyright © 2021 HackMIT
//https://hackmit.org/

let involved = document.getElementById("involved");
let prize = document.getElementById("prize");
let schedule = document.getElementById("schedule");
let involvedMobile = document.getElementById("involved-mobile");
let prizeMobile = document.getElementById("prize-mobile");
let scheduleMobile = document.getElementById("schedule-mobile");

let logistics = [
  involved,
  prize,
  schedule,
  involvedMobile,
  prizeMobile,
  scheduleMobile,
];


let lightLabelColor = "#ffc57a";
let darkLabelColor = "#9470ff";
let lightTextColor = "#63594c";
let darkTextColor = "#f9f3e5";

function showModal(logistic) {
  document.body.classList.toggle("modal-open");
  document.querySelector("html").style.overflow = "hidden";
  let logistic_id = logistic.id;
  let modal = document.getElementById(`${logistic_id}-modal`);
  let description = document.getElementById(`${logistic_id}-column1-text`);
  let resources = document.getElementById(`${logistic_id}-column3`);
  let questions = document.getElementById(`${logistic_id}-column2`);
  let label = document.getElementById(`${logistic_id}-column1`);
  if (!logistic_id.includes("mobile")) {	
    description.style.display = "block";
  }
  modal.style.display = "flex";
  
}

logistics.forEach((logistic) => {
  logistic.addEventListener("click", () => {
    showModal(logistic);
  });
});

function hide_modal(id) {
  document.body.classList.toggle("modal-open");
  document.querySelector("html").style.overflowY = "scroll";
  let modal = document.getElementById(id);
  let hidden = document.getElementsByClassName("modal-hidden");
  for (let i = 0; i < hidden.length; i++) {
    hidden[i].style.display = "none";
  }
  modal.style.display = "none";
}

let modals = document.getElementsByClassName("modal");
for (let i = 0; i < modals.length; i++) {
  let close_button = modals[i].getElementsByClassName("close")[0];
  close_button.addEventListener("click", () => hide_modal(modals[i].id));
  modals[i].addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      hide_modal(modals[i].id);
    }
  });
}

//navbars
let navbars = document.getElementsByClassName("modal-navbar");
let navbar_labels = document.getElementsByClassName("navbar-txt-logistic");
for (let i = 0; i < navbars.length; i++) {
  navbars[i].addEventListener("click", (event) => {
    if (event.target.className == "navbar-txt-logistic") {
      for (let i = 0; i < navbar_labels.length; i++) {
        navbar_labels[i].style.color = lightTextColor;
      }
      event.target.style.color = lightLabelColor;
      show_info(event.target.id);
    }
  });
}

function show_info(id) {
  let hidden = document.getElementsByClassName("modal-hidden");
  for (let i = 0; i < hidden.length; i++) {
    hidden[i].style.display = "none";
  }

  let content = document.getElementById(`${id}-text`);
  content.style.display = "block";
}
