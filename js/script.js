const resumeBtns = document.querySelectorAll(".resume-btn");
resumeBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const resumeDetail = document.querySelectorAll(".resume-detail");
    resumeBtns.forEach((btn) => {
      btn.classList.remove("active");
    });

    btn.classList.add("active");

    resumeDetail.forEach((detail) => {
      detail.classList.remove("active");
    });

    resumeDetail[index].classList.add("active");
  });
});

const arrowRigth = document.querySelector(
  ".portfolio-box .naviation .arrow-right"
);
const arrowLeft = document.querySelector(
  ".portfolio-box .naviation .arrow-left"
);

let index = 0;

const activePortfolio = () => {
  const imgSlides = document.querySelector(".portfolio-box .img-slide");

  const portfolioDetails = document.querySelectorAll(".portfolio-detail");

  imgSlides.style.transform = `translate(calc(${index * -100}% - ${
    index * 2
  }rem))`;

  portfolioDetails.forEach((detail) => {
    detail.classList.remove("active");
  });
  portfolioDetails[index].classList.add("active");
};

arrowRigth.addEventListener("click", () => {
  if (index < 4) {
    index++;
    arrowLeft.classList.remove("disabled");
  } else {
    index = 5;
    arrowRigth.classList.add("disabled");
  }
  activePortfolio();
});

arrowLeft.addEventListener("click", () => {
  if (index > 1) {
    index--;
    arrowRigth.classList.remove("disabled");
  } else {
    index = 0;
    arrowLeft.classList.add("disabled");
  }
  activePortfolio();
});
