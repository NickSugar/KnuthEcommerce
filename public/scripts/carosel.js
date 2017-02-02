$(document).ready(function () {
  $.get('./products.json')
  .then(function(data) {
    var datas = data
    datas.goldSword = {}
    console.log(datas);
    var dataKeyArray = Object.keys(data)

    function getImageURLs(key) {
      return data[key]['Image']
    }
    var productImages = dataKeyArray.map(getImageURLs)
    console.log(productImages);
    initializeCarousel(productImages)
  }).catch(function(error) {
    console.log(error);
  })
})

function setIntervalRight(productImages) {
  return setInterval(function () {
    carouselRight(productImages)
  }, 5000)
}

function carouselRight (productImages) {
  var firstImage = productImages.shift()
  productImages.push(firstImage)
  $('.carousel').attr('src', productImages[0])
}

function carouselLeft (productImages) {
  var firstImage = productImages.pop()
  productImages.unshift(firstImage)
  $('.carousel').attr('src', productImages[0])
}

function initializeCarousel(productImages) {

  $('.carousel').attr('src', productImages[0])
  var scroll = setIntervalRight(productImages)


  $('.carousel, .leftBtn, .rightBtn').hover(
      function () {
        clearInterval(scroll);
      },
      function () {
        scroll = setIntervalRight(productImages)
  });


  $('.rightBtn').on('click', function(){
    clearInterval(scroll);
    carouselRight(productImages);
    scroll = setIntervalRight(productImages)
  })

  $('.leftBtn').on('click', function () {
    clearInterval(scroll);
    carouselLeft(productImages);
    scroll = setIntervalRight(productImages)
  })
}
