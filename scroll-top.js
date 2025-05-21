
  window.onscroll = function () {
    const btn = document.querySelector(".scroll-to-top");
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };


  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
