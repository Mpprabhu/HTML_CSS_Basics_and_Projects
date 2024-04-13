const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll Back to Top

    if (href == "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to Other Links

    if (href != "#" && href.startsWith("#")) {
      const SectionEl = document.querySelector(href);
      SectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
