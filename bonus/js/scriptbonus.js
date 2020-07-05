$(document).ready(function () {
  var next = $(".next");
  var prev = $(".prev");

  next.click(nextImg);
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
  // cambio pallino ma se non clicco mi si elimina comunque la classeS
   $(".slider-wrapper .nav i").click(clickPallino);

});



// functons
function nextImg() {
  var imgActive = $(".slider-wrapper img.active");
  var iActive = $(".slider-wrapper .nav i.active");
  imgActive.removeClass("active");
  iActive.removeClass("active");
  if (imgActive.hasClass("last")) {
    $(".slider-wrapper img.first").addClass("active");
    $(".slider-wrapper .nav i.first").addClass("active");
  }
  else {
    imgActive.next().addClass("active");
    iActive.next().addClass("active");
  }
}

function prevImg() {
  var imgActive = $(".slider-wrapper img.active");
  var iActive = $(".slider-wrapper .nav i.active");
  imgActive.removeClass("active");
  iActive.removeClass("active");
  if (imgActive.hasClass("first")) {
    $(".slider-wrapper img.last").addClass("active");
    $(".slider-wrapper .nav i.last").addClass("active");
  }
  else {
    imgActive.prev().addClass("active");
    iActive.prev().addClass("active");
  }
}

// da ricreare: soluzione non fattibile se ho un grande numero di immagini, probabilmente devo usare un ciclo per controllare tutte le posizioni piu velocemente
function clickPallino(){
  var iActive = $(".slider-wrapper .nav i.active");
  var imgActive = $(".slider-wrapper img.active");
  // trovare la posizione del pallino cliccato e associarlo a quello della foto corrispondente
  iActive.removeClass("active");
  imgActive.removeClass("active");
  $(this).addClass("active");
  console.log("ha la classe",$(this).prev().hasClass("first"));
  // console.log($(this).hasClass("first") , $(this).next().hasClass("first") , $(this).prev().hasClass("last") , $(this).hasClass("last"));
  if ($(this).hasClass("first")) {
    $(".slider-wrapper img.first").addClass("active");
  }
  else if ($(this).prev().hasClass("first")) {
    $(".slider-wrapper img.first").next().addClass("active");
  }
  else if ($(this).next().hasClass("last")) {
    $(".slider-wrapper img.last").prev().addClass("active");
  }
  else if ($(this).hasClass("last")) {
    $(".slider-wrapper img.last").addClass("active");
  }

  // console.log("fesf");
}
