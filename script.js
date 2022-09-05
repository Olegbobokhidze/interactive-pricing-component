"use strict";
const switcher = document.querySelector(".on-off");
const monthYear = document.querySelector(".month-year");
const slider = document.querySelector(".select");
const dollar = document.querySelector(".dollar");
const page = document.querySelector(".page-view");
let right = false;

// switching monthly billing to year billing
switcher.addEventListener("click", function () {
  if (right == false) {
    switcher.style.justifyContent = "right";
    switcher.style.backgroundColor = "#7aeadf";
    monthYear.innerHTML = "/Year";
    right = true;
  } else if (right == true) {
    switcher.style.justifyContent = "left";
    switcher.style.backgroundColor = "#CFD8EF";
    right = false;
    monthYear.innerHTML = "/Month";
  }
});
slider.addEventListener("mousemove", function () {
  let x = slider.value;
  let color = x + "0";
  slider.style.backgroundSize = color + "%";
  //   If button is on monthly billing
  if (right == false) {
    if (x == 0) {
      page.innerHTML = "0K page views";
      dollar.innerHTML = "0$";
    } else if (x == 1) {
      page.innerHTML = "5K page views";
      dollar.innerHTML = "8$";
    } else if (x == 2) {
      page.innerHTML = "10K page views";
      dollar.innerHTML = "10$";
    } else if (x == 3) {
      page.innerHTML = "50K page views";
      dollar.innerHTML = "16$";
    } else if (x == 4) {
      page.innerHTML = "100K page views";
      dollar.innerHTML = "32$";
    } else if (x == 5) {
      page.innerHTML = "200K page views";
      dollar.innerHTML = "64$";
    } else if (x == 6) {
      page.innerHTML = "300K page views";
      dollar.innerHTML = "100$";
    } else if (x == 7) {
      page.innerHTML = "400K page views";
      dollar.innerHTML = "120$";
    } else if (x == 8) {
      page.innerHTML = "600K page views";
      dollar.innerHTML = "180$";
    } else if (x == 9) {
      page.innerHTML = "800K page views";
      dollar.innerHTML = "250$";
    } else if (x == 10) {
      page.innerHTML = "1M page views";
      dollar.innerHTML = "350$";
    }
    // if button is on yearly billing
  } else if (right == true) {
    if (x == 0) {
      page.innerHTML = "0K page views";
      dollar.innerHTML = "0$";
    } else if (x == 1) {
      page.innerHTML = "5K page views";
      dollar.innerHTML = "100$";
    } else if (x == 2) {
      page.innerHTML = "10K page views";
      dollar.innerHTML = "200$";
    } else if (x == 3) {
      page.innerHTML = "50K page views";
      dollar.innerHTML = "300$";
    } else if (x == 4) {
      page.innerHTML = "100K page views";
      dollar.innerHTML = "400$";
    } else if (x == 5) {
      page.innerHTML = "200K page views";
      dollar.innerHTML = "500$";
    } else if (x == 6) {
      page.innerHTML = "300K page views";
      dollar.innerHTML = "600$";
    } else if (x == 7) {
      page.innerHTML = "400K page views";
      dollar.innerHTML = "700$";
    } else if (x == 8) {
      page.innerHTML = "600K page views";
      dollar.innerHTML = "800$";
    } else if (x == 9) {
      page.innerHTML = "800K page views";
      dollar.innerHTML = "900$";
    } else if (x == 10) {
      page.innerHTML = "1M page views";
      dollar.innerHTML = "1000$";
    }
  }
});
