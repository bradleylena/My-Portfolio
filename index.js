const fadeSections = document.querySelectorAll(
  ".herocontent, .blogcontent, .contactcontent"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

fadeSections.forEach((section) => {
  observer.observe(section);
});
