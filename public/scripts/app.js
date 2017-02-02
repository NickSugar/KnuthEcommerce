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

$.get('./products.json')
  .then(function(data) {
    console.log(data);
    generateItems(data);
  }).catch(function(error) {
    console.log(error);
  })

function generateSection(object) {
  var counter = 1
  for(var prop in object) {
    var $sec = $('<section>', {id: "blade"+counter, "class": "col-12 product container"});
    $('main').append($sec);
    var $div = $('<div>', {"class": "productImage"});
    $("#blade"+counter).append($div)
    var $h2 = $('<h2>').text(prop)
    $("#blade"+counter).append($h2)
    var $h4 = $('<h4>').text('Cost: ' + object[prop]['Price'] + ' Rubys')
    $("#blade"+counter).append($h4)
    var $p1 = $('<p>').text('Previous Weilders Rating: '+ object[prop]['Stars'])
    $("#blade"+counter).append($p1)
    var $p2 = $('<p>').text(object[prop]['Description'])
    $("#blade"+counter).append($p2)
    var $but = $('<button>', {id: "but"+counter, "class": "addButton"}).text('ADD')
    $("#blade"+counter).append($but)
    counter++
  }
}

function generateImage() {

}

function generateItems(object) {
  generateSection(object)
  generateImage(object)
};



function filterResults() {

}

})
