$(document).ready(function () {
  // Toggle mobile menu
  $(".header__burger img").on("click", function () {
    $(".header__mobile-menu").removeClass("hidden");
    $(".header__burger").css("opacity", "0");
  });

  // Close mobile menu
  $(".header__mobile-close img").on("click", function () {
    $(".header__mobile-menu").addClass("hidden");
    $(".header__burger").css("opacity", "1");
  });

  // Close mobile menu when clicking on any menu item
  $(".header__mobile-item a").on("click", function () {
    $(".header__mobile-menu").addClass("hidden");
    $(".header__burger").css("opacity", "1");
  });
});
