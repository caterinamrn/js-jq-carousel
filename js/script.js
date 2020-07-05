// Includendo le functon nel document ready
// $(document).ready(function () {
//   var next = $(".next");
//   var prev = $(".prev");
//   next.click(function () {
//     var imgActive = $(".slider-wrapper img.active");
//     var iActive = $(".slider-wrapper i.active");
//     imgActive.removeClass("active");
//     iActive.removeClass("active");
//     if (imgActive.hasClass("last")) {
//       $(".slider-wrapper img.first").addClass("active");
//       $(".slider-wrapper i.first").addClass("active");
//     }
//     else {
//       imgActive.next().addClass("active");
//       iActive.next().addClass("active");
//     }
//   });
//
//   prev.click(function () {
//     var imgActive = $(".slider-wrapper img.active");
//     var iActive = $(".slider-wrapper i.active");
//     imgActive.removeClass("active");
//     iActive.removeClass("active");
//     if (imgActive.hasClass("first")) {
//       $(".slider-wrapper img.last").addClass("active");
//       $(".slider-wrapper i.last").addClass("active");
//     }
//     else {
//       imgActive.prev().addClass("active");
//       iActive.prev().addClass("active");
//     }
//   });
//     $(document).keydown(function(){
//       console.log(event.which);
//     });
//   });

// con funzioni alla fine
$(document).ready(function () {
  var next = $(".next");
  var prev = $(".prev");

  next.click(nextImg);
  if (true) {

  }
  prev.click(prevImg);

  $(document).keydown(function(){
    console.log(event.which);
    var key = event.which;

    if (key == 39) {
      nextImg();
    }
    else if (key == 37) {
      prevImg();
    }
  });
});

// functons
function nextImg() {
  var imgActive = $(".slider-wrapper img.active");
  var iActive = $(".slider-wrapper i.active");
  imgActive.removeClass("active");
  iActive.removeClass("active");
  if (imgActive.hasClass("last")) {
    $(".slider-wrapper img.first").addClass("active");
    $(".slider-wrapper i.first").addClass("active");
  }
  else {
    imgActive.next().addClass("active");
    iActive.next().addClass("active");
  }
}

function prevImg() {
  var imgActive = $(".slider-wrapper img.active");
  var iActive = $(".slider-wrapper i.active");
  imgActive.removeClass("active");
  iActive.removeClass("active");
  if (imgActive.hasClass("first")) {
    $(".slider-wrapper img.last").addClass("active");
    $(".slider-wrapper i.last").addClass("active");
  }
  else {
    imgActive.prev().addClass("active");
    iActive.prev().addClass("active");
  }
}
