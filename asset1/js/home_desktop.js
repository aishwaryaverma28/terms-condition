
///blog scroll js


document.addEventListener("DOMContentLoaded", function () {
  const scrollLeftButton = document.querySelector(".scroll-left");
  const scrollRightButton = document.querySelector(".scroll-right");
  const blogFlex = document.querySelector(".fb_blog_flex");
  const image1 = document.querySelector(".scroll-left img");
  const image2 = document.querySelector(".scroll-right img");

  scrollLeftButton.addEventListener("click", function () {
    blogFlex.scrollBy({
      left: -200, // Adjust the scroll amount as needed
      behavior: "smooth",
    });
  });

  scrollRightButton.addEventListener("click", function () {
    blogFlex.scrollBy({
      left: 200, // Adjust the scroll amount as needed
      behavior: "smooth",
    });
  });

  blogFlex.addEventListener("scroll", function () {
    const scrollableWidth = blogFlex.scrollWidth - blogFlex.clientWidth;
    if (blogFlex.scrollLeft === 0) {
      scrollLeftButton.classList.add("fb_grey_bg");
      scrollLeftButton.classList.remove("fb_red_bg");
      image1.src = "assets/images/angel_2.svg";
      image2.src = "assets/images/angel_1.svg";
    } else if (blogFlex.scrollLeft >= scrollableWidth) {
      scrollRightButton.classList.add("fb_grey_bg");
      scrollRightButton.classList.remove("fb_red_bg");
      image1.src = "assets/images/angel_2_c.svg";
      image2.src = "assets/images/angel_1_c.svg";
    } else {
      scrollLeftButton.classList.remove("fb_grey_bg");
      scrollLeftButton.classList.add("fb_red_bg");
      scrollRightButton.classList.remove("fb_grey_bg");
      scrollRightButton.classList.add("fb_red_bg");
      image1.src = "assets/images/angel_2_c.svg";
      image2.src = "assets/images/angel_1.svg";
    }
  });
});

