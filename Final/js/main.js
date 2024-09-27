document.querySelector(".back").addEventListener("click", () => {
  window.scrollTo(0, 0);
});

let list = document.querySelector("header nav .links ul ");
let listItem = document.querySelectorAll("header nav .links ul li");
let login = document.querySelector(".login-btn ");
let signup = document.querySelector(".signup-btn ");

let arrImage = ["image/1.jpg", "image/2.jpg", "image/3.jpg"];
let image = document.querySelector(".swiper-slide a img");
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

const handelImage = () => {
  arrImage.forEach((element, index) => {
    let currentIndex = index;

    nextBtn.addEventListener("click", () => {
      if (currentIndex < arrImage.length - 1) {
        currentIndex++;
        image.src = arrImage[currentIndex];
      } else {
        currentIndex = 0;
        image.src = arrImage[currentIndex];
      }
    });

    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        image.src = arrImage[currentIndex];
      } else {
        currentIndex = arrImage.length - 1;
        image.src = arrImage[currentIndex];
      }
    });
  });
};

let randomImage = Math.floor(Math.random() * arrImage.length);

function changeImage() {
  // إضافة صنف التلاشي
  image.classList.add("active");

  setTimeout(() => {
    image.src = arrImage[randomImage];
    randomImage++;
    if (randomImage > arrImage.length - 1) {
      randomImage = 0;
    }

    image.classList.remove("active");
  }, 1000);
}

setInterval(changeImage, 3000);

if (location.pathname === "/index.html") {
  handelImage();
}

let btn_open = document.querySelector(".btn_open");
btn_open.addEventListener("click", () => {
  list.classList.toggle("active");

  if (list.classList.contains("active")) {
    listItem.forEach((li) => {
      li.addEventListener("click", () => {
        list.classList.remove("active");
      });
    });
  }
});

let btn_close = document.querySelector(".btn_close");
btn_close.addEventListener("click", () => {
  list.classList.toggle("active");
});

var mediaQuery = window.matchMedia("(max-width: 767px)");

function updateIcons(e) {
  if (e.matches) {
    login.innerHTML = `<i class="fa-solid fa-right-to-bracket"></i>`;
    signup.innerHTML = `<i class="fa-solid fa-user-plus"></i>`;
  } else {
    login.innerHTML = ` تسجيل الدخول  <i class="fa-solid fa-right-to-bracket"></i>`;
    signup.innerHTML = `  انشاء حساب <i class="fa-solid fa-user-plus"></i>`;
  }
}

updateIcons(mediaQuery);

mediaQuery.addEventListener("change", updateIcons);

let email = document.querySelector(".email");
let password = document.querySelector(".password");

let cheackEmail = "";
let cheackPassword = "";

email.addEventListener("input", (e) => {
  cheackEmail = e.target.value;
});

password.addEventListener("input", (e) => {
  cheackPassword = e.target.value;
});

let loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (cheackEmail === "skodrnh@gmai.com" && cheackPassword !== "") {
    location.href = "index.html";
  }
});
