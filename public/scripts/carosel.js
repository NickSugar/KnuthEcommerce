$(document).ready(function () {

  $.get('./products.json')
  .then(function(data) {
    console.log(data);
    generateItems(data);
  }).catch(function(error) {
    console.log(error);
  })

//la;skjdf;lkajsdf

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
}
