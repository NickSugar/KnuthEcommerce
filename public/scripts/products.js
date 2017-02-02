$(document).ready(function () {

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
