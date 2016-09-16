$(function () {
  // au clic sur le titre (h1)
  $("h1").on("click", function () {
    // j'affiche le premier message
    $("#t1").slideDown(500);
  });

  // au clic sur le premier message
  $("#t1").on("click", function () {
    // j'affiche le second message
    $("#t2").slideDown(500);
  });

  // au clic sur le second message
  $("#t2").on("click", function () {
    // j'affiche le troisième message
    $("#t3").slideDown(500);
  });

  // au clic sur le troisème message
  $("#t3").on("click", function () {
    // j'affiche l'image qui se trouve derrière
    $(".carte-img").fadeIn(3000);

    // je joue le son
    $("#feu")[0].play();
  });
});
