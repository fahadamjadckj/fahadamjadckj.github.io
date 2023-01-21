const elements = document.querySelectorAll(".come-out");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      e.target.classList.toggle("show", e.isIntersecting);
      if (e.isIntersecting) observer.unobserve(e.target);
    });
    // console.log(entries);
  },
  {
    threshold: 0.3,
  }
);
elements.forEach((i) => {
  observer.observe(i);
});
