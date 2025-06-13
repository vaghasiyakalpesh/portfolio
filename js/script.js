const navLinks = document.querySelectorAll("header nav a");
const logoLink = document.querySelector(".logo");
const sections = document.querySelectorAll("section");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("header nav");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

const activePage = () => {
  const header = document.querySelector("header");
  const barsBox = document.querySelector(".bars-box");

  header.classList.remove("active");
  setTimeout(() => {
    header.classList.add("active");
  }, 1100);

  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  barsBox.classList.remove("active");
  setTimeout(() => {
    barsBox.classList.add("active");
  }, 1100);

  sections.forEach((section) => {
    section.classList.remove("active");
  });

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Function to save current section to localStorage
const saveCurrentSection = (sectionIndex) => {
  localStorage.setItem("currentSection", sectionIndex);
};

// Function to load saved section from localStorage
const loadSavedSection = () => {
  const savedSection = localStorage.getItem("currentSection");
  if (savedSection !== null) {
    const sectionIndex = parseInt(savedSection);

    // Activate the saved section
    activePage();
    navLinks[sectionIndex].classList.add("active");

    setTimeout(() => {
      sections[sectionIndex].classList.add("active");
      // Load resume tab state only if we're on the resume section
      loadResumeTabState();
    }, 1100);
  } else {
    // If no saved section, default to first section (home)
    activePage();
    navLinks[0].classList.add("active");

    setTimeout(() => {
      sections[0].classList.add("active");
    }, 1100);
  }
};

// Function to save current resume tab to sessionStorage
const saveResumeTabState = (tabIndex) => {
  sessionStorage.setItem("activeResumeTab", tabIndex);
};

// Function to load saved resume tab from sessionStorage
const loadResumeTabState = () => {
  const savedTab = sessionStorage.getItem("activeResumeTab");
  const resumeBtns = document.querySelectorAll(".resume-btn");
  const resumeDetail = document.querySelectorAll(".resume-detail");

  if (savedTab !== null && resumeBtns.length > 0) {
    const tabIndex = parseInt(savedTab);

    // Remove active class from all buttons and details
    resumeBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    resumeDetail.forEach((detail) => {
      detail.classList.remove("active");
    });

    // Activate the saved tab
    if (resumeBtns[tabIndex] && resumeDetail[tabIndex]) {
      resumeBtns[tabIndex].classList.add("active");
      resumeDetail[tabIndex].classList.add("active");
    }
  }
};

// Function to reset resume tab to default (Experience)
const resetResumeTab = () => {
  sessionStorage.removeItem("activeResumeTab");
  const resumeBtns = document.querySelectorAll(".resume-btn");
  const resumeDetail = document.querySelectorAll(".resume-detail");

  if (resumeBtns.length > 0) {
    // Remove active class from all
    resumeBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    resumeDetail.forEach((detail) => {
      detail.classList.remove("active");
    });

    // Set first tab (Experience) as active
    resumeBtns[0].classList.add("active");
    resumeDetail[0].classList.add("active");
  }
};

navLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    if (!link.classList.contains("active")) {
      // Reset resume tab when navigating away from resume section
      const currentSection = localStorage.getItem("currentSection");
      if (currentSection !== null && parseInt(currentSection) !== index) {
        resetResumeTab();
      }

      activePage();
      link.classList.add("active");

      // Save current section index
      saveCurrentSection(index);

      setTimeout(() => {
        sections[index].classList.add("active");
        // Load resume tab state only if we're navigating to the resume section
        if (sections[index].classList.contains("resume")) {
          loadResumeTabState();
        }
      }, 1100);
    }
  });
});

logoLink.addEventListener("click", () => {
  if (!navLinks[0].classList.contains("active")) {
    // Reset resume tab when navigating to home
    resetResumeTab();

    activePage();
    navLinks[0].classList.add("active");

    // Save home section (index 0)
    saveCurrentSection(0);

    setTimeout(() => {
      sections[0].classList.add("active");
    }, 1100);
  }
});

// Load the saved section when page loads
window.addEventListener("load", () => {
  loadSavedSection();
});

// Resume tab functionality with state saving
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

    // Save the current tab state
    saveResumeTabState(index);
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
