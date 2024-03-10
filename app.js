let nav = document.querySelector("nav");
let lines = document.querySelector(".lines");
lines.addEventListener("click", () => {
  nav.classList.toggle("classforheader");
});

let navlistli = document.querySelectorAll(".navlist li");
navlistli.forEach((item, index) => {
  setTimeout(() => {
    item.style.transform = "translateY(0%)";
  }, index * 100);
});

const addClassWhenNear = (selector, className, distance) => {
  const element = document.querySelector(selector);
  if (!element) return;
  window.addEventListener("scroll", () => {
    const rect = element.getBoundingClientRect();
    if (rect.top - distance < window.innerHeight) {
      element.classList.add(className);
      window.removeEventListener("scroll", addClassWhenNear);
    }
  });
};

addClassWhenNear(".ms", "showup", 5);

addClassWhenNear(".sr", "showup", 5);

addClassWhenNear(".um", "showup", 5);

addClassWhenNear(".ow", "showup", 5);

let logo = document.querySelector(".logo");
logo.style.transform = "translateY(0%)";

let faqwrap = document.querySelector(".faq-wrap");
let faq = document.querySelector("#faq");
window.addEventListener("scroll", () => {
  let rect = faqwrap.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    faq.classList.add("da-an");
  } else {
    faq.classList.remove("da-an");
  }
});

let daWrap = document.querySelector(".da-wrapper");
let da = document.querySelector(".da");
window.addEventListener("scroll", () => {
  let rect = daWrap.getBoundingClientRect();
  let mart = rect.top + 80;
  if (mart < window.innerHeight) {
    da.classList.add("da-an");
  } else {
    da.classList.remove("da-an");
  }
});

let footer = document.querySelector("footer");
let footerclass = document.querySelector(".footer");
window.addEventListener("scroll", () => {
  let rect = footer.getBoundingClientRect();
  let mart = rect.top + 50;
  if (mart < window.innerHeight) {
    footerclass.classList.add("da-an");
  } else {
    footerclass.classList.remove("da-an");
  }
});

let contactForm = document.querySelector(".contact-form");
let cfc = document.querySelector(".cfc");
window.addEventListener("scroll", () => {
  let rect = contactForm.getBoundingClientRect();
  let mart = rect.top + 50;
  if (mart < window.innerHeight) {
    cfc.classList.add("da-an");
  } else {
    cfc.classList.remove("da-an");
  }
});

let ctbc = document.querySelector(".ctbc");
let ctb = document.querySelector(".ctb");
window.addEventListener("scroll", () => {
  let rect = ctbc.getBoundingClientRect();
  let mart = rect.top + 100;
  if (mart < window.innerHeight) {
    ctb.classList.add("da-an");
  } else {
    ctb.classList.remove("da-an");
  }
});

let sic = document.querySelector(".sign-in");
let body = document.querySelector("body");
let hs = document.querySelector("#home");
// const homePgBefore = document.querySelector('.home-pg::before');
const sibo = () => {
  body.classList.add("home-pg");
  // homePgBefore.style.backdropFilter = 'blur(50px)';
  sic.style.opacity = "1";
  sic.style.transform = "translateY(0%)";
};

let cross = document.querySelector(".cross");
cross.addEventListener("click", () => {
  body.classList.remove("home-pg");
  sic.style.opacity = "0";
  sic.style.transform = "translateY(-400%)";
});

const creds = () => {
  let username = document.querySelector("#usern").value; // Get the value of the username input
  let password = document.querySelector("#passw").value; // Get the value of the password input
  let credbtn = document.querySelector(".si");

  if (username === "user" && password === "user") {
    // Define body and sic if they are not already defined
    let body = document.querySelector("body");
    let sic = document.querySelector(".sign-in");
    let sin = document.querySelector(".sin");
    body.classList.remove("home-pg");
    sic.style.opacity = "0";
    sic.style.transform = "translateY(-400%)";
    sin.style.display='none'
    alert('Welcome ❤')
  } 
  else {
    alert("Wrong Credentials");
    password = "";
  }
};
