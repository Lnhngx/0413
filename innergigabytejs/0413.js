AOS.init({ duration: 800, easing: "ease-in-sine", delay: 50, once: !0 });

$(".nav__01").click(function () {
  $("html,body").animate({ scrollTop: $(".s01").offset().top }, 800);
});
$(".nav__02").click(function () {
  $("html,body").animate(
    { scrollTop: $("#s03__banner-content_01").offset().top },
    800
  );
});
$(".nav__03").click(function () {
  $("html,body").animate(
    { scrollTop: $("#s03__banner-content_02").offset().top },
    800
  );
});
$(".nav__04").click(function () {
  $("html,body").animate({ scrollTop: $(".s04").offset().top }, 800);
});
$(".nav__05").click(function () {
  $("html,body").animate({ scrollTop: $(".s05__tab-area").offset().top }, 800);
});
// $('.nav__06').click(function(){$('html,body').animate({scrollTop:$('.s06__bg').offset().top}, 800);});
$(".nav__07").click(function () {
  $("html,body").animate({ scrollTop: $(".s07__bg").offset().top }, 800);
});
$(".nav__08").click(function () {
  $("html,body").animate({ scrollTop: $(".s08__tab-area").offset().top }, 800);
});
$(".nav__09").click(function () {
  $("html,body").animate({ scrollTop: $(".s09-scroll-pc").offset().top }, 800);
});

let animating = false; // Flag to indicate if animation is in progress

$(".s04__tab-link").on("click", function (e) {
  e.preventDefault();

  // Ignore click if animation is in progress
  if (animating) {
    return;
  }

  var tabId = $(this).data("tab");

  // Ignore click if target tab is already active
  if ($("#" + tabId).hasClass("active")) {
    return;
  }

  animating = true; // Set flag to true
  $(".s04__tab-content .s04__tab-pane.active").fadeOut(300, function () {
    $(this).removeClass("active");
    $("#" + tabId)
      .fadeIn(300)
      .addClass("active");
    animating = false; // Set flag to false after animation is complete
  });
  $(".s04__tab-link").removeClass("active");
  $(this).addClass("active");
});

// Select all the progress bars on the page
const progressBars = document.querySelectorAll(
  ".s04__tab-pane__inner-content__bar"
);

// Set up an Intersection Observer to trigger the progress bar animation
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    // console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
      // Start the animation when the element is in the viewport
      const percentage = parseInt(entry.target.getAttribute("data-percentage"));
      entry.target.style.width = percentage + "%";
      // Stop observing the element once the animation has started
      // observer.unobserve(entry.target);
    } else {
      // Reset the width to 0 when the element is not in the viewport
      entry.target.style.width = 0 + "%";
    }
  });
}, options);

// Observe all the progress bar elements
progressBars.forEach(function (progressBar) {
  observer.observe(progressBar);
});

const swiper = new Swiper(".mySwiper", {
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const slideTitle = document.querySelector("#s04__slide-title");

swiper.on("slideChange", function () {
  // Get the current slide index
  const currentSlideIndex = swiper.activeIndex;
  if (currentSlideIndex === 0) slideTitle.textContent = "Cinebech R23";
  if (currentSlideIndex === 1) slideTitle.textContent = "3DMark";
  if (currentSlideIndex === 2) slideTitle.textContent = "Sisoftware Sandra";
});

$(".s05__tab").on("click", function (e) {
  e.preventDefault();

  // Ignore click if animation is in progress
  if (animating) {
    return;
  }

  var tabId = $(this).data("tab");

  // Ignore click if target tab is already active
  if ($("#" + tabId).hasClass("active")) {
    return;
  }

  animating = true; // Set flag to true
  $(".s05__tab-content .s05__tab-pane.active").fadeOut(300, function () {
    $(this).removeClass("active");
    $("#" + tabId)
      .fadeIn(300)
      .addClass("active");
    animating = false; // Set flag to false after animation is complete
  });

  $(".s05__tab").removeClass("active");
  $(this).addClass("active");
});

$(".s05__tab-pane__02__tab").on("click", function (e) {
  e.preventDefault();

  // Ignore click if animation is in progress
  if (animating) {
    return;
  }

  var tabId = $(this).data("tab");

  // Ignore click if target tab is already active
  if ($("#" + tabId).hasClass("active")) {
    return;
  }

  animating = true; // Set flag to true

  $(
    ".s05__tab-pane__02__tab-content .s05__tab-pane__inner-pane.active"
  ).fadeOut(300, function () {
    $(this).removeClass("active");
    $("#" + tabId)
      .fadeIn(300)
      .addClass("active");
    animating = false; // Set flag to false after animation is complete
  });

  $(".s05__tab-pane__02__tab").removeClass("active");
  $(this).addClass("active");
});

$(".s05__tab-pane__03__tab").on("click", function (e) {
  e.preventDefault();

  // Ignore click if animation is in progress
  if (animating) {
    return;
  }

  var tabId = $(this).data("tab");

  // Ignore click if target tab is already active
  if ($("#" + tabId).hasClass("active")) {
    return;
  }

  animating = true; // Set flag to true

  $(
    ".s05__tab-pane__03__tab-content .s05__tab-pane__inner-pane.active"
  ).fadeOut(300, function () {
    $(this).removeClass("active");
    $("#" + tabId)
      .fadeIn(300)
      .addClass("active");
    animating = false; // Set flag to false after animation is complete
  });

  $(".s05__tab-pane__03__tab").removeClass("active");
  $(this).addClass("active");
});

$(".s08__tab").on("click", function (e) {
  e.preventDefault();

  // Ignore click if animation is in progress
  if (animating) {
    return;
  }

  var tabId = $(this).data("tab");

  // Ignore click if target tab is already active
  if ($("#" + tabId).hasClass("active")) {
    return;
  }

  animating = true; // Set flag to true

  $(".s08__tab-content .s08__tab-pane.active").fadeOut(300, function () {
    $(this).removeClass("active");
    $("#" + tabId)
      .fadeIn(300)
      .addClass("active");
    $(".s08__tab-content .s08__tab-pane")
      .find(".s08__fade-up-list li")
      .css("opacity", 0);
    $(".s08__tab-content .s08__tab-pane")
      .find(".s08__fade-up-list li")
      .removeClass("fade-up-enter");
    showFadeList($(".s08__tab-content .s08__tab-pane.active"));
    animating = false; // Set flag to false after animation is complete
  });

  $(".s08__tab").removeClass("active");
  $(this).addClass("active");
});

function showFadeList($tabPane) {
  // Set a timeout to add the fade-in class to each list item
  $tabPane.find(".s08__fade-up-list li").each(function (index) {
    var $item = $(this);
    // var delay = $item.attr("data-delay");
    setTimeout(function () {
      $item.css("opacity", 1);
      $item.addClass("fade-up-enter");
    }, index * 200);
  });
}
const listContainer = document.querySelector(".s08__list-container");
const listItems = document.querySelectorAll(
  ".s08__tab-pane.active .s08__fade-up-list li"
);

const listObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      // Fade up each list item in sequence
      listItems.forEach(function (item, index) {
        setTimeout(function () {
          item.classList.add("fade-up-enter");
        }, index * 200); // Adjust delay time as needed
      });
    }
  });
}, options);

listObserver.observe(listContainer);
