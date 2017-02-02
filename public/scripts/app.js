$(document).ready(function () {

  var productImages = [
    "http://placehold.it/400x400",
    "http://placehold.it/401x400",
    "http://placehold.it/402x400",
    "http://placehold.it/403x400",
    "http://placehold.it/404x400",
    "http://placehold.it/405x400"
  ]

  $('.carousel').attr('src', productImages[0])
  var scroll = setInterval(carouselRight, 5000)

  function carouselRight () {
    var firstImage = productImages.shift()
    productImages.push(firstImage)
    $('.carousel').attr('src', productImages[0])
  }
  $('.rightCarousel').on('click', function(){
    clearInterval(scroll);
    carouselRight();
    scroll = setInterval(carouselRight, 5000);
  })

  function carouselLeft () {
    var firstImage = productImages.pop()
    productImages.unshift(firstImage)
    $('.carousel').attr('src', productImages[0])
  }
  $('.leftCarousel').on('click', function () {
    clearInterval(scroll);
    carouselLeft();
    scroll = setInterval(carouselRight, 5000);
  })



})
