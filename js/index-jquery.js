$(document).ready(function () {

  if ($(window).width() < 1140) {
    $("#main").removeClass("container-fluid");
  }else{
    $("#main").addClass("container-fluid");
  }

  $(window).resize(function() {
    if ($(window).width() < 1140) {
      $("#main").removeClass("container-fluid");
    }else{
      $("#main").addClass("container-fluid");
    }
  })

  $('.carousel').carousel({
  interval: 6000
  })

});
