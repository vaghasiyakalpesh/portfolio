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
