import $ from "jquery";

window.onload = function() {
  let activeClass = "active";
  let $squareSection = $(".square-section");

  $($squareSection).each((i, el) => {
    $(el)
      .find(".square-element")
      .each((i2, el2) => {
        $(el2).on("mouseenter", () => {
          if (!$(el2).hasClass("active")) {
            $(el)
              .find(".active")
              .removeClass("active");
            $(el2).addClass("active");
          }
        });
      });
  });
};
