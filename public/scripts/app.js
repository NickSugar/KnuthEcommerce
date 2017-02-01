$(document).ready(function () {

  var productImages = [
    'url("http://piq.codeus.net/static/media/userpics/piq_32381_400x400.png")',
    'url("http://placehold.it/401x400")',
    'url("http://placehold.it/402x400")',
    'url("http://placehold.it/403x400")',
    'url("http://placehold.it/404x400")',
    'url("http://placehold.it/405x400")'
  ]


  var scroll = setInterval(carouselRight, 5000)

  function carouselRight () {
    var firstImage = productImages.shift()
    productImages.push(firstImage)
    $('.carousel').css('background-image', productImages[0])
  }
  $('.rightCarousel').on('click', function(){
    clearInterval(scroll);
    carouselRight();
    scroll = setInterval(carouselRight, 5000);
  })

  function carouselLeft () {
    var firstImage = productImages.pop()
    productImages.unshift(firstImage)
    $('.carousel').css('background-image', productImages[0])
  }
  $('.leftCarousel').on('click', function () {
    clearInterval(scroll);
    carouselLeft();
    scroll = setInterval(carouselRight, 5000);
  })



})
