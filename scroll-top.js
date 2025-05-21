
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

  function scrollToTop() {
    const duration = 1000; 
    const start = window.pageYOffset;
    const startTime = performance.now();

    function scrollStep(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); 
      const ease = 1 - Math.pow(1 - progress, 3); 

      window.scrollTo(0, start * (1 - ease));

      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    }

    requestAnimationFrame(scrollStep);
  }